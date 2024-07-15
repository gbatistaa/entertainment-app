import styles from "./mainPage.module.css";

import { IoSearch } from "react-icons/io5";
import { Outlet } from "react-router-dom";
import { PageGuide } from "./Movies/PageGuide/PageGuide";

export function MainPage() {
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
        <Outlet />
      </main>
    </div>
  );
}
