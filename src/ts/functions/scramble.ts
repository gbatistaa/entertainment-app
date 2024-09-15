import { Movie } from "../interfaces/Movie";
import { TvSeries } from "../interfaces/TvSeries";

export const scrambleMoviesWithSeries = (moviesArray: Movie[], seriesArray: TvSeries[]) => {
  const scrambledArray: (Movie | TvSeries)[] = [...moviesArray, ...seriesArray];
  for (let i = 0; i < scrambledArray.length; i++) {
    const [firstIndex, secondIndex] = [
      Math.floor(Math.random() * scrambledArray.length - 1),
      Math.floor(Math.random() * scrambledArray.length - 1),
    ];
    const pivot = scrambledArray[firstIndex];
    scrambledArray[firstIndex] = scrambledArray[secondIndex];
    scrambledArray[secondIndex] = pivot;
  }

  return scrambledArray;
};
