export const findNewMoviesIndex = (currentSelectedMovieIndex: number): number => {
  const newSelectedMovieIndex = currentSelectedMovieIndex + 2;

  return newSelectedMovieIndex;
};
