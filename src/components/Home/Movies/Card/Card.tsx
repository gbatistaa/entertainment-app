import { useEffect, useState } from "react";
import { FaRegBookmark, FaStar } from "react-icons/fa";

import * as api from "../../../../ts/Api/links";
import { fetchMoviePoster, getMovieGenreByInfo } from "../../../../ts/fetching/fetchingData";
import { CardType } from "../../../../ts/interfaces/CardType";
import { Movie } from "../../../../ts/interfaces/Movie";
import { TvSeries } from "../../../../ts/interfaces/TvSeries";
import styles2 from "./card2.module.css";
import styles from "./movieCard.module.css";

export function Card({ contentInfo, key, isRecommended }: CardType) {
  const [poster, setPoster] = useState("");
  const [contentGenre, setMovieGenre] = useState<string | number>("");

  useEffect(() => {
    const fetchingPoster = async () => {
      const posterResponse = await fetchMoviePoster(api.IMAGE, contentInfo.backdrop_path);
      const poster = posterResponse.url;
      setPoster(poster);
    };
    fetchingPoster();
  }, [contentInfo.backdrop_path]);

  useEffect(() => {
    const fetchingGenre = async () => {
      const mainGenre = contentInfo.genre_ids[0];
      const contentGenreData = await getMovieGenreByInfo(api.GENRES, api.KEY, mainGenre);
      setMovieGenre(contentGenreData as string | number);
    };
    fetchingGenre();
    console.log(contentInfo.genre_ids);
  }, [setMovieGenre, contentInfo.genre_ids, contentGenre, contentInfo]);
  return (
    <div
      key={key}
      className={isRecommended ? styles2.movieCardContainer : styles.movieCardContainer}
      style={{ backgroundImage: `url('${poster}')` }}
    >
      <div className={isRecommended ? styles2.movieCard : styles.movieCard}>
        <div className={isRecommended ? styles2.movieInfoContainer : styles.movieInfoContainer}>
          <div className={isRecommended ? styles2.movieInfoDiv : styles.movieInfoDiv}>
            <p className={isRecommended ? styles2.movieInfo : styles.movieInfo}>
              {("first_air_date" in contentInfo
                ? (contentInfo as TvSeries).first_air_date
                : (contentInfo as Movie).release_date
              ).slice(0, 4)}
            </p>
            <p className={isRecommended ? styles2.movieInfo : styles.movieInfo}>{contentGenre}</p>
            <p className={isRecommended ? styles2.movieInfo : styles.movieInfo}>
              <FaStar />
              {contentInfo.vote_average.toFixed(1)}
            </p>
          </div>
          <p className={isRecommended ? styles2.movieTitle : styles.movieTitle}>
            {"first_air_date" in contentInfo ? (contentInfo as TvSeries).name : (contentInfo as Movie).title}
          </p>
        </div>
        <div className={isRecommended ? styles2.bookmarkContainer : styles.bookmarkContainer}>
          <FaRegBookmark />
        </div>
      </div>
    </div>
  );
}
