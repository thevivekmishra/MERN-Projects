import React from 'react'
import BannerBook from '../assets/BannerBook.png'
export const Banner = () => {
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>

                <div className='w-full md:w-1/2 mt-12 md:mt-32 order-2 md:order-1'>
                    <div className='space-y-12 text-center'>
                        <h1 className='text-4xl font-bold'>
                            Hello, welcomes here to learn something <span className='text-pink-500'>new everyday!!!</span>
                        </h1>

                        <p>Welcome to our bookstore, your gateway to a world of literature and learning! On our homepage, you'll find a carefully selected showcase of 5 to 6 free books, enticing you with diverse genres and intriguing titles. These free offerings are just a glimpse of what awaits in our extensive library, which spans everything from timeless classics to contemporary bestsellers.
                            To delve deeper into our collection, simply log in to access exclusive content and browse our full range of books, both free and paid. Our full-stack website is designed for seamless navigation, ensuring you can easily explore, discover, and indulge in your literary passions. Whether you're seeking fiction to escape into new worlds or non-fiction to expand your knowledge, our bookstore caters to every reader's tastes and interests. Start your journey with us today and uncover the joy of reading at its finest!</p>
                        <div className='text-4xl font-bold flex '>
                            <h1 className='text-pink-500'>Want to read technical blogs...</h1>
                        </div>
                        

                    </div>
                    <button className="btn btn-secondary mt-4" >
                        <a href="https://itstechglobe.blogspot.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                           Read Blogs
                        </a>
                    </button>
                </div>



                <div className='w-full md:w-1/2 order-1'>
                    <img src={BannerBook} className='mt-10 px-10 pt-10 md:mx-10' />
                </div>
            </div>
        </>
    )
}
