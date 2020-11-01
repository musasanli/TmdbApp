import searchReducer from './searchReducer';
import { actionTypes } from 'containers/SearchMovies/types';

describe('Search reducer', () => {
  it('should return the initial state', () => {
    expect(searchReducer(undefined, {})).toEqual({
      isLoading: false,
      isSuccessfullyFetched: false,
    });
  });

  it('should handle FETCH_QUERIED_MOVIES_INITIAL', () => {
    const type = actionTypes.FETCH_QUERIED_MOVIES_INITIAL;
    const isLoading = true;
    const expectedState = {
      isLoading: true,
      isSuccessfullyFetched: false,
    };

    expect(
      searchReducer(undefined, {
        type,
        isLoading,
      }),
    ).toEqual(expectedState);
  });

  it('should handle FETCH_QUERIED_MOVIES_SUCCESFUL', () => {
    const type = actionTypes.FETCH_QUERIED_MOVIES_SUCCESFUL;
    const isLoading = false;
    const isSuccessfullyFetched = true;
    const payload = [
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
      isLoading: false,
      isSuccessfullyFetched: true,
      data: [
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
      ],
    };

    expect(
      searchReducer(undefined, {
        type,
        isLoading,
        isSuccessfullyFetched,
        payload,
      }),
    ).toEqual(expectedState);
  });

  it('should handle FETCH_QUERIED_MOVIES_FAIL', () => {
    const type = actionTypes.FETCH_QUERIED_MOVIES_FAIL;
    const isSuccessfullyFetched = false;
    const expectedState = {
      isLoading: false,
      isSuccessfullyFetched: false,
    };

    expect(
      searchReducer(undefined, {
        type,
        isSuccessfullyFetched,
      }),
    ).toEqual(expectedState);
  });
});
