import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AllCards from '../components/AllCards';
import list from '../../public/list.json';
import start from '../assets/star.png'

function HomeCards() {
    const filterData = list.filter((data) => data.category === "Free");

    // Slider settings
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
            <div>
                <h1 className='font-semibold text-xl pb-2'>Why Choose Us?</h1>
         
                <p className='text-xl'>Choosing Sushima Physiotherapy means choosing a clinic that prioritizes your health and recovery. Our personalized approach, state-of-the-art facilities, and commitment to continuous improvement ensure that you receive the highest standard of care. We are passionate about helping our patients achieve their health goals and improve their quality of life.</p>
                <br></br>
                <h2 className='text-pink-500 font-semibold text-2xl flex gap-2 justify-center items-center'>5<img src={start} className='h-6 w-6'/>rating on google</h2>
                <br></br>
            </div>

            <div>
                <Slider {...settings}>
                    {filterData.map((item) => (
                        <AllCards item={item} key={item.id} />
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default HomeCards;
