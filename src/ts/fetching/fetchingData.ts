import { Genre } from "../interfaces/Genre";

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

export const fetchMoviePoster = async (posterUrl: string, posterPath: string) => {
  const poster = await fetch(`${posterUrl}${posterPath}`);
  return poster;
};
