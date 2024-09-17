import { useEffect, useState } from "react";
import * as api from "../../../../ts/Api/links";
import { fetchGenresList } from "../../../../ts/fetching/fetchingData";
import { Genre } from "../../../../ts/interfaces/Genre";
import styles from "./movies.module.css";

export function Movies() {
  const initialGenresListState: Genre[] = [];
  const [genres, setGenres] = useState(initialGenresListState);

  useEffect(() => {
    const genresList: Genre[] = fetchGenresList(api.GENRES, api.KEY) as unknown as Genre[];
    setGenres(genresList);
  }, []);

  return (
    <>
      <div>
        <h1>Movies</h1>
        <div>
          {genres.map((genre: Genre) => {
            return <div key={genre.id}>{JSON.stringify(genre)}</div>;
          })}
        </div>
      </div>
      <div className={styles.moviesContainer}></div>
    </>
  );
}
