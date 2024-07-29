import React, { useState } from 'react'
import Cards from '../components/Cards'
import { IoIosAddCircleOutline } from "react-icons/io";
import InputData from '../components/InputData';


const AllTasks = () => {
  const [inputDiv,setInputDiv] = useState("hidden")
  return (
    <>
      <div className=' flex justify-between '>

      <div className='flex justify-center  items-center text-center'>
          <h1 className='font-serif text-4xl bg-gradient-to-r from-orange-300 via-yellow-500 to-red-400 inline-block text-transparent bg-clip-text'>TASKMANG</h1>
        </div>
        <button onClick={()=>setInputDiv("block")} className='flex justify-center  items-center text-center'>
          <IoIosAddCircleOutline className=" cursor-pointer text-5xl hover:scale-105 transition 0.2s" title="Add" />
        </button>

      </div>
      <Cards home={"true"} setInputDiv={setInputDiv}/>
      <InputData inputDiv={inputDiv} setInputDiv={setInputDiv}/>
    </>
  )
}

export default AllTasks