export const getSearchedMovies = (state) => state.search?.data?.results;

export const getSearchIsLoading = (state) => state.search?.isLoading;

export const getIsSuccessfullyFetched = (state) =>
  state.search?.isSuccessfullyFetched;

export const getSelectedMovie = (state) => state.main?.selectedMovieData;

export const getShowSelectedMovie = (state) => state.main?.showSelectedMovie;

export const shouldDisplayHome = (state) => state.main?.showHome;

export const shouldDisplayFavorites = (state) => state.main?.showFavorites;

export const shouldDisplayWatchlist = (state) => state.main?.showWatchlist;

export const getFavoritesMovies = (state) => state.main?.favData?.results;

export const getWatchlistMovies = (state) => state.main?.watchData?.results;

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

export const isFavedMoviesChanged = (state) =>
  state.movieItem?.isFavlistChanged;

export const isWatchlistMoviesChanged = (state) =>
  state.movieItem?.isWatchlistChanged;
