import PropTypes from 'prop-types';
import { MovieItem } from './MovieItem';

export const MovieList = ({ movies = [] }) => {
  return (
    <ul className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
      {movies.map(({ id, poster_path, title, overview }) => (
        <MovieItem
          key={id}
          id={id}
          poster_path={poster_path}
          title={title}
          overview={overview}
        />
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
