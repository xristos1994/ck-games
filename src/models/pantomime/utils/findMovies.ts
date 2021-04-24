import { Movies } from "../config";

export const findMovies = (
  currentSelectedMovieIndex
): { movies: [string, string]; index: number } => {
  const newSelectedMovieIndex = currentSelectedMovieIndex + 2;
  const moviesLength = Movies.length;

  return {
    movies: [
      Movies[newSelectedMovieIndex % moviesLength],
      Movies[(newSelectedMovieIndex + 1) % moviesLength],
    ],
    index: newSelectedMovieIndex,
  };
};
