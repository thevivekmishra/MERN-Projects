import React from 'react'

const Cards = ({item}) => {
    console.log(item)
  return (
    <>
    <div className='mt-10 mb-10 mx-2 mr-2  hover:scale-105 transition-transform duration-200'>
    <div className="card w:md-w-96 bg-base-100 shadow-xl">
  <figure><img 
  src={item.image}/></figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline p-3">${item.price}</div> 
      <div className="badge badge-outline p-3 hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards