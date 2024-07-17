import { useEffect, useState } from "react";

import * as api from "../../../../ts/Api/links";
import "./slider.css";
import styles from "./trending.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { fetchingMovies } from "../../../../ts/fetching/fetchingData";
import { Movie } from "../../../../ts/interfaces/Movie";
import { TvSeries } from "../../../../ts/interfaces/TvSeries";
import { Card } from "../Card/Card";

export function Trending() {
  const initialRecommendedState: Movie[] = [];

  const [trendingMovies, setRecommendedMovies] = useState(initialRecommendedState);

  const fetchMovies = async () => {
    const recommendedMoviesArray: Movie[] = await fetchingMovies(api.TRENDING, api.KEY);
    setRecommendedMovies(recommendedMoviesArray);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className={styles.trendingContainer}>
      <p className={styles.homepageSubheading}>Trending</p>
      <div className={styles.movieCardsContainer}>
        <Swiper slidesPerView={3} pagination={{ clickable: true }} spaceBetween={30} navigation>
          {trendingMovies.map((tm: Movie | TvSeries, index) => {
            return <SwiperSlide key={index}>{<Card contentInfo={tm} key={index} isRecommended={false} />}</SwiperSlide>;
          })}
        </Swiper>
      </div>
    </div>
  );
}
