import styles from "./moviesGrid.module.css";

import { Recommended } from "../Movies/Recommended/Recommended";
import { Trending } from "../Movies/Trending/Trending";

export function MoviesGrid() {
  return (
    <section className={styles.moviesGrid}>
      <Trending />
      <Recommended />
    </section>
  );
}
