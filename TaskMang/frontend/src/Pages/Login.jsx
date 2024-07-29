import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 p-2">
      <div className="bg-gray-900 text-gray-100 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-gray-200 mb-2 text-xl">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-200 mb-2 text-xl">Password</label>
            <input
              type="password"
              id="password"
              className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="flex justify-center">
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white w-full px-4 py-2 rounded-md">Login</button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <p className="text-gray-400">
            Don't have an account? 
            <Link to="/signup" className="text-blue-500 hover:underline ml-1">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
