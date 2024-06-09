import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
import { getSearchMovie } from '../../movies-api';
import MovieList from '../../components/MovieList/MovieList';

export default function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('movieName') ?? '';
  const [findMovies, setFindMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (movieName.trim() === '') {
      return;
    }

    async function fetchSearchMovie() {
      try {
        setLoading(true);
        setIsError(false);
        const data = await getSearchMovie(movieName);
        setFindMovies(data.results);
      } catch (error) {
        setIsError(true);
        console.log('error');
      } finally {
        setLoading(false);
      }
    }

    fetchSearchMovie();
  }, [movieName]);

  const handlSearch = query => {
    setSearchParams({ movieName: query });
    setFindMovies([]);
  };

  return (
    <div>
      <SearchForm onSearch={handlSearch} />
      {loading && <b>Loading found movies...</b>}
      {findMovies.length > 0 && <MovieList movies={findMovies} />}
      {isError && (
        <b>There is no movies with this request. Please, try again</b>
      )}
    </div>
  );
}
