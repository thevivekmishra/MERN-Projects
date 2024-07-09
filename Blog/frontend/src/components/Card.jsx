import React from 'react';

const Blog = ({ username, title, imageURL, description }) => {
  // Extracting the first letter of the username for the avatar
  const avatarLetter = username ? username.charAt(0).toUpperCase() : '';

  return (
    <div className="max-w-md w-full bg-white shadow-md rounded-lg overflow-hidden m-4">
      <div className="px-6 py-4">
        <div className="flex items-center mb-2">
          <div className="h-10 w-10 rounded-full bg-orange-500 flex items-center justify-center text-white text-xl">
            {avatarLetter}
          </div>
          <div className="ml-2 font-bold text-xl">{username}</div>
        </div>
        <div className="font-bold text-xl mb-2">{title}</div>
        <img className="w-full h-48 object-cover mt-4" src={imageURL} alt={title} />
        <p className="text-gray-700 text-base mt-4">{description}</p>
      </div>
    </div>
  );
};

export default Blog;
