import { Movie } from "./Movie";

export interface CardType {
  movieInfo: Movie;
  key: number;
  isRecommended: boolean;
  isSeries: boolean;
}
