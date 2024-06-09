import { useEffect, useState } from 'react';
import { getTrendMovies } from '../../movies-api';
import MovieList from '../../components/MovieList/MovieList';
import css from './HomePage.module.css';

export default function HomePage() {
  const [trendMovies, setTrendMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchTrendMovies() {
      setLoading(true);
      try {
        const data = await getTrendMovies();
        setTrendMovies(data.results);
      } catch (error) {
        console.log('error');
      } finally {
        setLoading(false);
      }
    }

    fetchTrendMovies();
  }, []);
  return (
    <div className={css.container}>
      <h1 className={css.tytle}>Trending today</h1>
      {loading && <b>Loading trending movies...</b>}
      <MovieList movies={trendMovies} />
    </div>
  );
}
