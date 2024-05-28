import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data); // Handle your form submission logic here
        // You may want to add login logic here, e.g., redirect to dashboard
    };

    const handleClose = () => {
        const dialog = document.getElementById('my_modal_3');
        if (dialog) {
            dialog.close();
        }
    };

    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box dark:bg-gray-800">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* Close button inside form prevents form submission */}
                        <button
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:bg-red-600"
                            type="button" // Ensure type is button, not submit
                            onClick={handleClose}
                        >
                            ✕
                        </button>
                        <h3 className="text-lg text-black dark:text-white">Login</h3>
                        <br />

                        <div className="mb-4">
                            <label className="block text-black dark:text-white mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                            <label className="block text-black dark:text-white mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="**********"
                                {...register('password', { required: true })}
                            />
                            {errors.password && (
                                <span className="text-red-500">Password is required</span>
                            )}
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-pink-500 hover:bg-pink-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Login
                            </button>
                            <p>
                                Not registered?{' '}
                                <Link
                                    to="/signup"
                                    className="underline inline-block align-baseline text-blue-500 hover:text-blue-800"
                                >
                                    Sign Up
                                </Link>{' '}
                            </p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default Login;
