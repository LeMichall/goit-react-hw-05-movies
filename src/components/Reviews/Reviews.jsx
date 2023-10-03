import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Loader } from 'components/Loader/Loader';
import css from './Reviews.module.css';
import { fetchReviews } from 'API_requests/requests';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchFilmReviews = () => {
      setLoading(true);
      fetchReviews(movieId)
        .then(filmReview => setReviews(filmReview))
        .catch(e => console.log(e))
        .finally(() => setLoading(false));
    };
    fetchFilmReviews();
  }, [movieId]);

  return (
    <div className="reviewsBox">
      {loading && <Loader />}
      {reviews.length !== 0 && (
        <div>
          <ul className={css.reviewsList}>
            {reviews.map(review => (
              <li key={review.id}>
                <h2>Author: {review.author}</h2>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {reviews.length === 0 && (
        <div>We don't have any reviews for this movie</div>
      )}
    </div>
  );
};
export default Reviews;
