import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Spinner } from 'components/Spinner';
import { SubSection } from 'components/SubSection';
import { fetchMovieReviews } from 'service/api';
import { ReviewList } from 'components/ReviewList';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const updateMovieReviews = async () => {
      try {
        const movieReviews = await fetchMovieReviews(movieId);
        setReviews(movieReviews.results);
      } catch (error) {
        console.error(error);
        toast.error(error.message);
      }
    };

    updateMovieReviews();
  }, [movieId]);

  if (reviews === null) return <Spinner />;

  return (
    <SubSection title="Reviews">
      {reviews.length ? (
        <ReviewList reviews={reviews} />
      ) : (
        <p className="text-xl">It seems but there is no reviews here 🤷‍♀️</p>
      )}
    </SubSection>
  );
};

export default Reviews;
