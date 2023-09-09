import { useAppSelector } from "../../app/hooks";
import useInfiniteScroll from "../../components/useInfiniteScroll";
import SingleFilm from "../../pages/SingleFilm/SingleFilm";
import LoadingBox from "../../components/LoadingBox/LoadingBox";
import "./index.scss";

interface IList {
    list: {
        id: string;
        name: string;
        title: string;
        poster_image:{ path:string };
        duration: string;
        imdb_rank_percent: number;
        categories: [{type:string, items:[{title:string}]}];
        year: number;
    };
    handleInfoFilm: (categories: [{type:string, items:[{title:string}]}], type:string) => any;
    handleDuration: (time:string) => string;
}


export const FilmView: React.FC<IList> = () => {
    const [isFetching] = useInfiniteScroll();
    const films = useAppSelector((state) => state.film.films) || [];

    // method for handle genre and created country of film on hover overlay
    const handleInfoFilm = (categories:[{type:string, items:[{title:string}]}], type: string) => {
        if (categories?.length) {
            const array = categories.find((item: any) => item.type === type);
            return array?.items?.map((data: any) => data.title).join(" ")
        } else {
            return "";
        }
    };

    // method for handle duration of time on hover overlay
    const handleDuration = (time: string) => {
        const a = time?.split(":"); // split it at the colons
        if (a) {
            const [hour, min] = a;
            // Hours are worth 60 minutes.
            return Math.floor(Number(hour)) > 0
                ? Math.floor(Number(hour)) + " ساعت و" + Math.floor(Number(min)) + " دقیقه"
                : Math.floor(Number(min)) + " دقیقه";
        } else "";
    };
    return (
        <span>
            <div className="total">
                <div className="films-box">
                    {films.map((list: object) => (
                        <div className="container">
                            <SingleFilm
                                list={list}
                                handleInfoFilm={handleInfoFilm}
                                handleDuration={handleDuration}
                            />
                        </div>
                    ))}
                </div>

                <span>{isFetching && <LoadingBox />}</span>
            </div>
        </span>
    );
};
