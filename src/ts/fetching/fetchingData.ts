import { Genre } from "../interfaces/Genre";
import { Movie } from "../interfaces/Movie";
import { TvSeries } from "../interfaces/TvSeries";

export const fetchingMovies = async (moviesUrl: string, apiKey: string, movieId?: number) => {
  try {
    const data = await fetch(`${moviesUrl}${movieId === undefined ? "" : movieId}?api_key=${apiKey}`);
    const response = await data.json();
    return movieId === undefined ? response.results : response;
  } catch (error) {
    console.log(error);
    return [];
  }
};
export const fetchingSeries = async (seriesUrl: string, apiKey: string, seriesId?: number) => {
  try {
    const data = await fetch(`${seriesUrl}${seriesId === undefined ? "" : seriesId}api_key=${apiKey}`);
    const response = await data.json();
    return response.results;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getMovieGenreByInfo = async (genresUrl: string, apiKey: string, genreSelectedInfo: string | number) => {
  try {
    const genresData = await fetch(`${genresUrl}?api_key=${apiKey}`);
    const genresJson = await genresData.json();
    const genresArray: Genre[] = genresJson.genres;
    const genreSelected = genresArray.filter((g) => {
      if (typeof genreSelectedInfo === "string") return g.name.toLowerCase() === genreSelectedInfo?.toLowerCase();
      else return g.id === genreSelectedInfo;
    })[0];
    return typeof genreSelectedInfo === "string" ? genreSelected.id : genreSelected.name;
  } catch (error) {
    console.log(error);
  }
};

export const fetchingMoviesArray = async (moviesUrl: string, genresUrl: string, genreSelected: string) => {
  try {
    // Finding the genre id by the given name:

    const genreSelectedId = getMovieGenreByInfo(genresUrl, genreSelected, genreSelected);

    // Using the found id to fetch the movie list:

    const moviesByGenreData = await fetch(`${moviesUrl}${genreSelectedId}`);
    const moviesByGenreJson = await moviesByGenreData.json();
    const moviesByGenre = moviesByGenreJson.results;

    return moviesByGenre;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMoviePoster = async (posterUrl: string, content: Movie | TvSeries) => {
  try {
    if (content === undefined) throw Error("This content does not exist");
    else {
      const poster = await fetch(`${posterUrl}${content.backdrop_path}`);
      return poster;
    }
  } catch (error) {
    console.log(error);
  }
};

export const fetchingMoviesListFromGenre = async (iterator: number, genreId: number) => {
  try {
    const moviesData = await fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${iterator}&sort_by=popularity.desc&with_genres=${genreId}&with_original_language=en`,
    );
    if (!moviesData.ok) {
      throw new Error(`Failed to fetch genres: ${moviesData.status}`);
    }
    const moviesDataJson = await moviesData.json();
    const movieDataResults: Movie[] = moviesDataJson.results;
    return movieDataResults;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error fetching genres:", error.message);
    } else {
      console.error("An unknown error occurred");
    }
  }
};

export const fetchGenresList = async (genresUrl: string, apiKey: string) => {
  try {
    const response = await fetch(`${genresUrl}?api_key=${apiKey}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch genres: ${response.status}`);
    }
    const genresDataJson = await response.json();
    return genresDataJson;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error fetching genres:", error.message);
    } else {
      console.error("An unknown error occurred");
    }
  }
};
