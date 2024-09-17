import { useEffect, useState } from "react";
import * as api from "../../../../ts/Api/links";
import { fetchGenresList } from "../../../../ts/fetching/fetchingData";
import { Genre } from "../../../../ts/interfaces/Genre";
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
            return <div key={genre.id}>{JSON.stringify(genre)}</div>;
          })}
        </div>
      </div>
      <div className={styles.moviesContainer}></div>
    </>
  );
}
