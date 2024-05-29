import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';

const Login = () => {
    const [showModal, setShowModal] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const openModal = () => setShowModal(true);
    const closeModal = () => {
        setShowModal(false);
        reset(); // Reset form fields when closing modal
    };

    const onSubmit = async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password,
        };

        try {
            const res = await axios.post("http://localhost:4000/user/login", userInfo);
            console.log(res.data);

            if (res.data) {
                toast.success("Logged in Successfully");
                localStorage.setItem("User", JSON.stringify(res.data.user)); // Assuming 'user' is the key in your response data
                setTimeout(() => {
                    window.location.reload();
                }, 1000); // Optional: Refreshing after a short delay
                closeModal(); // Close modal after successful login
            }
        } catch (err) {
            if (err.response) {
                console.log(err.response);
                toast.error("Error: " + err.response.data.message);
            } else {
                console.log(err);
                toast.error("Error occurred. Please try again later.");
            }
        }
    };

    return (
        <div>
            <Link to="#" onClick={openModal} className="text-blue-500 hover:text-blue-700">
                Login
            </Link>

            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50  ">
                    <div className="absolute inset-0 bg-black opacity-50 "></div>
                    <div className="relative bg-white dark:bg-gray-800 rounded-lg max-w-md w-full p-6 ml-4 mr-6 shadow-lg">
                        <button
                            className="absolute top-0 right-0 p-2 m-2 text-lg text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                            onClick={closeModal}
                        >
                            ✕
                        </button>
                        <h3 className="text-xl font-semibold mb-4 text-center text-gray-900 dark:text-gray-100">Login</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 text-left">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    {...register('email', { required: true })}
                                    className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-3 py-2 text-black dark:bg-gray-700 dark:text-gray-100"
                                    placeholder=" Enter your email"
                                />
                                {errors.email && (
                                    <span className="text-red-500 text-sm mt-1">Email is required</span>
                                )}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 text-left">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    {...register('password', { required: true })}
                                    className="mt-1 block w-full border text-black border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-3 py-2 dark:bg-gray-700 dark:text-gray-100"
                                    placeholder="**********"
                                />
                                {errors.password && (
                                    <span className="text-red-500 text-sm mt-1">Password is required</span>
                                )}
                            </div>
                            <div className="flex justify-between items-center">
                                <button
                                    type="submit"
                                    className="bg-pink-500 hover:bg-pink-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    Login
                                </button>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Not registered?{' '}
                                    <Link to="/signup" className="text-blue-500 hover:text-blue-800">
                                        Sign Up
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Login;
