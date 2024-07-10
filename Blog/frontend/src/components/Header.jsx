
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { authActions } from '../store/index.jsx'; // Update the import path
import menuIcon from '../assets/menu.png';
import closeIcon from '../assets/close.png'; // Add a close icon

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn'); // Clear login state from localStorage
    dispatch(authActions.logout());
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="sticky top-0 bg-gradient-to-r from-orange-400 to-yellow-300 p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-4xl">Blog App</h1>
        {isLoggedIn && (
          <div className="lg:hidden">
            <img 
              src={isMenuOpen ? closeIcon : menuIcon} 
              alt="Menu Icon" 
              className="h-6 w-6 cursor-pointer" 
              onClick={toggleMenu} 
            />
          </div>
        )}
        <div className="hidden lg:flex space-x-6 items-center">
          {isLoggedIn && (
            <>
              <NavLink
                to="/blogs"
                end
                className={({ isActive }) =>
                  isActive ? "text-orange-700 text-xl font-semibold border-b-2 border-orange-700 pb-1" : "text-gray-700 text-xl font-semibold hover:text-gray-900"
                }
              >
                All Blogs
              </NavLink>
              <NavLink
                to="/myBlogs"
                className={({ isActive }) =>
                  isActive ? "text-orange-700 text-xl font-semibold border-b-2 border-orange-700 pb-1" : "text-gray-700 text-xl font-semibold hover:text-gray-900"
                }
              >
                My Blogs
              </NavLink>
              <NavLink
                to="/blogs/add"
                className={({ isActive }) =>
                  isActive ? "text-orange-700 text-xl font-semibold border-b-2 border-orange-700 pb-1" : "text-gray-700 text-xl font-semibold hover:text-gray-900"
                }
              >
                Add Blogs
              </NavLink>
              <button 
                onClick={handleLogout}
                className="bg-orange-600 text-white px-4 py-2 rounded-full hover:bg-orange-700 transition duration-300 font-semibold"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
      {isMenuOpen && isLoggedIn && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 z-10 flex flex-col items-center justify-center space-y-6">
          <img 
            src={closeIcon} 
            alt="Close Icon" 
            className="h-6 w-6 cursor-pointer absolute top-4 right-4" 
            onClick={toggleMenu} 
          />
          <NavLink
            to="/blogs"
            end
            className="text-white text-2xl font-semibold"
            onClick={toggleMenu}
          >
            All Blogs
          </NavLink>
          <NavLink
            to="/myBlogs"
            className="text-white text-2xl font-semibold"
            onClick={toggleMenu}
          >
            My Blogs
          </NavLink>
          <NavLink
            to="/blogs/add"
            className="text-white text-2xl font-semibold"
            onClick={toggleMenu}
          >
            Add Blogs
          </NavLink>
          <button 
            onClick={() => {
              handleLogout();
              toggleMenu();
            }}
            className="bg-orange-600 text-white px-4 py-2 rounded-full hover:bg-orange-700 transition duration-300 font-semibold"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
