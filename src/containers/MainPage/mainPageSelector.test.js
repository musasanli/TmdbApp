import {
  getSearchedMovies,
  getSearchIsLoading,
  getIsSuccessfullyFetched,
  getSelectedMovie,
  getShowSelectedMovie,
  shouldDisplayHome,
  shouldDisplayFavorites,
  shouldDisplayWatchlist,
  getFavoritesMovies,
  getWatchlistMovies,
  getShowSelectedMovieTrailer,
  findRelatedGenres,
  isFavedMoviesChanged,
  isWatchlistMoviesChanged,
} from './selector';

describe('MainPageSelector', () => {
  const exampleMoviesArray = [
    {
      popularity: 2235.816,
      vote_count: 34,
      video: false,
      poster_path: '/ugZW8ocsrfgI95pnQ7wrmKDxIe.jpg',
      id: 724989,
      adult: false,
      backdrop_path: '/86L8wqGMDbwURPni2t7FQ0nDjsH.jpg',
      original_language: 'en',
      original_title: 'Leo Movie',
      genre_ids: [28, 53],
      title: 'Leo Movie',
      vote_average: 4.5,
      overview: 'Leo Movie Description',
      release_date: '2020-10-23',
      homepage: 'https://www.test.com/',
      runtime: 90,
    },
    {
      popularity: 225.816,
      vote_count: 5,
      video: false,
      poster_path: '/ugZW8ocsrfgI95pnQ7wrmKDxIe.jpg',
      id: 7289,
      adult: false,
      backdrop_path: '/86L8wqGMDbwURPni2t7FQ0nDjsH.jpg',
      original_language: 'en',
      original_title: 'Leo Movie Second',
      genre_ids: [28, 55],
      title: 'Leo Movie Second',
      vote_average: 4.5,
      overview: 'Leo Movie Description Second',
      release_date: '2020-10-19',
      homepage: 'https://www.test.com/second',
      runtime: 90,
    },
  ];

  it('should return getSearchedMovies from store', () => {
    const state = {
      search: {
        data: {
          results: exampleMoviesArray,
        },
      },
    };
    const result = getSearchedMovies(state);
    expect(result).toBe(exampleMoviesArray);
  });

  it('should return getSearchIsLoading from store', () => {
    const isLoading = false;
    const state = {
      search: {
        isLoading,
      },
    };
    const result = getSearchIsLoading(state);
    expect(result).toBe(isLoading);
  });

  it('should return getIsSuccessfullyFetched from store', () => {
    const isSuccessfullyFetched = true;
    const state = {
      search: {
        isSuccessfullyFetched,
      },
    };
    const result = getIsSuccessfullyFetched(state);
    expect(result).toBe(isSuccessfullyFetched);
  });

  it('should return getSelectedMovie from store', () => {
    const selectedMovie = {
      popularity: 2235.816,
      vote_count: 34,
      video: false,
      poster_path: '/ugZW8ocsrfgI95pnQ7wrmKDxIe.jpg',
      id: 724989,
      adult: false,
      backdrop_path: '/86L8wqGMDbwURPni2t7FQ0nDjsH.jpg',
      original_language: 'en',
      original_title: 'Leo Movie',
      genre_ids: [28, 53],
      title: 'Leo Movie',
      vote_average: 4.5,
      overview: 'Leo Movie Description',
      release_date: '2020-10-23',
      homepage: 'https://www.test.com/',
      runtime: 90,
    };
    const state = {
      main: {
        selectedMovieData: selectedMovie,
      },
    };
    const result = getSelectedMovie(state);
    expect(result).toBe(selectedMovie);
  });

  it('should return getShowSelectedMovie from store', () => {
    const showSelectedMovie = true;
    const state = {
      main: {
        showSelectedMovie,
      },
    };
    const result = getShowSelectedMovie(state);
    expect(result).toBe(showSelectedMovie);
  });

  it('should return shouldDisplayHome from store', () => {
    const showHome = true;
    const state = {
      main: {
        showHome,
      },
    };
    const result = shouldDisplayHome(state);
    expect(result).toBe(showHome);
  });

  it('should return shouldDisplayFavorites from store', () => {
    const showFavorites = true;
    const state = {
      main: {
        showFavorites,
      },
    };
    const result = shouldDisplayFavorites(state);
    expect(result).toBe(showFavorites);
  });

  it('should return shouldDisplayWatchlist from store', () => {
    const showWatchlist = true;
    const state = {
      main: {
        showWatchlist,
      },
    };
    const result = shouldDisplayWatchlist(state);
    expect(result).toBe(showWatchlist);
  });

  it('should return getFavoritesMovies from store', () => {
    const state = {
      main: {
        favData: {
          results: exampleMoviesArray,
        },
      },
    };
    const result = getFavoritesMovies(state);
    expect(result).toBe(exampleMoviesArray);
  });

  it('should return getWatchlistMovies from store', () => {
    const state = {
      main: {
        watchData: {
          results: exampleMoviesArray,
        },
      },
    };
    const result = getWatchlistMovies(state);
    expect(result).toBe(exampleMoviesArray);
  });

  it('should return getShowSelectedMovieTrailer from store', () => {
    const trailerObject = {
      id: '5d9d9277f96a390033f76225',
      iso_639_1: 'en',
      iso_3166_1: 'US',
      key: 'a3aFv8IQb4s',
      name:
        'Kill Bill - The Bride VS. Gogo and The Crazy 88s (Alternate Version)',
      site: 'YouTube',
      size: 1080,
      type: 'Clip',
    };
    const state = {
      main: {
        selectedMovieDataTrailer: {
          results: [trailerObject],
        },
      },
    };
    const result = getShowSelectedMovieTrailer(state);
    expect(result).toBe(trailerObject.key);
  });

  it('should return findRelatedGenres from store', () => {
    const givenGenres = [28, 36];
    const expectedGenres = ['Action', 'Comedy'];
    const state = {
      main: {
        genresData: {
          genres: [
            {
              id: 28,
              name: 'Action',
            },
            {
              id: 36,
              name: 'Comedy',
            },
            {
              id: 53,
              name: 'Adventure',
            },
          ],
        },
      },
    };
    const result = findRelatedGenres(state, givenGenres);
    expect(result).toHaveLength(2);
    expect(result[0]).toBe(expectedGenres[0]);
    expect(result[1]).toBe(expectedGenres[1]);
  });

  it('should return isFavedMoviesChanged from store', () => {
    const isFavlistChanged = false;
    const state = {
      movieItem: {
        isFavlistChanged,
      },
    };
    const result = isFavedMoviesChanged(state);
    expect(result).toBe(isFavlistChanged);
  });

  it('should return isWatchlistMoviesChanged from store', () => {
    const isWatchlistChanged = false;
    const state = {
      movieItem: {
        isWatchlistChanged,
      },
    };
    const result = isWatchlistMoviesChanged(state);
    expect(result).toBe(isWatchlistChanged);
  });
});
