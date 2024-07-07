import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  return (
    <div className="bg-gradient-to-r from-orange-400 to-yellow-400 p-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className='flex space-x-6 items-center'>
          <h1 className="text-white text-4xl">Blog App</h1>
          {isLoggedIn && (
            <>
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  isActive ? "text-white text-xl font-semibold border-b-2 border-white pb-1" : "text-white text-xl font-semibold hover:text-gray-200"
                }
              >
                All Blogs
              </NavLink>
              <NavLink
                to="/myBlogs"
                className={({ isActive }) =>
                  isActive ? "text-white text-xl font-semibold border-b-2 border-white pb-1" : "text-white text-xl font-semibold hover:text-gray-200"
                }
              >
                My Blogs
              </NavLink>
            </>
          )}
        </div>
        <div className="flex space-x-4">
          {!isLoggedIn ? (
            <>
              <Link to="/login">
                <button className="bg-orange-600 text-white px-4 py-2 rounded-full hover:bg-orange-700 transition duration-300 font-semibold">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="bg-orange-600 text-white px-4 py-2 rounded-full hover:bg-orange-700 transition duration-300 font-semibold">
                  SignUp
                </button>
              </Link>
            </>
          ) : (
            <button className="bg-orange-600 text-white px-4 py-2 rounded-full hover:bg-orange-700 transition duration-300 font-semibold">
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
