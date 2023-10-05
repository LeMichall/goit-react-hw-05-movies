import axios from 'axios';

const APIkey = '066dd3f638d42b734e86b50ba07e683c';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  language: 'enUS',
  api_key: APIkey,
};

export const fetchTrending = async () => {
  const response = await axios.get(`trending/movie/day`);

  return response.data.results;
};
export const fetchSpecific = async query => {
  const response = await axios.get(
    `search/movie?page=1&include_adult=false&query=${query}`
  );
  return response.data.results;
};
export const fetchMovieDetails = async movieId => {
  const response = await axios.get(`movie/${movieId}`);
  return response.data;
};
export const fetchCast = async movieId => {
  const response = await axios.get(`movie/${movieId}/credits`);
  return response.data.cast;
};
export const fetchReviews = async movieId => {
  const response = await axios.get(`movie/${movieId}/reviews`);
  return response.data.results;
};
