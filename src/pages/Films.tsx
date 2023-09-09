import { useTranslation } from "react-i18next";
import { FilmView } from "../features/Film/FilmView";

function Films() {
  const { t } = useTranslation();
  return (
    <div className="page_container">
      <div className="film-component">
        <h1>{t("film contents")}</h1>
        <FilmView
          list={{
            id: "",
            name: "",
            title: "",
            poster_image: {
              path: "",
            },
            duration: "",
            imdb_rank_percent: 0,
            categories: [{ type: "", items: [{ title: "" }] }],
            year: 0,
          }}
          handleInfoFilm={function (
            categories: [{ type: string; items: [{ title: string }] }],
            type: string
          ) {
            throw new Error("Function not implemented.");
          }}
          handleDuration={function (time: string): string {
            throw new Error("Function not implemented.");
          }}
        />
      </div>
    </div>
  );
}

export default Films;
