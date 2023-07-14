import PropTypes from 'prop-types';
import { ReviewItem } from './ReviewItem';

export const ReviewList = ({ reviews = [] }) => {
  return (
    <ul className="flex flex-col gap-2">
      {reviews.map(({ author, content, id }) => (
        <ReviewItem key={id} author={author} content={content} />
      ))}
    </ul>
  );
};

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};
