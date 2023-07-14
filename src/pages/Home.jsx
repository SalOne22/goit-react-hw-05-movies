import { useEffect, useState } from 'react';
import { Section } from 'components/Section';
import { toast } from 'react-toastify';
import { fetchTrendingMovies } from 'service/api';
import { MovieList } from 'components/MovieList';
import { Spinner } from 'components/Spinner';

const Home = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const updateMovieList = async () => {
      try {
        const movies = await fetchTrendingMovies();

        setMovies(movies.results);
      } catch (error) {
        console.error(error);
        toast.error(error.message);
        setMovies([]);
      }
    };

    updateMovieList();
  }, []);

  return (
    <Section title="Trending today">
      {movies ? <MovieList movies={movies} /> : <Spinner />}
    </Section>
  );
};

export default Home;
