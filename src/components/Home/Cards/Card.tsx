import { useEffect, useState } from "react";
import { FaRegBookmark, FaStar } from "react-icons/fa";

import * as api from "../../../ts/Api/links";
import { fetchMoviePoster, getMovieGenreByInfo } from "../../../ts/fetching/fetchingData";
import { CardType } from "../../../ts/interfaces/CardType";
import { Movie } from "../../../ts/interfaces/Movie";
import { TvSeries } from "../../../ts/interfaces/TvSeries";
import styles2 from "./card2.module.css";
import styles3 from "./genreMovieCard.module.css";
import styles from "./movieCard.module.css";

export function Card({ contentInfo, key, styleCode }: CardType) {
  const [poster, setPoster] = useState("");
  const [contentGenre, setMovieGenre] = useState<string | number>("");

  const moduleSwitcher = (classNum: number) => {
    switch (classNum) {
      case 1:
        //default
        return styles;
      case 2:
        //recomended
        return styles2;
      case 3:
        //genres list
        return styles3;
    }
  };

  const cssModule = moduleSwitcher(styleCode) as CSSModuleClasses;

  useEffect(() => {
    const fetchingPoster = async () => {
      const posterResponse = await fetchMoviePoster(api.IMAGE, contentInfo);
      const poster = (posterResponse as Response).url;
      setPoster(poster);
    };
    fetchingPoster();
  }, [contentInfo]);

  useEffect(() => {
    const fetchingGenre = async () => {
      let i = 0;
      let contentGenreData = await getMovieGenreByInfo(api.GENRES, api.KEY, contentInfo.genre_ids[i]);
      while (contentGenreData === undefined) {
        i++;
        if (i > contentInfo.genre_ids.length) break;
        contentGenreData = await getMovieGenreByInfo(api.GENRES, api.KEY, contentInfo.genre_ids[i]);
      }
      setMovieGenre(contentGenreData as string | number);
    };
    fetchingGenre();
  }, [setMovieGenre, contentInfo.genre_ids, contentGenre, contentInfo]);
  return (
    <div key={key} className={cssModule.movieCardContainer} style={{ backgroundImage: `url('${poster}')` }}>
      <div className={cssModule.movieCard}>
        <div className={cssModule.movieInfoContainer}>
          <div className={cssModule.movieInfoDiv}>
            <p className={cssModule.movieInfo}>
              {("first_air_date" in contentInfo
                ? (contentInfo as TvSeries).first_air_date
                : (contentInfo as Movie).release_date
              ).slice(0, 4)}
            </p>
            <p className={cssModule.movieInfo}>{contentGenre === "Science Fiction" ? "Sci-Fi" : contentGenre}</p>
            <p className={cssModule.movieInfo}>
              <FaStar />
              {contentInfo.vote_average.toFixed(1)}
            </p>
          </div>
          <p className={cssModule.movieTitle}>
            {"first_air_date" in contentInfo ? (contentInfo as TvSeries).name : (contentInfo as Movie).title}
          </p>
        </div>
        <div className={cssModule.bookmarkContainer}>
          <FaRegBookmark />
        </div>
      </div>
    </div>
  );
}
