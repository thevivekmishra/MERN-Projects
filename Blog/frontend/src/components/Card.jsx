import React from 'react';
import editIcon from "../assets/edit.png";
import deleteIcon from "../assets/delete.png";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Blog = ({ username, title, imageURL, description, isUser, id }) => {
  const navigate = useNavigate();

  const avatarLetter = username ? username.charAt(0).toUpperCase() : '';

  const handleEdit = () => {
    navigate(`/myBlogs/${id}`);
    console.log(`Editing blog: ${title}`);
  };

  const deleteRequest = async () => {
    try {
      const res = await axios.delete(`http://localhost:4000/api/blog/${id}`);
      console.log('Blog deleted successfully:', res.data);
      return res.data;
    } catch (error) {
      console.error('Error deleting blog:', error);
      throw error;
    }
  };

  const handleDelete = () => {
    deleteRequest()
      .then((data) => {
        console.log(data); // Optionally handle success response
        // You can implement further actions upon successful deletion here
      })
      .catch((error) => {
        console.error('Failed to delete blog:', error);
        // Optionally handle error cases
      });
  };

  const handleBlogClick = () => {
    // Navigate to blog details page
    navigate(`/myBlogs/${id}`);
  };

  return (
    <div className="max-w-md w-full bg-white shadow-md rounded-lg overflow-hidden m-4">
      <div className="px-6 py-4">
        <div className="flex items-center mb-2">
          <div className="h-10 w-10 rounded-full bg-orange-500 flex items-center justify-center text-white text-xl">
            {avatarLetter}
          </div>
          <div
            className="ml-2 font-bold text-xl cursor-pointer"
            onClick={handleBlogClick}
          >
            {username}
          </div>
          {isUser && (
            <div className="ml-auto flex">
              <img
                src={editIcon}
                alt="Edit"
                className="cursor-pointer mx-2 h-6 w-6"
                onClick={handleEdit}
              />
              <img
                src={deleteIcon}
                alt="Delete"
                className="cursor-pointer mx-2 h-6 w-6"
                onClick={handleDelete}
              />
            </div>
          )}
        </div>
        <div
          className="font-bold text-xl mb-2 cursor-pointer"
          onClick={handleBlogClick}
        >
          {title}
        </div>
        <img
          className="w-full h-48 object-cover mt-4"
          src={imageURL}
          alt={title}
        />
        <p className="text-gray-700 text-base mt-4">{description}</p>
      </div>
    </div>
  );
};

export default Blog;
