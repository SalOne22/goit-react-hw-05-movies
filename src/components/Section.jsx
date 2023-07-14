import React from 'react';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <section className="py-6">
      <div className="container">
        {title && (
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};
