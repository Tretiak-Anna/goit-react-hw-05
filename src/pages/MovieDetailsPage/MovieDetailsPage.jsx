import { Suspense, useEffect, useState, useRef } from 'react';
import {
  useParams,
  useLocation,
  Link,
  NavLink,
  Outlet,
} from 'react-router-dom';
import { getMovieDetails } from '../../movies-api';
import css from './MovieDetailsPage.module.css';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const backLinkRef = useRef(location.state ?? '/movies');

  useEffect(() => {
    async function fetchMoviesDetails() {
      setLoading(true);
      try {
        const data = await getMovieDetails(movieId);
        setMovieDetails(data);
      } catch (error) {
        console.log('error');
      } finally {
        setLoading(false);
      }
    }

    fetchMoviesDetails();
  }, [movieId]);

  const { original_title, overview, genres, poster_path, vote_average } =
    movieDetails;
  const score = Number(vote_average).toFixed(1) * 10;

  return (
    <div>
      <Link className={css.goBackBtn} to={backLinkRef.current}>
        Go back
      </Link>
      {loading && <b>Loading movie details...</b>}
      <div className={css.container}>
        <img
          className={css.image}
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300${poster_path}`
              : `https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg`
          }
          loading="lazy"
          alt="Movie poster"
        />
        <div className={css.movieDetailContainer}>
          <h1>{original_title}</h1>
          <p className={css.score}>User score: {score}%</p>
          <h2 className={css.subtytle}>Overview</h2>
          <p>{overview}</p>
          <h2 className={css.subtytle}>Genres</h2>
          <ul className={css.genres}>
            {genres &&
              genres.length > 0 &&
              genres.map(({ id, name }) => <li key={id}>{name}</li>)}
          </ul>
        </div>
      </div>
      <hr />
      <div className={css.addInfoContainer}>
        <h3>Additional information</h3>
        <ul className={css.addInfo}>
          <li className={css.addInfoItem}>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li className={css.addInfoItem}>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
      </div>
      <hr />
      <Suspense fallback={<div>Loading sub component...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
