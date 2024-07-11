import { Movie } from "./Movie";
import { TvSeries } from "./TvSeries";

export interface CardType {
  contentInfo: Movie | TvSeries;
  key: number;
  isRecommended: boolean;
}
