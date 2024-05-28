import React from 'react'
import Home from './home/Home'
import {Route,Routes} from "react-router-dom"
import Courses from './courses/Courses'
import SignUp from './components/SignUp'
import Contactus from './contactus/Contactus'
import Aboutus from './aboutus/Aboutus'

export const App = () => {
  return (
    <>
   <div className='dark:bg-slate-900 dark:text-white'>
   <Routes>

    <Route path="/" element={<Home/>}/>
    <Route path="/course" element={<Courses/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path= "/contact" element={<Contactus/>}/>
    <Route path="/about" element ={<Aboutus/>}/>

   </Routes>
   </div>
   </>
  )
}
export default App