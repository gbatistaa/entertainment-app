import styles from "./home.module.css";

import { IoSearch } from "react-icons/io5";

import { PageGuide } from "./Movies/PageGuide/PageGuide";
import { Recommended } from "./Movies/Recommended/Recommended";
import { Trending } from "./Movies/Trending/Trending";

export function Home() {
  return (
    <div className={styles.home}>
      <PageGuide />
      <main className={styles.homePage}>
        <label className={styles.movieInputContainer}>
          <IoSearch size={25} />
          <input
            type="text"
            placeholder="Search for Movies or TV series"
            name="movie"
            className={styles.movieInputSearch}
            autoComplete="off"
          />
        </label>
        <section className={styles.moviesGrid}>
          <Trending />
          <Recommended />
        </section>
      </main>
    </div>
  );
}
