import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className="sticky top-0 z-50 p-[2px] rounded-md w-full mx-auto m-6">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-black to-blue-500 animate-pulse rounded-md -z-10"></div>
      <div className="relative bg-black text-white p-4 flex justify-around space-x-6 rounded-md font-serif">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-bold text-lg" : "text-lg hover:text-blue-500 transition-all"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/pastes"
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-bold text-lg" : "text-lg hover:text-blue-500 transition-all"
          }
        >
          Pastes
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
