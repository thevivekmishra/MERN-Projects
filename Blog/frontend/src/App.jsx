import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Auth from "./components/Auth.jsx";
import Blogs from "./components/Blogs.jsx";
import UserBlogs from "./components/UserBlogs.jsx";
import BlogDetails from "./components/BlogDetails.jsx";
import AddBlogs from "./components/AddBlogs.jsx";
import { useSelector } from "react-redux";


const App = () => {
  const isLoggedIn = useSelector((state)=>state.isLoggedIn);
  console.log(isLoggedIn)
  return (
    <>
      <header>
        <Header />
        <Auth/>
      </header>
      <main>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/myBlogs" element={<UserBlogs/>} />
          <Route path="/myBlogs/:id" element={<BlogDetails />} />
          <Route path="/blogs/add" element={<AddBlogs />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
