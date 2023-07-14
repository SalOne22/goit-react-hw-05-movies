import { Spinner } from 'components/Spinner';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchMovieCast } from 'service/api';
import { getProfileURL } from 'utils';

const Cast = () => {
  const [credits, setCredits] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const updateMovieCast = async () => {
      try {
        const movieCredits = await fetchMovieCast(movieId);
        console.log(
          '🚀 ~ file: Cast.jsx:14 ~ updateMovieCast ~ movieDetails:',
          movieCredits
        );
        setCredits(movieCredits);
      } catch (error) {
        console.error(error);
        toast.error(error.message);
      }
    };

    updateMovieCast();
  }, [movieId]);

  if (credits === null) return <Spinner />;

  const { cast } = credits;

  return (
    <>
      <h2 className="text-xl font-medium text-slate-600 mb-2">Cast</h2>
      {cast.length ? (
        <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 ">
          {cast.map(({ id, profile_path, name, character }) => (
            <li
              key={id}
              className="flex gap-1 bg-slate-200 rounded-md relative"
            >
              {profile_path ? (
                <img
                  srcSet={`${getProfileURL('w185', profile_path)} 1x,
                          ${getProfileURL('h632', profile_path)} 2x`}
                  src={getProfileURL('w185', profile_path)}
                  alt="Profile poster"
                  width={185}
                  height={278}
                  className="w-full object-cover rounded-md"
                />
              ) : (
                <img
                  src="https://placehold.co/185x278?text=No+Image"
                  alt="No Profile poster"
                  width={185}
                  height={278}
                  className="w-full object-cover rounded-md"
                />
              )}

              <div
                className="absolute bg-gradient-to-t bottom-0 left-0
              from-slate-800/50 via-slate-800/50 to-transparent
                text-white p-2 w-full"
              >
                <h3 className="text-lg">{name}</h3>
                <p>Character: {character}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-xl">It seems but there is no one here 🤷‍♀️</p>
      )}
    </>
  );
};

export default Cast;
