import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ChevronLeft } from 'lucide-react';
import { fetchMovieDetails } from 'service/api';
import { getPosterURL } from 'utils';
import { Section } from 'components/Section';
import { Spinner } from 'components/Spinner';

const MovieDetails = () => {
  const [details, setDetails] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const goBackHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const updateMovieDetails = async () => {
      try {
        const movieDetails = await fetchMovieDetails(movieId);
        setDetails(movieDetails);
      } catch (error) {
        console.error(error);
        toast.error(error.message);
      }
    };

    updateMovieDetails();
  }, [movieId]);

  if (details === null) return <Spinner />;

  const { poster_path, title, overview, vote_average, genres } = details;

  return (
    <Section>
      <Link
        to={goBackHref.current}
        className="flex w-fit items-center bg-teal-300 pr-3 py-0.5
          rounded-lg font-medium shadow mb-2 hover:-translate-x-0.5
          focus-visible:-translate-x-0.5 transition-transform
          motion-reduce:transition-none"
      >
        <ChevronLeft className="inline" /> Go back
      </Link>
      <div className="mb-4 sm:flex">
        <img
          srcSet={
            poster_path
              ? `${getPosterURL('w342', poster_path)} 1x,
                    ${getPosterURL('w700', poster_path)} 2x`
              : 'https://placehold.co/200x300?text=No+Poster'
          }
          src={
            poster_path
              ? getPosterURL('w342', poster_path)
              : 'https://placehold.co/200x300?text=No+Poster'
          }
          width={200}
          height={300}
          alt={poster_path ? `Poster for ${title}` : 'No poster'}
          className="object-cover w-full max-w-[342px] rounded-lg
          sm:max-w-[200px] sm:mx-0 sm:mr-4 mx-auto"
        />
        <div className="lg:w-2/3">
          <div className="mb-2">
            <h2 className="text-2xl font-semibold text-slate-700">{title}</h2>
            <p>
              User score:{' '}
              <span className="font-semibold">
                {vote_average.toFixed(1)}/10
              </span>
            </p>
          </div>
          <div className="mb-2">
            <h3 className="text-lg font-medium text-slate-600">Overview</h3>
            <p>{overview}</p>
          </div>
          <div className="mb-2">
            <h3 className="text-lg font-medium text-slate-600">Genres</h3>
            <p>{genres.map(genre => genre.name).join(' | ')}</p>
          </div>
          <h3 className="text-lg font-medium text-slate-600">
            Additional info
          </h3>
          <ul className="flex gap-2">
            <li>
              <Link
                to="cast"
                className="flex w-fit items-center bg-teal-300 px-3 py-0.5
                rounded-lg font-medium shadow mb-2 hover:-translate-y-0.5
                focus-visible:-translate-y-0.5 transition-transform
                motion-reduce:transition-none"
              >
                Cast
              </Link>
            </li>
            <li>
              <Link
                to="reviews"
                className="flex w-fit items-center bg-teal-300 px-3 py-0.5
                rounded-lg font-medium shadow mb-2 hover:-translate-y-0.5
                focus-visible:-translate-y-0.5 transition-transform
                motion-reduce:transition-none"
              >
                Reviews
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </Section>
  );
};

export default MovieDetails;
