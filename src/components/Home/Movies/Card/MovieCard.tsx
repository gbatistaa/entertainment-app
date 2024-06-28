import { useEffect, useState } from "react";
import { FaRegBookmark, FaStar } from "react-icons/fa";
import * as api from "../../../ts/Api/links";
import { fetchMoviePoster } from "../../../ts/fetching/fetchingData";
import { Movie } from "../../../ts/interfaces/Movie";
import styles from "./movieCard.module.css";

export function MovieCard({ movieInfo }: { movieInfo: Movie }) {
  const [moviePoster, setMoviePoster] = useState("");
  const [movieGenre, setMovieGenre] = useState("");

  useEffect(() => {
    const fetchingPoster = async () => {
      const posterResponse = await fetchMoviePoster(api.IMAGE, movieInfo.backdrop_path);
      const poster = posterResponse.url;
      console.log(poster);
      setMoviePoster(poster);
    };
    fetchingPoster();
  }, [movieInfo.backdrop_path]);

  console.log(movieInfo);

  return (
    <div className={styles.movieCardContainer} style={{ backgroundImage: `url('${moviePoster}')` }}>
      <div className={styles.movieCard}>
        <div className={styles.movieInfoContainer}>
          <div className={styles.movieInfoDiv}>
            <p className={styles.movieInfo}>{movieInfo.release_date.slice(0, 4)}</p>
            <p className={styles.movieInfo}>Genre</p>
            <p className={styles.movieInfo}>
              <FaStar />
              {movieInfo.vote_average.toFixed(2)}
            </p>
          </div>
          <h1 className={styles.movieTitle}>{movieInfo.title}</h1>
        </div>
        <div className={styles.bookmarkContainer}>
          <FaRegBookmark />
        </div>
      </div>
    </div>
  );
}
