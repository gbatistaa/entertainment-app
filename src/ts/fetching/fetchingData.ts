import { Genre } from "../interfaces/Genre";

export const fetchingMovies = async (moviesUrl: string, apiKey: string, movieId?: number) => {
  try {
    const data = await fetch(`${moviesUrl}${movieId === undefined ? "" : movieId}?${apiKey}`);
    const response = await data.json();
    return movieId === undefined ? response.results : response;
  } catch (error: unknown) {
    console.log(error);
    return [];
  }
};

export const fetchingMoviesByGenre = async (
  moviesUrl: string,
  genresUrl: string,
  apiKey: string,
  genreSelected?: string,
) => {
  try {
    // Finding the genre id by the given name:

    const genresData = await fetch(`${genresUrl}?${apiKey}`);
    const genresJson = await genresData.json();
    const genresArray: Genre[] = genresJson.genres;
    const genreSelectedId = genresArray.filter((g) => g.name.toLowerCase() === genreSelected?.toLowerCase())[0].id;

    // Using the found id to fetch the movie list:

    const moviesByGenreData = await fetch(`${moviesUrl}${genreSelectedId}`);
    const moviesByGenreJson = await moviesByGenreData.json();
    const moviesByGenre = moviesByGenreJson.results;

    return moviesByGenre;
  } catch (error: unknown) {
    console.log(error);
    return new Error(`${error}`);
  }
};
