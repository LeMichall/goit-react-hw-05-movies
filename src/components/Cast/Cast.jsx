import { useEffect, useState } from 'react';
import { fetchCast } from 'API_requests/requests';
import { Loader } from 'components/Loader/Loader';
import css from './Cast.module.css';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchActors = () => {
      setLoading(true);
      fetchCast(movieId)
        .then(actors => {
          setCast(actors);
        })
        .catch(e => console.log(e))
        .finally(() => setLoading(false));
    };
    fetchActors();
  }, [movieId]);
  return (
    <div>
      {loading && <Loader />}
      <ul className={css.castBox}>
        {cast.map(({ id, profile_path, name, character }) => (
          <li className={css.castList} key={id}>
            <img
              width="200px"
              src={
                profile_path && `https://image.tmdb.org/t/p/w500${profile_path}`
              }
              alt={name}
            />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Cast;
