import {
  truncateDesription,
  truncateTitle,
  popularityColor,
  displayGenres,
  refactorTrailerUrl,
} from './utils';
import { MAX_TITLE, YOUTUBE_URL } from './consts';

describe('Movies/utils', () => {
  it('return description correctly with not much than 120 characters', () => {
    const description =
      'The work of billionaire tech CEO Donovan Chalmers is so valuable that he hires mercenaries to protect it, and a terrorist group kidnaps his daughter just to get it.';
    const expected =
      'The work of billionaire tech CEO Donovan Chalmers is so valuable that he hires mercenaries to protect it, and a terroris...';

    expect(truncateDesription(description)).toEqual(expected);
  });

  it('return title correctly with not much than 25 characters', () => {
    const title = 'Leo Vegas Movies Hard Kill Part 1';
    const expected = 'Leo Vegas Movies Hard Kil...';

    expect(truncateTitle(title, MAX_TITLE)).toEqual(expected);
  });

  it('return popularity color low if point less than 4', () => {
    const expected = 'low';

    expect(popularityColor(3)).toEqual(expected);
  });

  it('return popularity color middle if point less than 7', () => {
    const expected = 'middle';

    expect(popularityColor(5)).toEqual(expected);
  });

  it('return popularity color high if point more than 7', () => {
    const expected = 'high';

    expect(popularityColor(8)).toEqual(expected);
  });

  it('return genres correctly', () => {
    const genresArray = ['Action', 'Comedy'];
    const expected = 'Action, Comedy';

    expect(displayGenres(genresArray)).toEqual(expected);
  });

  it('return genres correctly', () => {
    const youtubeId = 'LeoVegasTrailer';
    const expected = `${YOUTUBE_URL}LeoVegasTrailer`;

    expect(refactorTrailerUrl(youtubeId)).toEqual(expected);
  });
});
