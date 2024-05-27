import React from 'react'
import Home from './home/Home'
import Course from './components/Course'
import {Route,Routes} from "react-router-dom"

export const App = () => {
  return (
    <>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/couse" element={Course}/>
   </Routes>
   </>
  )
}
export default App