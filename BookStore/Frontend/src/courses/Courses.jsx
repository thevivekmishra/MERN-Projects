import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Course from "../components/Course";


function Courses() {
    return (
        <>
        <Navbar/>
        <div className='min-h-screen max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <Course/>
        </div>
        <Footer/>
        </>
    )
}

export default Courses;