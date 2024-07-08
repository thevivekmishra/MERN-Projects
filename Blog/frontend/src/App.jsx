import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header.jsx";
import Auth from "./components/Auth.jsx";
import Blogs from "./components/Blogs.jsx";
import UserBlogs from "./components/UserBlogs.jsx";
import BlogDetails from "./components/BlogDetails.jsx";
import AddBlogs from "./components/AddBlogs.jsx";
import { useSelector } from "react-redux";
import Hero from "./components/Hero.jsx";

const App = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);

  return (
    <>
      <header>
        <Header />
        <Hero/>
      </header>
      <main>
        <Routes>
          {!isLoggedIn ? (
            <>
              <Route path="/auth" element={<Auth />} />
              <Route path="*" element={<Navigate to="/auth" />} />
            </>
          ) : (
            <>
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/myBlogs" element={<UserBlogs />} />
              <Route path="/myBlogs/:id" element={<BlogDetails />} />
              <Route path="/blogs/add" element={<AddBlogs />} />
              <Route path="*" element={<Navigate to="/blogs" />} />
            </>
          )}
        </Routes>
      </main>
    </>
  );
};

export default App;



