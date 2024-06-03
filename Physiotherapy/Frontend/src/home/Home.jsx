import React from 'react'
import Navbar from '../components/Navbar'
import Body from '../components/Body'
import HomeCards from '../components/HomeCards'
import Footer from '../components/Footer'


function Home() {
    return (
        <>
            <Navbar />
            <Body />
            <HomeCards />
            <Footer />
        </>
    )
}

export default Home