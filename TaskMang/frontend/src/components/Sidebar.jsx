import React, { useEffect, useState } from 'react';
import { FaTasks, FaStar, FaCheck, FaTimes } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth';
import axios from 'axios';

const Sidebar = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation(); // Get the current location

  const data = [
    {
      title: "All Tasks",
      icon: <FaTasks/>,
      link: "/"
    },
    {
      title: "Important Tasks",
      icon: <FaStar className='text-yellow-400'/>,
      link: "/importanttasks"
    },
    {
      title: "Completed Tasks",
      icon: <FaCheck className='text-green-400' />,
      link: "/completedtasks"
    },
    {
      title: "Incomplete Tasks",
      icon: <FaTimes className='text-red-500' />,
      link: "/incompletedtasks"
    }
  ];

  const logout = () => {
    dispatch(authActions.logout());
    localStorage.clear();
    history("/login");
  };

  const headers = {
    authorization: `Bearer ${localStorage.getItem("token")}`
  };

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/v1/task/getalltask", { headers });
        setUserData(response.data.user); // Assuming the user data is in response.data.user
        console.log(response); 
    } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchTasks();
  }, []);

  return (
    <div className='flex flex-col p-4 text-gray-100 h-full w-full'>
      {userData && (
        <div className='mb-6'>
          <h2 className='font-semibold text-2xl'>{userData.name}</h2>
          <h3 className='text-lg my-3'>{userData.email}</h3>
          <hr className='border-gray-500' />
        </div>
      )}
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
        <button onClick={logout} className='w-full bg-red-600 hover:bg-red-700 p-2 rounded-lg'>Logout</button>
      </div>
    </div>
  );
};

export default Sidebar;
