import React from 'react';
import { FaStar, FaEdit, FaTrash } from 'react-icons/fa';
import { IoIosAddCircleOutline } from "react-icons/io";


const Cards = ({home,setInputDiv}) => {
    const data = [
        {
            title: "Task 1: Design Homepage",
            desc: "Create a wireframe and design the layout for the new homepage, including header, footer, and main content sections.",
            status: "Incomplete"
        },
        {
            title: "Task 2: Implement Authentication",
            desc: "Set up user authentication with login and signup functionality, ensuring security and data protection.",
            status: "Complete"
        },
        {
            title: "Task 3: API Integration",
            desc: "Integrate the app with the backend API to fetch and display user data, including handling errors and loading states.",
            status: "Incomplete"

        },
        {
            title: "Task 4: UI/UX Improvements",
            desc: "Review and enhance the user interface and experience based on user feedback and testing, focusing on usability and aesthetics.",
            status: "Incomplete"

        },
        {
            title: "Task 5: Write Unit Tests",
            desc: "Develop and run unit tests for the application components to ensure code quality and functionality before deployment.",
            status: "Incomplete"

        },
    ];

    return (
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.map((item, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-4   flex flex-col">
                    <div className="flex-grow">
                        <h3 className="font-bold text-xl mb-6">{item.title}</h3>
                        <p className='my-4'>{item.desc}</p>
                    </div>
                    <div className="flex items-center justify-between mt-auto">

                        <button className={`text-white px-3 py-[5px] rounded-lg ${item.status === 'Incomplete' ? 'bg-orange-500' : 'bg-green-500'}`}>
                            {item.status}
                        </button>


                        <div className="flex space-x-5 ">
                            <FaStar className=" cursor-pointer text-xl hover:text-yellow-400 " title="Favorite" />
                            <FaEdit className=" cursor-pointer text-xl hover:text-blue-400 " title="Edit" />
                            <FaTrash className="text-red-500 cursor-pointer text-xl" title="Delete" />
                        </div>
                    </div>
                </div>
            ))}
            {home === "true" && 
             ( <button onClick={()=>setInputDiv("fixed")} className='border border-gray-500 rounded-lg p-4 hover:bg-gray-800  flex flex-col justify-center items-center hover:scale-105 transition 0.2s'>
              <IoIosAddCircleOutline className=" cursor-pointer text-8xl" title="Favorite" />
              <h2>Add Task</h2>
          </button>)}
          
        </div>
    );
};

export default Cards;
