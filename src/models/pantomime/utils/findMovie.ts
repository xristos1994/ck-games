import { Movies } from "../config";

export const findMovie = (
  currentSelectedMovieIndex
): { movie: string; index: number } => {
  const newSelectedMovieIndex = currentSelectedMovieIndex + 1;

  return {
    movie: Movies[newSelectedMovieIndex],
    index: newSelectedMovieIndex,
  };
};
