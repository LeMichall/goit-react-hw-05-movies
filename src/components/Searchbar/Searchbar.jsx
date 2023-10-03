import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';

export const Searchbar = ({ searchMovies }) => {
  const [query, setQuery] = useState('');
  const [, setSearchParams] = useSearchParams();

  // useEffect(() => {
  //   if (query) {
  //     setSearchParams({ query: query.toLowerCase() });
  //   } else {
  //     setSearchParams({});
  //   }
  // }, [query, setSearchParams]);
  const handleInput = e => {
    setQuery(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    searchMovies(query.toLowerCase());
    setSearchParams({ query: query.toLowerCase() });
  };
  return (
    <form className={css.formBox} onSubmit={handleSubmit}>
      <input
        className={css.inputForm}
        type="text"
        name="query"
        value={query}
        autoFocus
        onChange={handleInput}
      />
      <button className={css.formBtn} type="submit">
        Search
      </button>
    </form>
  );
};

Searchbar.propTypes = {
  searchMovies: PropTypes.func,
};
