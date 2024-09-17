import { useEffect, useState } from "react";
import * as api from "../../../../ts/Api/links";
import { Genre } from "../../../../ts/interfaces/Genre";
import styles from "./movies.module.css";

export function Movies() {
  const initialGenresListState: Genre[] = [];
  const [genres, setGenres] = useState(initialGenresListState);

  const fetchGenresList = async (genresUrl: string, apiKey: string) => {
    try {
      const response = await fetch(`${genresUrl}?api_key=${apiKey}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch genres: ${response.status}`);
      }
      const genresDataJson = await response.json();
      const genresArray: Genre[] = genresDataJson.genres;
      setGenres(genresArray);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error fetching genres:", error.message);
      } else {
        console.error("An unknown error occurred");
      }
    }
  };

  useEffect(() => {
    fetchGenresList(api.GENRES, api.KEY);
  }, []);

  return (
    <>
      <div>
        <h1>Movies</h1>
        <div>
          {genres.map((genre: Genre) => {
            return <div key={genre.id}>{genre.name}</div>;
          })}
        </div>
      </div>
      <div className={styles.moviesContainer}></div>
    </>
  );
}
