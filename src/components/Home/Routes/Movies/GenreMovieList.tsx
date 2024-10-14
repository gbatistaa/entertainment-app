import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import * as api from "../../../../ts/Api/links";
import { fetchingMoviesListFromGenre, getMovieGenreByInfo } from "../../../../ts/fetching/fetchingData";
import { Movie } from "../../../../ts/interfaces/Movie";
import { Card } from "../../Cards/Card";
import styles from "./genreMovieList.module.css";

export function GenreMovieList({ genreId }: { genreId: number }) {
  const initialMoviesState: Movie[] = [];
  const [moviesOfGenre, setMoviesOfGenre] = useState(initialMoviesState);
  const [genreName, setGenreName] = useState("");

  useEffect(() => {
    const fetchMovieList = async () => {
      const movieList = await fetchingMoviesListFromGenre(1, genreId, api.KEY);
      if (movieList !== undefined) setMoviesOfGenre(movieList);
    };
    fetchMovieList();
  }, [genreId, moviesOfGenre]);

  useEffect(() => {
    const fetchGenreName = async () => {
      const genreNameData = await getMovieGenreByInfo(api.GENRES, api.KEY, genreId);
      setGenreName(genreNameData as string);
    };
    fetchGenreName();
  }, [genreId]);

  return (
    <div className={styles.genreList}>
      <h2>{genreName}</h2>
      <div className={styles.genreFilmSwiperContainer}>
        <Swiper slidesPerView={4} pagination={{ clickable: true }} spaceBetween={30} navigation>
          {moviesOfGenre.map((movie: Movie, index: number) => {
            return (
              <SwiperSlide key={index}>{<Card contentInfo={movie} key={index} isRecommended={false} />}</SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
