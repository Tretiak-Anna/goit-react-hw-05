import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNDVjMTUyNGU4MmMzOWMyNTdhNmNjNWU3NzkyOTEwMyIsInN1YiI6IjY2NTI1NzdlMGI4YTRmMjhlNjU1YWQyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l_b0MvPl0yWfsGy7VNoqP6mhVe8EQzXwWH267Tbeomk',
  },
};

export const getTrendMovies = async () => {
  const response = await axios.get('trending/movie/day', options);
  return response.data;
};

export const getSearchMovie = async question => {
  const response = await axios.get('search/movie', {
    params: {
      query: question,
    },
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNDVjMTUyNGU4MmMzOWMyNTdhNmNjNWU3NzkyOTEwMyIsInN1YiI6IjY2NTI1NzdlMGI4YTRmMjhlNjU1YWQyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l_b0MvPl0yWfsGy7VNoqP6mhVe8EQzXwWH267Tbeomk',
    },
  });
  return response.data;
};

export const getMovieDetails = async movieId => {
  const response = await axios.get(`movie/${movieId}`, options);
  return response.data;
};

export const getMovieCredits = async movieId => {
  const response = await axios.get(`movie/${movieId}/credits`, options);
  return response.data.cast;
};

export const getMovieReviews = async movieId => {
  const response = await axios.get(`movie/${movieId}/reviews`, options);
  return response.data.results;
};

// axios
//   .get('trending/movie/day', options)
//   .then(response => console.log(response))
//   .catch(err => console.error(err));
