import {
  fetchedGenres,
  fetchedSelectedMovie,
  fetchedSelectedMovieTrailer,
  closeSelectedMovie,
  fetchedFavoritesMovies,
  fetchedWatchlistMovies,
  showHome,
  showFavorites,
  showWatchlist,
} from './action';
import { actionTypes } from './types';

describe('MainPage actions', () => {
  it('should create an action to create FETCH_GENRES with default overwrite value', () => {
    const data = [
      {
        id: 28,
        name: 'Action',
      },
      {
        id: 16,
        name: 'Animation',
      },
      {
        id: 35,
        name: 'Comedy',
      },
    ];

    const expectedAction = {
      type: actionTypes.FETCH_GENRES,
      data,
    };

    expect(fetchedGenres(data)).toEqual(expectedAction);
  });

  it('should create an action to create GET_SELECTED_MOVIE with default overwrite value', () => {
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

    const expectedAction = {
      type: actionTypes.GET_SELECTED_MOVIE,
      data: selectedMovie,
      showSelectedMovie: true,
    };

    expect(fetchedSelectedMovie(selectedMovie)).toEqual(expectedAction);
  });

  it('should create an action to create GET_SELECTED_MOVIE_TRAILER with default overwrite value', () => {
    const getSelectedMovieTrailer = {
      id: '5f10c20a2495ab0032397958',
      key: '7Y6-w5Psupw',
      name: 'Hard Kill | Official Trailer (HD) | Vertical Entertainment',
      site: 'YouTube',
      size: 1080,
      type: 'Trailer',
    };

    const expectedAction = {
      type: actionTypes.GET_SELECTED_MOVIE_TRAILER,
      data: getSelectedMovieTrailer,
    };

    expect(fetchedSelectedMovieTrailer(getSelectedMovieTrailer)).toEqual(
      expectedAction,
    );
  });

  it('should create an action to create CLOSE_SELECTED_MOVIE', () => {
    const expectedAction = {
      type: actionTypes.CLOSE_SELECTED_MOVIE,
    };

    expect(closeSelectedMovie()).toEqual(expectedAction);
  });

  it('should create an action to create FETCH_FAVORITE_MOVIES with default overwrite value', () => {
    const favoriteMovies = [
      {
        id: 528085,
        video: false,
        vote_count: 207,
        vote_average: 5.3,
        title: '2067',
        release_date: '2020-10-01',
        original_language: 'en',
        original_title: '2067',
        backdrop_path: '/5UkzNSOK561c2QRy2Zr4AkADzLT.jpg',
        adult: false,
        overview:
          'A lowly utility worker is called to the future by a mysterious radio signal, he must leave his dying wife to embark on a journey that will force him to face his deepest fears in an attempt to change the fabric of reality and save humankind from its greatest environmental crisis yet.',
        poster_path: '/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg',
        popularity: 1731.044,
      },
    ];

    const expectedAction = {
      type: actionTypes.FETCH_FAVORITE_MOVIES,
      data: favoriteMovies,
    };

    expect(fetchedFavoritesMovies(favoriteMovies)).toEqual(expectedAction);
  });

  it('should create an action to create FETCH_WATCHLIST_MOVIES with default overwrite value', () => {
    const watchlistMovies = [
      {
        id: 528085,
        video: false,
        vote_count: 207,
        vote_average: 5.3,
        title: '2067',
        release_date: '2020-10-01',
        original_language: 'en',
        original_title: '2067',
        backdrop_path: '/5UkzNSOK561c2QRy2Zr4AkADzLT.jpg',
        adult: false,
        overview:
          'A lowly utility worker is called to the future by a mysterious radio signal, he must leave his dying wife to embark on a journey that will force him to face his deepest fears in an attempt to change the fabric of reality and save humankind from its greatest environmental crisis yet.',
        poster_path: '/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg',
        popularity: 1731.044,
      },
    ];

    const expectedAction = {
      type: actionTypes.FETCH_WATCHLIST_MOVIES,
      data: watchlistMovies,
    };

    expect(fetchedWatchlistMovies(watchlistMovies)).toEqual(expectedAction);
  });

  it('should create an action to create SET_MENU_VISIBILITY for home page with default overwrite value', () => {
    const menuVisibility = {
      showHome: true,
      showFavorites: false,
      showWatchlist: false,
    };

    const expectedAction = {
      type: actionTypes.SET_MENU_VISIBILITY,
      showHome: true,
      showFavorites: false,
      showWatchlist: false,
    };

    expect(showHome(menuVisibility)).toEqual(expectedAction);
  });

  it('should create an action to create SET_MENU_VISIBILITY for fav page with default overwrite value', () => {
    const menuVisibility = {
      showHome: false,
      showFavorites: true,
      showWatchlist: false,
    };

    const expectedAction = {
      type: actionTypes.SET_MENU_VISIBILITY,
      showHome: false,
      showFavorites: true,
      showWatchlist: false,
    };

    expect(showFavorites(menuVisibility)).toEqual(expectedAction);
  });

  it('should create an action to create SET_MENU_VISIBILITY for watchlist page with default overwrite value', () => {
    const menuVisibility = {
      showHome: false,
      showFavorites: false,
      showWatchlist: true,
    };

    const expectedAction = {
      type: actionTypes.SET_MENU_VISIBILITY,
      showHome: false,
      showFavorites: false,
      showWatchlist: true,
    };

    expect(showWatchlist(menuVisibility)).toEqual(expectedAction);
  });
});
