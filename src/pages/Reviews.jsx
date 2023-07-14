import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Spinner } from 'components/Spinner';
import { fetchMovieReviews } from 'service/api';

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
    <>
      <h2 className="text-xl font-medium text-slate-600 mb-2">Reviews</h2>
      {reviews.length ? (
        <ul className="flex flex-col gap-2">
          {reviews.map(({ author, content }) => (
            <li>
              <figure>
                <blockquote>{content}</blockquote>
                <figcaption className="text-lg font-medium text-slate-500">
                  — {author}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-xl">It seems but there is no reviews here 🤷‍♀️</p>
      )}
    </>
  );
};

export default Reviews;
