import { checkIsFaved, checkIsInWatchlist } from './selector';

describe('MovieItemSelector', () => {
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

  it('should return checkIsFaved from store', () => {
    const favedId = 724989;
    const state = {
      main: {
        favData: {
          results: exampleMoviesArray,
        },
      },
    };
    const result = checkIsFaved(state, favedId);
    expect(result).toBe(true);
  });

  it('should return checkIsInWatchlist from store', () => {
    const watchId = 7289;
    const state = {
      main: {
        watchData: {
          results: exampleMoviesArray,
        },
      },
    };
    const result = checkIsInWatchlist(state, watchId);
    expect(result).toBe(true);
  });

  it('should return checkIsFaved from store', () => {
    const favedId = 123;
    const state = {
      main: {
        favData: {
          results: exampleMoviesArray,
        },
      },
    };
    const result = checkIsFaved(state, favedId);
    expect(result).toBe(false);
  });

  it('should return checkIsInWatchlist from store', () => {
    const watchId = 321;
    const state = {
      main: {
        watchData: {
          results: exampleMoviesArray,
        },
      },
    };
    const result = checkIsInWatchlist(state, watchId);
    expect(result).toBe(false);
  });
});
