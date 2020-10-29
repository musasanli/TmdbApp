export const getSearchedMovies = (state) => state.search?.data?.results;

export const getSearchIsLoading = (state) => state.search?.isLoading;

export const getIsSuccessfullyFetched = (state) =>
  state.search?.isSuccessfullyFetched;

export const getSelectedMovie = (state) => state.main?.selectedMovieData;

export const getShowSelectedMovie = (state) => state.main?.showSelectedMovie;

export const getShowSelectedMovieTrailer = (state) =>
  state.main?.selectedMovieDataTrailer?.results[0]?.key;

export const findRelatedGenres = (state, arr) => {
  const genres = [];
  arr.map((arrItem) => {
    genres.push(
      state.main?.genresData?.genres.find((x) => x.id === arrItem).name,
    );
  });

  return genres;
};
