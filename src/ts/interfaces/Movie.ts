export interface Movie {
  readonly title: string;
  readonly vote_average: number;
  readonly release_date: string;
  readonly overview: string;
  readonly backdrop_path: string;
  readonly genre_ids: number[];
  isMovie: boolean;
}
