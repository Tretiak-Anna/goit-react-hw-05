import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../movies-api';
import css from './MovieReviews.module.css';

export default function MovieReviews() {
  const [reviewsList, setReviewsList] = useState([]);
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchMovieReviews() {
      setLoading(true);
      try {
        const data = await getMovieReviews(movieId);
        setReviewsList(data);
      } catch (error) {
        console.log('error');
      } finally {
        setLoading(false);
      }
    }

    fetchMovieReviews();
  }, [movieId]);
  return (
    <div className={css.container}>
      <ul className={css.reviewList}>
        {loading && <b>Loading revews...</b>}
        {reviewsList.length > 0 ? (
          reviewsList.map(({ id, author, content }) => (
            <li key={id} className={css.reviewListItem}>
              <h3 className={css.reviewAuthor}>{author}</h3>
              <p>{content}</p>
            </li>
          ))
        ) : (
          <p>We don`t have any reviews for this movie</p>
        )}
      </ul>
    </div>
  );
}
