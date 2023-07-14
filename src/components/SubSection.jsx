import PropTypes from 'prop-types';

export const SubSection = ({ title, children }) => {
  return (
    <section>
      {title && (
        <h2 className="text-xl font-medium text-slate-600 mb-2">{title}</h2>
      )}

      {children}
    </section>
  );
};

SubSection.propTypes = {
  title: PropTypes.string,
};
