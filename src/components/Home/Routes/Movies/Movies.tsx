import { useEffect, useState } from "react";
import * as api from "../../../../ts/Api/links";
import { fetchGenresList } from "../../../../ts/fetching/fetchingData";
import { Genre } from "../../../../ts/interfaces/Genre";
import { GenreMovieList } from "./GenreMovieList";
import styles from "./movies.module.css";

export function Movies() {
  const initialGenresListState: Genre[] = [];
  const [genres, setGenres] = useState(initialGenresListState);

  useEffect(() => {
    const fetchData = async () => {
      const genresListResponse = await fetchGenresList(api.GENRES, api.KEY);
      const genresListData = genresListResponse.genres;
      setGenres(genresListData);
    };
    fetchData();
  }, []);

  return (
    <>
      <div>
        <h1>Movies</h1>
        <div>
          {genres.map((genre: Genre) => {
            return <GenreMovieList key={genre.id} genreId={genre.id} />;
          })}
        </div>
      </div>
      <div className={styles.moviesContainer}></div>
    </>
  );
}
