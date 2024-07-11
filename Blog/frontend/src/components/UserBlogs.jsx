import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Blog from './Blog.jsx';
import Loader from './Loader.jsx';
import notfound404 from '../assets/notfound.webp';

const UserBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const id = localStorage.getItem('userId');

  const fetchUserBlogs = async () => {
    try {
      const res = await axios.get(`http://localhost:4000/api/blog/user/${id}`);
      const data = res.data;
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const refreshBlogs = () => {
    setIsLoading(true); // Set loading state to true before fetching data
    fetchUserBlogs().then((data) => {
      setBlogs(data.blogs);
      setIsLoading(false); // Set loading state to false after fetching data
    });
  };

  useEffect(() => {
    refreshBlogs();
  }, [id]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto ">
        <div className="flex flex-wrap justify-center">
          {isLoading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <Loader key={index} />
            ))
          ) : blogs.length > 0 ? (
            blogs.map((blog) => (
              <Blog
                key={blog._id} // Use key prop with a unique value
                id={blog._id}
                isUser={true}
                username={blog.user.name}
                title={blog.title}
                imageURL={blog.image}
                description={blog.description}
                createdAt={blog.createdAt}
                refreshBlogs={refreshBlogs}
              />
            ))
          ) : (
            <div className="flex flex-col items-center">
              <img src={notfound404} alt="No data available" className="h-[400px] w-[500px] mb-4" />
              <p className="text-gray-600 text-lg">No posts available</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserBlogs;
