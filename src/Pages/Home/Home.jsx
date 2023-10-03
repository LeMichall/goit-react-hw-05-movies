import { fetchTrending } from 'API_requests/requests';
import { useEffect, useState } from 'react';
import { MovieList } from 'components/MovieList/MovieList';
import { Loader } from 'components/Loader/Loader';
import css from './Home.module.css';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTrendingMovies = () => {
      fetchTrending()
        .then(trendingMovies => {
          setTrendingMovies(trendingMovies);
        })
        .catch(e => console.log(e))
        .finally(() => setLoading(false));
    };
    fetchTrendingMovies();
  }, []);

  return (
    <div className={css.homeContainer}>
      <h1 className={css.homeTitle}>Trending today</h1>
      <MovieList films={trendingMovies} />
      {loading && <Loader />}
    </div>
  );
};
export default Home;
