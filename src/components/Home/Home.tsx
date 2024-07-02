import styles from "./home.module.css";

import { PageGuide } from "./Movies/PageGuide/PageGuide";
import { TrendingMovies } from "./Movies/Trending/Trending";

export function Home() {
  return (
    <div className={styles.home}>
      <PageGuide />
      <main className={styles.homePage}>
        <TrendingMovies />
      </main>
    </div>
  );
}
