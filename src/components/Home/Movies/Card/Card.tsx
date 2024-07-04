import { useEffect, useState } from "react";
import { FaRegBookmark, FaStar } from "react-icons/fa";

import * as api from "../../../../ts/Api/links";
import { fetchMoviePoster } from "../../../../ts/fetching/fetchingData";
import { CardType } from "../../../../ts/interfaces/CardType";
import styles2 from "./card2.module.css";
import styles from "./movieCard.module.css";

export function Card({ movieInfo, key, isRecommended, isSeries }: CardType) {
  const [poster, setPoster] = useState("");
  const [movieGenre, setMovieGenre] = useState("");

  useEffect(() => {
    const fetchingPoster = async () => {
      const posterResponse = await fetchMoviePoster(api.IMAGE, movieInfo.backdrop_path);
      console.log(isSeries);
      const poster = posterResponse.url;
      setPoster(poster);
    };
    fetchingPoster();
  }, [movieInfo.backdrop_path, isSeries]);

  return (
    <div
      key={key}
      className={isRecommended ? styles2.movieCardContainer : styles.movieCardContainer}
      style={{ backgroundImage: `url('${poster}')` }}
    >
      <div className={isRecommended ? styles2.movieCard : styles.movieCard}>
        <div className={isRecommended ? styles2.movieInfoContainer : styles.movieInfoContainer}>
          <div className={isRecommended ? styles2.movieInfoDiv : styles.movieInfoDiv}>
            <p className={isRecommended ? styles2.movieInfo : styles.movieInfo}>{movieInfo.release_date.slice(0, 4)}</p>
            <p className={isRecommended ? styles2.movieInfo : styles.movieInfo}>Genre</p>
            <p className={isRecommended ? styles2.movieInfo : styles.movieInfo}>
              <FaStar />
              {movieInfo.vote_average.toFixed(1)}
            </p>
          </div>
          <p className={isRecommended ? styles2.movieTitle : styles.movieTitle}>{movieInfo.title}</p>
        </div>
        <div className={isRecommended ? styles2.bookmarkContainer : styles.bookmarkContainer}>
          <FaRegBookmark />
        </div>
      </div>
    </div>
  );
}
