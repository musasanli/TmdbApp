export const getSearchedMovies = (state) => state.search?.data?.results;
export const getSearchIsLoading = (state) => state.search?.isLoading;
export const getIsSuccessfullyFetched = (state) =>
  state.search?.isSuccessfullyFetched;
