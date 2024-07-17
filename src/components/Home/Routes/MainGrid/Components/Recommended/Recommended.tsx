import { useEffect, useState } from "react";

import * as api from "../../../../ts/Api/links";
import { fetchingMovies, fetchingSeries } from "../../../../ts/fetching/fetchingData";
import { scrambleMoviesWithSeries } from "../../../../ts/functions/scramble";
import { Movie } from "../../../../ts/interfaces/Movie";
import { TvSeries } from "../../../../ts/interfaces/TvSeries";
import { Card } from "../Card/Card";
import styles from "./recommended.module.css";

export function Recommended() {
  const initialTrendingState: Movie[] = [];
  const initialSeriesState: TvSeries[] = [];
  const initialScrambledState: (TvSeries | Movie)[] = [];

  const [trendingMovies, setTrendingMovies] = useState(initialTrendingState);
  const [trendingSeries, setTrendingSeries] = useState(initialSeriesState);
  const [scrambled, setScrambled] = useState(initialScrambledState);

  const fetchMovies = async () => {
    const trendingMoviesArray: Movie[] = await fetchingMovies(api.TRENDING, api.KEY);
    setTrendingMovies(trendingMoviesArray);
  };

  const fetchSeries = async () => {
    const series: TvSeries[] = await fetchingSeries(api.TVSERIES, api.KEY);
    setTrendingSeries(series);
  };

  useEffect(() => {
    fetchMovies();
    fetchSeries();
  }, []);

  useEffect(() => {
    if (trendingMovies.length > 0 && trendingSeries.length > 0) {
      const all = scrambleMoviesWithSeries(trendingMovies, trendingSeries);
      setScrambled(all);
    }
  }, [trendingMovies, trendingSeries]);

  return (
    <div className={styles.recommendedContainer}>
      <p className={styles.homepageSubheading}>Recommended for you</p>
      <div className={styles.movieCardsContainer}>
        {scrambled.map((tm: Movie | TvSeries, index) => {
          return <Card contentInfo={tm} key={index} isRecommended={true} />;
        })}
      </div>
    </div>
  );
}
