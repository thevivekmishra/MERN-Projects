import React from 'react'
import Cards from "./Cards";
import list from "../../public/list.json";
import {Link} from 'react-router-dom';

const Course = () => {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div className='pt-[100px] items-center justify-center text-center'>
        <h1 className='text-2xl font-semibold md:text-4xl'>
          We're delighted to have you {" "}
          <span className='text-pink-500'>Here! :)</span>
        </h1>
        <p className='mt-12'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel provident maiores minima nisi quaerat id vitae sapiente cumque modi error harum eius, obcaecati fugit possimus ullam reprehenderit animi doloremque. Rem est vero provident ea iusto itaque, quasi iste nisi nesciunt tempore! Quia nemo harum ad similique nesciunt perspiciatis, soluta culpa quisquam id, nostrum illum explicabo officia, omnis vero animi deserunt odio beatae nisi. Fugit ratione dolore cum, quam molestiae aperiam illo ullam. Labore nesciunt similique officia perferendis, hic ex dolores pariatur maiores beatae, facilis autem aut quibusdam suscipit temporibus facere distinctio numquam molestias blanditiis, harum voluptatem et inventore? Reprehenderit, vel.
        </p>
        <Link to = "/">
        <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-200 mt-6'>
          Go Back
          </button>
          </Link>
      </div>
    </div>
    <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
      {
      list.map((item) => (
        <Cards key = {item.id} item={item}/>
      ))
      }
    </div>
  </>
  )
}

export default Course