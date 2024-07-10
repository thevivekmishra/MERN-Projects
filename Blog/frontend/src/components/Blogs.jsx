import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Blog from './Card.jsx';
import Loader from './Loader.jsx'; // Import the Loader component

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State to track loading state

  const sendRequest = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/blog");
      const data = res.data;
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const refreshBlogs = () => {
    sendRequest().then((data) => {
      setBlogs(data.blogs);
      setIsLoading(false); // Set loading to false after blogs are fetched
    }).catch(() => {
      setIsLoading(false); // Handle error state
    });
  };

  useEffect(() => {
    refreshBlogs();
  }, []);

  return (
    <div className="flex flex-wrap justify-center bg-gray-100">
      {isLoading ? (
        Array.from({ length: 6 }).map((_, index) => ( // Render 6 loaders
          <Loader key={index} />
        ))
      ) : blogs.length > 0 ? (
        blogs.map((blog) => (
          <Blog 
            key={blog._id}
            id={blog._id}
            isUser={localStorage.getItem("userId") === blog.user._id}
            username={blog.user.name}
            title={blog.title}
            imageURL={blog.image}
            description={blog.description}
            createdAt={blog.createdAt} // Pass createdAt
            refreshBlogs={refreshBlogs} // Pass refreshBlogs function
          />
        ))
      ) : (
        <div className="flex flex-col items-center">
          <p className="text-gray-600 text-lg">No posts available</p>
        </div>
      )}
    </div>
  );
};

export default Blogs;