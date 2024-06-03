import React from 'react';
import Home from './home/Home';
import { Routes, Route } from 'react-router-dom';
import Services from './service/Services';
import AboutUs from './about/AboutUs';
import Contactus from './contactus/ContactUs';
import Gallery from './gallery/Gallery';

function App() {
  return (
    <>
 <div className='dark:bg-slate-900 dark:text-white'>
 <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/gallery" element={<Gallery />} /> 
        <Route path="/contact" element={<Contactus/>}/>
      </Routes>
 </div>
    </>
  );
}

export default App;
