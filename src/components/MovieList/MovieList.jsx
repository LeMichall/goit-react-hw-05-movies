import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './MovieList.module.css';

export const MovieList = ({ films }) => {
  const navigate = useNavigate();
  const handleClick = movieid => {
    navigate(`/movies/${movieid}`);
  };

  return (
    <div>
      <ul className={css.movieList}>
        {films.map(film => (
          <li className={css.moviesItem} key={film.id}>
            <span
              className={css.moviesLink}
              onClick={() => handleClick(film.id)}
            >
              {film.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

MovieList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.number,
    })
  ),
};
