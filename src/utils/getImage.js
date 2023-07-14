const poster_sizes = [
  'w92',
  'w154',
  'w185',
  'w342',
  'w500',
  'w780',
  'original',
];

const profile_sizes = ['w45', 'w185', 'h632', 'original'];

const BASE_URL = 'https://image.tmdb.org/t/p';

/**
 * Get complete URL of the poster image
 * @param {('w92'|'w154'|'w185'|'w342'|'w500'|'w700'|'original')} size Size of the poster image
 * @param {string} url URL of the poster image
 * @returns Complete poster image URL
 */
export const getPosterURL = (size, url) => {
  if (!poster_sizes.includes(size)) return `${BASE_URL}/original${url}`;

  return `${BASE_URL}/${size}${url}`;
};

/**
 * Get complete URL of the profile image
 * @param {('w45'|'w185'|'h632'|'original')} size Size of the profile image
 * @param {string} url URL of the profile image
 * @returns Complete profile image URL
 */
export const getProfileURL = (size, url) => {
  if (!profile_sizes.includes(size)) return `${BASE_URL}/original${url}`;

  return `${BASE_URL}/${size}${url}`;
};
