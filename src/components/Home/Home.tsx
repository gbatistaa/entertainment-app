import * as api from "../../ts/Api/links";

import styles from "./home.module.css";

import { useEffect, useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { FaBookmark } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import { MdMovie } from "react-icons/md";
import { PiFilmStripFill, PiTelevision } from "react-icons/pi";

import { Link } from "react-router-dom";
import { fetchingMovies } from "../../ts/fetching/fetchingData";
import { Movie } from "../../ts/interfaces/Movie";
import { MovieCard } from "../Movies/MovieCard";

export function Home() {
  const initialTrendingState: Movie[] = [];
  const [trendingMovies, setTrendingMovies] = useState(initialTrendingState);

  const fetchMovies = async () => {
    const trendingMoviesArray: Movie[] = await fetchingMovies(api.TRENDING, api.KEY);
    // const movie = await fetchingMovies(api.MOVIE, api.KEY, 550);
    // const genres = await fetchingMoviesByGenre(api.MOVIES_BY_GENRE, api.GENRES, api.KEY, "Horror");
    console.log(trendingMoviesArray);
    setTrendingMovies(trendingMoviesArray);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <main className={styles.mainSection}>
      <section className={styles.pageGuideContainer}>
        <div className={styles.pageGuide}>
          <Link to={"/home"}>
            <MdMovie size={30} className={styles.moviesLogo} />
          </Link>
          <nav className={styles.pagesNavigate}>
            <ul>
              <li>
                <Link to={"/home/main"}>
                  <IoGrid size={20} className={styles.navIcons} />
                </Link>
              </li>

              <li style={{ transform: "rotate(90deg)" }}>
                <Link to={"/home/movies"}>
                  <PiFilmStripFill size={20} className={styles.navIcons} />
                </Link>
              </li>

              <li>
                <Link to={"/home/tvseries"}>
                  <PiTelevision size={20} className={styles.navIcons} />
                </Link>
              </li>

              <li>
                <Link to={"/home/bookmarked"}>
                  <FaBookmark size={20} className={styles.navIcons} />
                </Link>
              </li>
            </ul>
          </nav>
          <Link to={"/profile"} style={{ marginTop: "auto" }}>
            <BsPersonCircle size={25} />
          </Link>
        </div>
      </section>
      <section className={styles.moviesGrid}>
        <h1>TRENDING</h1>
        <div>
          <MovieCard />
        </div>
        <div></div>
      </section>
    </main>
  );
}
