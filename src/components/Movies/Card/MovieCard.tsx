import styles from "./movieCard.module.css";

import { FaRegBookmark } from "react-icons/fa";
import { Movie } from "../../../ts/interfaces/Movie";

export function MovieCard({ movieInfo }: { movieInfo: Movie }) {
  return (
    <div className={styles.movieCard}>
      <div className={styles.movieInfoContainer}>
        <div className={styles.movieInfoDiv}>
          <p className={styles.movieInfo}>2019</p>
          <p className={styles.movieInfo}>8.56</p>
          <p className={styles.movieInfo}>{ }</p>
        </div>
        <h1 className={styles.movieTitle}>{movieInfo.title}</h1>
      </div>
      <div className={styles.bookmarkContainer}>
        <FaRegBookmark />
      </div>
    </div>
  );
}
