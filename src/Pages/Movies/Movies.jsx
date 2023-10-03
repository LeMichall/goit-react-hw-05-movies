import { Searchbar } from 'components/Searchbar/Searchbar';
import { useState } from 'react';
import { fetchSpecific } from 'API_requests/requests';
import { MovieList } from 'components/MovieList/MovieList';
import { Loader } from 'components/Loader/Loader';
import css from './Movies.module.css';
const Movies = () => {
  const [searchFilms, setSearchFilms] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchSpecificMovies = query => {
    fetchSpecific(query)
      .then(results => {
        setSearchFilms(results);
        setNoResults(results.length === 0);
      })
      .catch(e => console.log(e))
      .finally(() => setLoading(false));
  };

  return (
    <div className={css.MovieContainer}>
      <Searchbar searchMovies={fetchSpecificMovies} />
      {loading && <Loader />}
      {noResults && (
        <p>There are no movies with this title. Please, try again</p>
      )}
      {searchFilms && <MovieList films={searchFilms} />}
    </div>
  );
};

export default Movies;
