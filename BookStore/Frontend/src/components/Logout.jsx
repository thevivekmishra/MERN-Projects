import React from 'react';
import { useAuth } from '../context/AuthProvider';
import toast from 'react-hot-toast';

const Logout = () => {
    const [authUser, setAuthUser] = useAuth();

    const handleLogout = () => {
        try {
            // Update authentication context to clear user data
            setAuthUser({
                ...authUser,
                user: null
            });

            // Remove user data from localStorage
            localStorage.removeItem("User");
            // Display success toast and optionally refresh the page
            toast.success("Logged out successfully");
            setTimeout(() => {
                window.location.reload();
            }, 1000); // Optional: Refreshing after a short delay
        } catch (error) {
            toast.error("Error: " + error.message);
            console.error("Logout error:", error);
        }
    };

    return (
        <div className='px-3 py-2'>
            <button
                className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-md cursor-pointer"
                onClick={handleLogout}
            >
                Logout
            </button>
        </div>
    );
};

export default Logout;
