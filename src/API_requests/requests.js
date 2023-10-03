const APIkey = '066dd3f638d42b734e86b50ba07e683c';

export const fetchTrending = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${APIkey}`
  );
  //const data = await response.json();
  // return data.results;
  return (await response.json()).results;
};
export const fetchSpecific = async query => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${APIkey}&language=en-US&page=1&include_adult=false&query=${query}`
  );
  //   const data = await response.json();
  //   return data.results;
  return (await response.json()).results;
};
export const fetchMovieDetails = async movieId => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${APIkey}`
  );

  return await response.json();
};
export const fetchCast = async movieId => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${APIkey}`
  );
  return (await response.json()).cast;
};
export const fetchReviews = async movieId => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${APIkey}`
  );
  return (await response.json()).results;
};
