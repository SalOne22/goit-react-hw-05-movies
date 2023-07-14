import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <header
        className="py-2 text-xl font-medium text-zinc-200 bg-gray-800 
        shadow-xl shadow-teal-900/20 border-b-2 border-gray-700"
      >
        <ul className="container flex gap-2">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'text-teal-300' : '')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/movies"
              className={({ isActive }) => (isActive ? 'text-teal-300' : '')}
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </header>

      <Outlet />
    </>
  );
};
