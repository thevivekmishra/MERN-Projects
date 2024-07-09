// LoadingSpinner.jsx
import React from 'react';
import { ClipLoader } from 'react-spinners';

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <ClipLoader color="#F59E0B" loading={true} size={50} />
    </div>
  );
};

export default LoadingSpinner;
