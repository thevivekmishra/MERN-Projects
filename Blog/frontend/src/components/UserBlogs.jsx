import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Blog from './Card.jsx';
import Loader from './Loader.jsx';
import notfound from '../assets/404image.png';

const UserBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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
      setIsLoading(false);
    });
  };

  useEffect(() => {
    refreshBlogs();
  }, [id]);

  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-gray-100">
      {isLoading ? (
        Array.from({ length: 6 }).map((_, index) => (
          <Loader key={index} />
        ))
      ) : blogs && blogs.length > 0 ? (
        blogs.map((blog) => (
          <Blog
            id={blog._id}
            isUser={true}
            key={blog._id}
            username={blog.user.name}
            title={blog.title}
            imageURL={blog.image}
            description={blog.description}
            createdAt={blog.createdAt}
            refreshBlogs={refreshBlogs}
          />
        ))
      ) : (
        <div className="flex flex-col items-center mt-6">
          <img src={notfound} alt="No posts found" className="h-100 w-auto mb-4" />
          <p className="text-gray-600 text-lg flex justify-center items-center text-center">No posts available.<br></br> Add posts to see them here.</p>
        </div>
      )}
    </div>
  );
};

export default UserBlogs;
