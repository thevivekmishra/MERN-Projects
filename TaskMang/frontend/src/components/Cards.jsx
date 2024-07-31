import React from 'react';
import { FaStar, FaEdit, FaTrash } from 'react-icons/fa';
import { IoIosAddCircleOutline } from "react-icons/io";
import axios from 'axios';

const Cards = ({ home, setInputDiv, data, setUpdatedData }) => {
    const headers = {
        id: localStorage.getItem("id"),
        Authorization: `Bearer ${localStorage.getItem("token")}`
    };

    const handleCompleteTask = async (id) => {
        try {
            const response = await axios.put(
                `http://localhost:5000/api/v1/task/completed/${id}`,
                {},
                { headers }
            );
            console.log(response);
        } catch (error) {
            console.log("error", error);
        }
    };

    const handleImportant = async (id) => {
        try {
            const response = await axios.put(
                `http://localhost:5000/api/v1/task/important/${id}`,
                {},
                { headers }
            );
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    const handleUpdate = (id, title, description) => {
        setInputDiv("fixed");
        setUpdatedData({
            id: id,
            title: title,
            description: description
        });
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/v1/task/deletetask/${id}`, { headers });
            // Optionally update the state to remove the deleted task from the UI
            setData(prevData => prevData.filter(task => task._id !== id));
        } catch (error) {
            console.log("Failed to delete task:", error);
        }
    };

    return (
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.map((item, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-4 flex flex-col">
                    <div className="flex-grow">
                        <h3 className="font-bold text-xl mb-6">{item.title}</h3>
                        <p className='my-4'>{item.description}</p>
                    </div>
                    <div className="flex items-center justify-between mt-auto">
                        <button
                            onClick={() => handleCompleteTask(item._id)}
                            className={`text-white px-3 py-[5px] rounded-lg ${item.complete ? 'bg-green-500' : 'bg-orange-500'}`}>
                            {item.complete ? "Completed" : "Incomplete"}
                        </button>
                        <div className="flex space-x-5">
                            <button onClick={() => handleImportant(item._id)}>
                                {item.important === false ? (
                                    <FaStar className="cursor-pointer text-xl" title="Favorite" />
                                ) : (
                                    <FaStar className="cursor-pointer text-xl text-yellow-400" title="Favorite" />
                                )}
                            </button>
                            {home !== "false" && 
                             <button onClick={() => handleUpdate(item._id, item.title, item.description)}>
                                 <FaEdit className="cursor-pointer text-xl hover:text-blue-400" title="Edit" />
                             </button>}
                           
                            <button onClick={() => handleDelete(item._id)}>
                                <FaTrash className="text-red-500 cursor-pointer text-xl" title="Delete" />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
            {home === "true" && (
                <button
                    onClick={() => setInputDiv("fixed")}
                    className='border border-gray-500 rounded-lg p-4 hover:bg-gray-800 flex flex-col justify-center items-center hover:scale-105 transition 0.2s'>
                    <IoIosAddCircleOutline className="cursor-pointer text-8xl" title="Add Task" />
                    <h2>Add Task</h2>
                </button>
            )}
        </div>
    );
};

export default Cards;
