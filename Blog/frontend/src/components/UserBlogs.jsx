import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Blog from './Card.jsx';

const UserBlogs = () => {
  const [blogs, setBlogs] = useState([]);
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
    sendRequest().then((data) => setBlogs(data.blogs));
  };

  useEffect(() => {
    refreshBlogs();
  }, [id]);

  return (
    <div className="flex flex-col items-center">
      {blogs && blogs.length > 0 ? (
        blogs.map((blog, index) => (
          <Blog
            id={blog._id}
            isUser={true}
            key={index}
            username={blog.user.name} // Ensure blog.user.name exists in your data structure
            title={blog.title}
            imageURL={blog.image}
            description={blog.description}
            createdAt={blog.createdAt} // Pass createdAt
            refreshBlogs={refreshBlogs} // Pass refreshBlogs function
          />
        ))
      ) : (
        <p>No blogs found</p>
      )}
    </div>
  );
};

export default UserBlogs;
