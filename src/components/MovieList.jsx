import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getPosterURL } from 'utils';

export const MovieList = ({ movies = [] }) => {
  return (
    <ul className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
      {movies.map(({ id, poster_path, title, overview }) => (
        <li
          key={id}
          className="rounded-xl bg-slate-200 p-2 shadow-md
          hover:-translate-y-1 focus-within:-translate-y-1 transition-transform
          motion-reduce:transition-none"
        >
          <Link to={`/movies/${id}`} className="flex">
            <img
              srcSet={
                poster_path
                  ? `${getPosterURL('w185', poster_path)} 1x,
                  ${getPosterURL('w342', poster_path)} 2x`
                  : 'https://placehold.co/185x278?text=No+Poster'
              }
              src={
                poster_path
                  ? getPosterURL('w185', poster_path)
                  : 'https://placehold.co/185x278?text=No+Poster'
              }
              width={92}
              height={138}
              alt={poster_path ? `Poster for ${title}` : 'No poster'}
              className="object-contain mr-4 rounded-lg w-[92px]"
            />

            <div>
              <h3 className="text-lg font-medium text-slate-600">{title}</h3>
              <p className="line-clamp-3">{overview}</p>
            </div>
          </Link>
        </li>
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
