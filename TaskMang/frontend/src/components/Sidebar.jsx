import React from 'react';
import { FaTasks, FaStar, FaCheck, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation(); // Get the current location

    const data = [
        {
            title: "All Tasks",
            icon: <FaTasks />,
            link: "/"
        },
        {
            title: "Important Tasks",
            icon: <FaStar />,
            link: "/importanttasks"
        },
        {
            title: "Completed Tasks",
            icon: <FaCheck />,
            link: "/completedtasks"
        },
        {
            title: "Incomplete Tasks",
            icon: <FaTimes />,
            link: "/incompletedtasks"
        }
    ];

    return (
        <div className='flex flex-col p-4 text-gray-100 h-full'>
            <div className='mb-6'>
                <h2 className='font-semibold text-2xl'>Vivek Kumar Mishra</h2>
                <h3 className='text-lg my-3'>vivek@gmail.com</h3>
                <hr className='border-gray-500' />
            </div>
            <div className='flex-grow'>
                {data.map((item, index) => (
                    <Link
                        to={item.link}
                        key={index}
                        className={`flex items-center p-2 my-2 rounded-lg cursor-pointer transition 0.1s ${location.pathname === item.link ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
                    >
                        <span className='mr-3'>{item.icon}</span>
                        <span>{item.title}</span>
                    </Link>
                ))}
            </div>
            <div className='mt-auto'>
                <button className='w-full bg-red-600 hover:bg-red-700 p-2 rounded-lg'>Logout</button>
            </div>
        </div>
    );
};

export default Sidebar;
