import {
  popularMoviesInitial,
  popularMovies,
  popularMoviesFail,
} from './action';
import { actionTypes } from './types';

describe('PopularMovies actions', () => {
  it('should create an action to create FETCH_POPULAR_MOVIES_INITIAL with default overwrite value', () => {
    const expectedAction = {
      type: actionTypes.FETCH_POPULAR_MOVIES_INITIAL,
      isLoading: true,
      isSuccessfullyFetched: false,
    };

    expect(popularMoviesInitial()).toEqual(expectedAction);
  });

  it('should create an action to create FETCH_POPULAR_MOVIES_SUCCESFUL with default overwrite value', () => {
    const popularMoviesSuccessfulyFecthed = [
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
      type: actionTypes.FETCH_POPULAR_MOVIES_SUCCESFUL,
      payload: popularMoviesSuccessfulyFecthed,
      isLoading: false,
      isSuccessfullyFetched: true,
    };

    expect(popularMovies(popularMoviesSuccessfulyFecthed)).toEqual(
      expectedAction,
    );
  });

  it('should create an action to create FETCH_POPULAR_MOVIES_FAIL with default overwrite value', () => {
    const expectedAction = {
      type: actionTypes.FETCH_POPULAR_MOVIES_FAIL,
      isSuccessfullyFetched: false,
    };

    expect(popularMoviesFail()).toEqual(expectedAction);
  });
});
