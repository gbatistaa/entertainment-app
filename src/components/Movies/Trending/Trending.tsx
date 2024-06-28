import * as api from "../../../ts/Api/links";

import { useEffect, useState } from "react";

import { fetchingMovies, getMovieGenreByInfo } from "../../../ts/fetching/fetchingData";
import { Movie } from "../../../ts/interfaces/Movie";
import { MovieCard } from "../Card/MovieCard";

export function TrendingMovies() {
  const initialTrendingState: Movie[] = [];

  const [trendingMovies, setTrendingMovies] = useState(initialTrendingState);

  const fetchMovies = async () => {
    const trendingMoviesArray: Movie[] = await fetchingMovies(api.TRENDING, api.KEY);
    console.log(trendingMoviesArray);
    setTrendingMovies(trendingMoviesArray);
    const genre = await getMovieGenreByInfo(api.GENRES, "hxcbdsbxh", 18);
    console.log(genre);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <h1>TRENDING</h1>
      {trendingMovies.map((tm: Movie, index) => {
        return (
          <div key={index}>
            <MovieCard movieInfo={tm} />
          </div>
        );
      })}
    </>
  );
}
