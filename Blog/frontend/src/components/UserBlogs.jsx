import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Blog from './Card.jsx';
import Loader from './Loader.jsx'; // Import the Loader component
import notfound from '../assets/404image.png';

const UserBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State to track loading state
  const id = localStorage.getItem('userId');

  const sendRequest = async () => {
    try {
      const res = await axios.get(`http://localhost:4000/api/blog/user/${id}`);
      const data = res.data; 
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const refreshBlogs = () => {
    sendRequest().then((data) => {
      setBlogs(data.blogs);
      setIsLoading(false); // Set loading state to false after data is fetched
    });
  };

  useEffect(() => {
    refreshBlogs();
  }, [id]);

  return (
    <div className="flex flex-col items-center">
      {isLoading ? (
        Array.from({ length: 6 }).map((_, index) => ( // Adjust the length to match the number of loaders needed
          <Loader key={index} />
        ))
      ) : blogs && blogs.length > 0 ? (
        blogs.map((blog) => (
          <Blog
            id={blog._id}
            isUser={true}
            key={blog._id}
            username={blog.user.name} // Ensure blog.user.name exists in your data structure
            title={blog.title}
            imageURL={blog.image}
            description={blog.description}
            createdAt={blog.createdAt} // Pass createdAt
            refreshBlogs={refreshBlogs} // Pass refreshBlogs function
          />
        ))
      ) : (
        <div className="flex flex-col items-center">
          <img src={notfound} alt="No posts found" className="h-100 w-auto mb-4" />
          <p className="text-gray-600 text-lg ">No posts available Add Posts to see</p>
        </div>
      )}
    </div>
  );
};

export default UserBlogs;
