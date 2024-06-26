export const fetchingMovies = async (moviesUrl: string, apiKey: string) => {
  try {
    const data = await fetch(`${moviesUrl}?${apiKey}`);
    const response = await data;
    return response;
  } catch (error) {
    console.log(error);
  }
};
