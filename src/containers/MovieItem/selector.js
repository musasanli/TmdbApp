export const checkIsFaved = (state, id) => {
  const favedMovies = state.main?.favData?.results;
  return favedMovies?.some((item) => item.id === id);
};

export const checkIsInWatchlist = (state, id) => {
  const watchlistMovies = state.main?.watchData?.results;
  return watchlistMovies?.some((item) => item.id === id);
};
