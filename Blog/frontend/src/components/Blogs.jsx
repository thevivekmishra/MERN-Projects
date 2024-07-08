// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Blog from './Blog.jsx';

// const Blogs = () => {
//   const [blogs, setBlogs] = useState([]);

//   const sendRequest = async () => {
//     try {
//       const res = await axios.get("http://localhost:4000/api/blog");
//       const data = res.data;
//       return data;
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     sendRequest().then((data) => setBlogs(data.blogs));
//   }, []);

//   return (
//     <div className="flex flex-wrap justify-center">
//       {blogs.map((blog,index) => (
//         <Blog 
//           title={blog.title} 
//           description={blog.description} 
//           imageURL={blog.imageURL}
//           userName={blog.user.name} 
//         />
//       ))}
//     </div>
//   );
// };

// export default Blogs;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Blog from './Blog.jsx';

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
          key={blog._id} // Ensure each blog has a unique key
          title={blog.title} 
          description={blog.description} 
          imageURL={blog.imageURL} 
          userName={blog.user.name} 
        />
      ))}
    </div>
  );
};

export default Blogs;

