import { useEffect, useState } from "react";
import * as api from "../../../../ts/Api/links";
import { fetchingMoviesListFromGenre } from "../../../../ts/fetching/fetchingData";
import { Movie } from "../../../../ts/interfaces/Movie";

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
    console.log(moviesOfGenre);
  }, [genreId, moviesOfGenre]);

  return (
    <div>
      {moviesOfGenre.map((movie: Movie) => {
        return <div key={movie.id}>{movie.title}</div>;
      })}
    </div>
  );
}
