import React, { useState, useEffect } from 'react';
import Cards from '../components/Cards';
import { IoIosAddCircleOutline } from "react-icons/io";
import InputData from '../components/InputData';
import axios from 'axios';

const AllTasks = () => {
  const [userData, setUserData] = useState([]);
  const [inputDiv, setInputDiv] = useState("hidden");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [updatedData ,setUpdatedData] = useState({
    id:"",
    title:"",
    description:""
  })

  const headers = {
    Authorization: `Bearer ${localStorage.getItem("token")}`
  };

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/v1/task/getalltask", { headers });
        setUserData(response.data.tasks); // Adjust this if the response structure is different
        setLoading(false);
      } catch (error) {
        console.error("Error fetching tasks:", error);
        setError("Failed to load tasks.");
        setLoading(false);
      }
    };
    fetchTasks();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <div className='flex justify-between'>
        <div className='flex justify-center items-center text-center'>
          <h1 className='font-serif text-4xl bg-gradient-to-r from-orange-300 via-yellow-500 to-red-400 inline-block text-transparent bg-clip-text'>
            TASKMANG
          </h1>
        </div>
        <button onClick={() => setInputDiv("block")} className='flex justify-center items-center text-center'>
          <IoIosAddCircleOutline className="cursor-pointer text-5xl hover:scale-105 transition 0.2s" title="Add" />
        </button>
      </div>
      <Cards home={"true"} setInputDiv={setInputDiv} data={userData}  setUpdatedData={setUpdatedData} />
      <InputData inputDiv={inputDiv} setInputDiv={setInputDiv} updatedData={updatedData} setUpdatedData={setUpdatedData}/>
    </>
  );
};

export default AllTasks;
