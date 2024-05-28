import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import { useForm } from 'react-hook-form';


const SignUp = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data); // Handle your form submission logic here
        // You may want to add login logic here, e.g., redirect to dashboard
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
            <div id="my_modal_3" className="w-full max-w-md items-center justify-center flex">
                <div className="modal-box bg-white dark:bg-gray-800 shadow-lg rounded-lg px-8 py-6">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute top-2 right-2 dark:bg-red-600">
                            ✕
                        </Link>

                        <h3 className="text-lg text-gray-800 dark:text-white font-medium mb-4">Sign Up</h3>

                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-800 dark:text-white  mb-2">
                                Name
                            </label>
                            <input
                                className="input-field border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500"
                                id="name"
                                type="text"
                                placeholder="Enter your full Name"
                                {...register('name', { required: true })}
                                />
                                {errors.name && (
                                    <span className="text-red-500">Name is required</span>
                                )}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-800 dark:text-white  mb-2">
                                Email
                            </label>
                            <input
                                className="input-field border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500"
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                {...register('email', { required: true })}
                                />
                                {errors.email && (
                                    <span className="text-red-500">Email is required</span>
                                )}
                        </div>

                        <div className="mb-6">
                            <label htmlFor="password" className="block text-gray-800 dark:text-white  mb-2">
                                Password
                            </label>
                            <input
                                className="input-field border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500"
                                id="password"
                                type="password"
                                placeholder="**********"
                                {...register('email', { required: true })}
                            />
                            {errors.password && (
                                <span className="text-red-500">Password is required</span>
                            )}
                        </div>

                        <button
                            className="btn btn-lg btn-primary w-full py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none"
                            type="submit"
                        >
                            SignUp
                        </button>

                        <p className=" text-gray-600 dark:text-gray-400 mt-4">
                            Already have an account?{' '}
                            <button
                                className="text-blue-500 hover:text-blue-800"
                                onClick={() => document.getElementById("my_modal_3").showModal()}
                            >
                                Login
                            </button>{" "}
                            <Login />
                        </p>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default SignUp;
