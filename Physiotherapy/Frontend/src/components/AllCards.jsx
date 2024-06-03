import React from 'react';

function AllCards({ item }) {
    return (
        <div className='mt-12 mb-12 dark:text-black'>
            <div className="card w-96 bg-base-100 shadow-xl hover:scale-105 duration-300">
                <figure className="px-10 pt-10">
                    <img src={item.image} alt={item.name} className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{item.title}</h2>
                    <p>{item.name}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Visit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AllCards;
