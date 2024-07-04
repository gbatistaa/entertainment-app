import { Movie } from "../interfaces/Movie";
import { TvSeries } from "../interfaces/TvSeries";

export const scrambleMoviesWithSeries = (moviesArray: Movie[], seriesArray: TvSeries[]) => {
  const scrambledArray: (Movie | TvSeries)[] = [...moviesArray, ...seriesArray];
  return scrambledArray;
};
