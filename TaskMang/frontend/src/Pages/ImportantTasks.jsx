import React, { useEffect, useState } from 'react';
import Cards from '../components/Cards';
import axios from 'axios';

const ImportantTasks = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const headers = {
    Authorization: `Bearer ${localStorage.getItem("token")}`
  };

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/v1/task/importanttask", { headers });
        setData(response.data.tasks); // Adjust this if the response structure is different
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
      <Cards home={"false"} data={data} />
    </>
  );
}

export default ImportantTasks;
