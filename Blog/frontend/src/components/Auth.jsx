import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/index.jsx'; // Update the import path

const Auth = () => {
  const dispatch = useDispatch();

  const [isSignup, setIsSignup] = useState(false);
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    name: ''
  });

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const sendRequest = async () => {
    const endpoint = isSignup
      ? 'http://localhost:4000/api/user/signup'
      : 'http://localhost:4000/api/user/login';
    const res = await axios
      .post(endpoint, {
        email: inputs.email,
        password: inputs.password,
        ...(isSignup && { name: inputs.name })
      })
      .catch((err) => console.log(err));

    const data = res.data;
    console.log(data);
    return data;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data:', inputs);
    const result = await sendRequest();
    console.log(result);
    if (result) {
      localStorage.setItem('isLoggedIn', 'true'); // Save login state to localStorage
      localStorage.setItem('userId', result.user._id); // Save userId to localStorage
      dispatch(authActions.login());
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isSignup ? 'Sign Up' : 'Login'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {isSignup && (
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                value={inputs.name}
                onChange={handleChange}
                required
              />
            </div>
          )}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              value={inputs.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              value={inputs.password}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-md shadow-md hover:bg-orange-600 transition duration-300"
          >
            {isSignup ? 'Sign Up' : 'Login'}
          </button>
        </form>
        <p className="mt-6 text-center text-gray-600">
          {isSignup ? (
            <>
              Already have an account?{' '}
              <button
                onClick={() => setIsSignup(false)}
                className="text-orange-500 hover:underline"
              >
                Login
              </button>
            </>
          ) : (
            <>
              Don't have an account?{' '}
              <button
                onClick={() => setIsSignup(true)}
                className="text-orange-500 hover:underline"
              >
                Sign Up
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Auth;
