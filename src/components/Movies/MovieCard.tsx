import styles from "./movieCard.module.css";

import { FaRegBookmark } from "react-icons/fa";

// export function MovieCard({ moviesArray }: MovieCardType) {
//   return (
//     <>
//       <h1>TRENDING</h1>
//       {moviesArray.map((tm: Movie, index) => {
//         return <p key={index}>{tm.title}</p>;
//       })}
//     </>
//   );
// }
export function MovieCard() {
  return (
    <div className={styles.movieCard}>
      <div className={styles.movieInfoContainer}>
        <div className={styles.movieInfoDiv}>
          <p className={styles.movieInfo}>2019</p>
          <p className={styles.movieInfo}>8.56</p>
          <p className={styles.movieInfo}>Horror</p>
        </div>
        <h1 className={styles.movieTitle}>Chuck Toy</h1>
      </div>
      <div className={styles.bookmarkContainer}>
        <FaRegBookmark />
      </div>
    </div>
  );
}
