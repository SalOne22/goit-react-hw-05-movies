import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Section } from 'components/Section';
import { MovieList } from 'components/MovieList';
import { Spinner } from 'components/Spinner';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesByQuery } from 'service/api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [params, setParams] = useSearchParams();

  const handleSearch = e => {
    e.preventDefault();

    const query = e.currentTarget.query.value.trim();

    if (!query) return toast('Please enter something...');

    setParams({ query });
  };

  useEffect(() => {
    const query = params.get('query');

    if (!query) return;

    const updateMovieList = async () => {
      try {
        const movies = await fetchMoviesByQuery(query);

        if (movies.results.length === 0)
          toast.error('Sorry, but be cant find any movies by your request');

        setMovies(movies.results);
      } catch (error) {
        console.error(error);
        toast.error(error.message);
        setMovies([]);
      }
    };

    updateMovieList();
  }, [params]);

  return (
    <Section>
      <form onSubmit={handleSearch} autoComplete="off" className="mb-2">
        <input
          name="query"
          type="text"
          placeholder="Search..."
          className="bg-white rounded-l px-1 py-0.5 outline-none
          border-l-2 border-y-2 border-white focus-visible:border-slate-200
          transition-colors"
        />
        <button
          className="bg-lime-200 text-slate-700 text-medium px-1 py-0.5
          rounded-r border-r-2 border-y-2 border-lime-200
          hover:border-lime-300 transition-colors active:bg-lime-300"
        >
          Search
        </button>
      </form>

      {movies ? <MovieList movies={movies} /> : <Spinner />}
    </Section>
  );
};

export default Movies;
