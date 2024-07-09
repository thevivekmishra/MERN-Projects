import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Blog from './Card.jsx';
import deleteIcon from '../assets/delete.png';
import editIcon from '../assets/edit.png';


const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  const sendRequest = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/blog");
      const data = res.data;
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    sendRequest().then((data) => setBlogs(data.blogs));
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {blogs.map((blog) => (
        <Blog 
        id= {blog._id}
        isUser={localStorage.getItem("userId")===blog.user._id}
          key={blog._id}
          username={blog.user.name}
          title={blog.title}
          imageURL={blog.image}
          description={blog.description}
        />
      ))}
    </div>
  );
};

export default Blogs;
