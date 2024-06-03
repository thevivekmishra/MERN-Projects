import React from 'react'
import BannerImg from '../assets/home.png'

const Body = () => {
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row '>

                {/* left side */}
                <div className='w-full md:w-1/2 mt-12 md:mt-32 order-2 md:order-1'>
                    <div className='space-y-8'>
                        <h1 className='text-4xl font-bold'>Welcome to <span className='text-pink-500'>Sushima Physiotherapy</span></h1>
                        <p className='text-xl'>At Sushima Physiotherapy, we focus on helping you heal and thrive. Whether you're recovering from surgery, dealing with a chronic condition, or aiming to boost your physical performance, our personalized approach ensures you get the best care possible.</p>
                        <p className='text-xl'>
                            Experience the difference personalized care can make. Contact Sushima Physiotherapy today to schedule your appointment and start your journey to better health.
                        </p>
                    </div>

                    <button className="btn btn-secondary mt-10 mb-7">Make an Appointment</button>
                </div>

                {/* right side */}
                <div className='w-full md:w-1/2 mt-9 md:mt-0 flex justify-center md:block order-1 md:order-2'>
                    <img src={BannerImg} className='h-auto w-full max-w-sm md:max-w-full' />
                </div>

            </div>
        </>
    )
}

export default Body
