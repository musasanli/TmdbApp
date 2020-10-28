export const getSearchedMovies = (state) => state.search?.data?.results;

export const getSearchIsLoading = (state) => state.search?.isLoading;

export const getIsSuccessfullyFetched = (state) =>
  state.search?.isSuccessfullyFetched;

export const findRelatedGenres = (state, arr) => {
  const genres = [];
  arr.map((arrItem) => {
    genres.push(state.main?.data?.genres.find((x) => x.id === arrItem).name);
  });

  return genres;
};
