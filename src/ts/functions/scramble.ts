import { Movie } from "../interfaces/Movie";
import { TvSeries } from "../interfaces/TvSeries";

export const scrambleMoviesWithSeries = (moviesArray: Movie[], seriesArray: TvSeries[]) => {
  const scrambledArray: (Movie | TvSeries)[] = [...moviesArray, ...seriesArray];

  for (let i = 0; i < scrambledArray.length; i++) {
    const [firstIndex, secondIndex] = [Math.floor(Math.random() * 40), Math.floor(Math.random() * 40)];
    const pivot = scrambledArray[firstIndex];
    scrambledArray[firstIndex] = scrambledArray[secondIndex];
    scrambledArray[secondIndex] = pivot;
  }

  return scrambledArray;
};
