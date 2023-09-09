import React, { useState } from "react";
import placeholderImage from "../../../public/images/placeholder/poster.svg";
import IMDBLogo from "../../../public/images/logo/imdb.png";
import "./singleFilm.scss";

interface IList {
    list: {
        id: string;
        name: string;
        title: string;
        poster_image:{ path:string };
        duration: string;
        imdb_rank_percent: number;
        categories: [];
        year: number;
    };
    handleInfoFilm: (categories: [], type:string) => any;
    handleDuration: (time:string) => any;
}


export const SingleFilm: React.FC<IList> = React.memo(({ list, handleInfoFilm, handleDuration }) => {
    const [loaded, setloaded] = useState(false);

    // check if film cover image is loaded or not
    const handleLoaded = () => {
        setloaded(true);
    };

    return (
        <>
            <div className="film-box" key={list?.id}>
                <div className="container ">
                    <img
                        loading="lazy"
                        src={loaded ? list?.poster_image.path : placeholderImage}
                        alt="Avatar"
            
                        onLoad={handleLoaded}
                    />
                    <div className="overlay">
                        <p>{handleInfoFilm(list?.categories, "genre")}</p>{" "}
                        <p className="film_info">
                            {handleInfoFilm(list?.categories, "territory")?.length > 0
                                ? list?.year + "/" + handleInfoFilm(list?.categories, "territory")
                                : list?.year}
                        </p>
                        {handleDuration(list?.duration) && (
                            <p className="duration">{handleDuration(list?.duration)}</p>
                        )}
                        <div className="imd_box">
                            <div>
                                <img loading="lazy" src={IMDBLogo} />
                            </div>
                            <div>{list?.imdb_rank_percent}</div>
                        </div>
                    </div>
                </div>
            </div>
            <p className="film_title">{list.title}</p>
        </>
    );
});

export default SingleFilm;
