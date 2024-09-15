import styles from "./moviesGrid.module.css";

import { Recommended } from "../Components/Recommended/Recommended";
import { Trending } from "../Components/Trending/Trending";

export function MoviesGrid() {
  return (
    <section className={styles.moviesGrid}>
      <Trending />
      <Recommended />
    </section>
  );
}
