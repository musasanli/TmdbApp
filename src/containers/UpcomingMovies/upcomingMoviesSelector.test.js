import { getUpcomingMovies, getIsUpcomingMoviesLoading } from './selector';

describe('UpcomingMoviesSelector', () => {
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

  it('should return getUpcomingMovies from store', () => {
    const state = {
      upcoming: {
        data: {
          results: exampleMoviesArray,
        },
      },
    };
    const result = getUpcomingMovies(state);
    expect(result).toBe(exampleMoviesArray);
  });

  it('should return getIsUpcomingMoviesLoading from store', () => {
    const isLoading = false;
    const state = {
      upcoming: {
        isLoading,
      },
    };
    const result = getIsUpcomingMoviesLoading(state);
    expect(result).toBe(isLoading);
  });
});
