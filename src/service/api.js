const BASE_URL = 'https://api.themoviedb.org/3';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYjE3NzU3ZjU2ZDg1NmM5YzE2MmE1OWEzZWZlMmY5MyIsInN1YiI6IjY0NzhkNWZjOWI2ZTQ3MDBkZThlOTBlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BE22YVTai34Dh5C1jSxEZ2DzzjnxJfKFgEIpWS2JFcI',
  },
};

export const fetchTrendingMovies = () =>
  fetch(`${BASE_URL}/trending/movie/day?language=en-US`, options)
    .then(response => {
      checkResponse(response);

      return response;
    })
    .then(response => response.json());

export const fetchMoviesByQuery = async query => {
  const params = new URLSearchParams({
    query,
    include_adult: false,
    language: 'en-US',
    page: 1,
  });

  const response = await fetch(`${BASE_URL}/search/movie?${params}`, options);

  checkResponse(response);

  return await response.json();
};

export const fetchMovieDetails = async id =>
  fetch(`${BASE_URL}/movie/${id}?language=en_US`, options)
    .then(response => {
      checkResponse(response);

      return response;
    })
    .then(response => response.json());

export const fetchMovieCast = async id =>
  fetch(`${BASE_URL}/movie/${id}/credits?language=en_US`, options)
    .then(response => {
      checkResponse(response);

      return response;
    })
    .then(response => response.json());

export const fetchMovieReviews = async id =>
  fetch(`${BASE_URL}/movie/${id}/reviews?language=en-US&page=1`, options)
    .then(response => {
      checkResponse(response);

      return response;
    })
    .then(response => response.json());

const checkResponse = response => {
  if (!response.ok) {
    let err = new Error(`HTTP status: ${response.status}`);

    err.response = response;
    err.status = response.status;

    throw err;
  }
};
