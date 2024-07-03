export interface TvSeries {
  readonly name: string;
  readonly first_air_date: string;
  readonly backdrop_path: string;
  readonly genre_ids: number[];
  readonly vote_average: number;
  readonly overview: string;
  readonly origin_country: string[];
}
