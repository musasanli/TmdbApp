import mainReducer from './mainReducer';
import { actionTypes } from '../../../containers/MainPage/types';

describe('Main reducer', () => {
  it('should return the initial state', () => {
    expect(mainReducer(undefined, {})).toEqual({
      showSelectedMovie: false,
      showHome: true,
      showFavorites: false,
      showWatchlist: false,
    });
  });

  it('should handle FETCH_GENRES', () => {
    const type = actionTypes.FETCH_GENRES;

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

    const expectedState = {
      showSelectedMovie: false,
      showHome: true,
      showFavorites: false,
      showWatchlist: false,
      genresData: data,
    };

    expect(mainReducer(undefined, { type, data })).toEqual(expectedState);
  });

  it('should handle GET_SELECTED_MOVIE', () => {
    const type = actionTypes.GET_SELECTED_MOVIE;
    const data = { showSelectedMovie: true };
    const expectedState = {
      selectedMovieData: data,
      showFavorites: false,
      showHome: true,
      showWatchlist: false,
    };

    expect(mainReducer(undefined, { type, data })).toEqual(expectedState);
  });

  it('should handle CLOSE_SELECTED_MOVIE', () => {
    const type = actionTypes.CLOSE_SELECTED_MOVIE;
    const expectedState = {
      showFavorites: false,
      showHome: true,
      showSelectedMovie: false,
      showWatchlist: false,
    };

    expect(mainReducer(undefined, { type })).toEqual(expectedState);
  });

  it('should handle GET_SELECTED_MOVIE_TRAILER', () => {
    const type = actionTypes.GET_SELECTED_MOVIE_TRAILER;
    const data = {
      id: 123,
      results: [
        {
          id: '5f10c20a2495ab0032397958',
          key: '7Y6-w5Psupw',
          name: 'Hard Kill | Official Trailer (HD) | Vertical Entertainment',
          site: 'YouTube',
          size: 1080,
          type: 'Trailer',
        },
      ],
    };
    const expectedState = {
      showFavorites: false,
      showHome: true,
      showSelectedMovie: false,
      showWatchlist: false,
      selectedMovieDataTrailer: data,
    };

    expect(mainReducer(undefined, { type, data })).toEqual(expectedState);
  });

  it('should handle SET_MENU_VISIBILITY', () => {
    const type = actionTypes.SET_MENU_VISIBILITY;
    const showHome = true;
    const showFavorites = false;
    const showWatchlist = false;
    const expectedState = {
      showHome: true,
      showWatchlist: false,
      showFavorites: false,
      showSelectedMovie: false,
    };

    expect(
      mainReducer(undefined, { type, showHome, showFavorites, showWatchlist }),
    ).toEqual(expectedState);
  });

  it('should handle FETCH_FAVORITE_MOVIES', () => {
    const type = actionTypes.FETCH_FAVORITE_MOVIES;
    const data = [
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
    ];
    const expectedState = {
      favData: [
        {
          adult: false,
          backdrop_path: '/86L8wqGMDbwURPni2t7FQ0nDjsH.jpg',
          genre_ids: [28, 53],
          homepage: 'https://www.test.com/',
          id: 724989,
          original_language: 'en',
          original_title: 'Leo Movie',
          overview: 'Leo Movie Description',
          popularity: 2235.816,
          poster_path: '/ugZW8ocsrfgI95pnQ7wrmKDxIe.jpg',
          release_date: '2020-10-23',
          runtime: 90,
          title: 'Leo Movie',
          video: false,
          vote_average: 4.5,
          vote_count: 34,
        },
      ],
      showFavorites: false,
      showHome: true,
      showSelectedMovie: false,
      showWatchlist: false,
    };

    expect(mainReducer(undefined, { type, data })).toEqual(expectedState);
  });

  it('should handle FETCH_WATCHLIST_MOVIES', () => {
    const type = actionTypes.FETCH_WATCHLIST_MOVIES;
    const data = [
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
    ];
    const expectedState = {
      watchData: [
        {
          adult: false,
          backdrop_path: '/86L8wqGMDbwURPni2t7FQ0nDjsH.jpg',
          genre_ids: [28, 53],
          homepage: 'https://www.test.com/',
          id: 724989,
          original_language: 'en',
          original_title: 'Leo Movie',
          overview: 'Leo Movie Description',
          popularity: 2235.816,
          poster_path: '/ugZW8ocsrfgI95pnQ7wrmKDxIe.jpg',
          release_date: '2020-10-23',
          runtime: 90,
          title: 'Leo Movie',
          video: false,
          vote_average: 4.5,
          vote_count: 34,
        },
      ],
      showFavorites: false,
      showHome: true,
      showSelectedMovie: false,
      showWatchlist: false,
    };

    expect(mainReducer(undefined, { type, data })).toEqual(expectedState);
  });
});
