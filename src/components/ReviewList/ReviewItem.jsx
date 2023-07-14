import PropTypes from 'prop-types';

export const ReviewItem = ({ content, author }) => {
  return (
    <li>
      <figure>
        <blockquote>{content}</blockquote>
        <figcaption className="text-lg font-medium text-slate-500">
          — {author}
        </figcaption>
      </figure>
    </li>
  );
};

ReviewItem.propTypes = {
  content: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
