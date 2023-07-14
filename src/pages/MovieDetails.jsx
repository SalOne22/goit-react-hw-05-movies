import React from 'react';
import { Outlet } from 'react-router-dom';

const MovieDetails = () => {
  return (
    <div>
      MovieDetails
      <Outlet />
    </div>
  );
};

export default MovieDetails;
