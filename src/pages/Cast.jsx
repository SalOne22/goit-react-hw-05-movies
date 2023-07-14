import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Spinner } from 'components/Spinner';
import { SubSection } from 'components/SubSection';
import { fetchMovieCast } from 'service/api';
import { CastList } from 'components/CastList';

const Cast = () => {
  const [credits, setCredits] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const updateMovieCast = async () => {
      try {
        const movieCredits = await fetchMovieCast(movieId);
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
    <SubSection title="Cast">
      {cast.length ? (
        <CastList cast={cast} />
      ) : (
        <p className="text-xl">It seems but there is no one here 🤷‍♀️</p>
      )}
    </SubSection>
  );
};

export default Cast;
