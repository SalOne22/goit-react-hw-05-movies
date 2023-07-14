const poster_sizes = [
  'w92',
  'w154',
  'w185',
  'w342',
  'w500',
  'w780',
  'original',
];

const BASE_URL = 'https://image.tmdb.org/t/p';

/**
 * Get complete URL of the image
 * @param {('w92'|'w154'|'w185'|'w342'|'w500'|'w700'|'original')} size Size of the image
 * @param {string} url URL of the image
 * @returns Complete image URL
 */
export const getPosterURL = (size, url) => {
  if (!poster_sizes.includes(size)) return `${BASE_URL}/original${url}`;

  return `${BASE_URL}/${size}${url}`;
};
