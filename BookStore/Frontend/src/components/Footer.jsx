import React from 'react'
import { Link } from 'react-router-dom'
import github from '../assets/github.png'
import facebook from '../assets/messenger.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
const Footer = () => {
    return (
        <>
            <div >

                <footer className="footer footer-center p-10  text-base-content rounded dark:bg-slate-900 dark:text-white">
                    <nav className="grid grid-flow-col gap-4">
                        <Link to="/about"><a className="link link-hover">About us</a></Link>
                        <Link to="/contact"><a className="link link-hover">Contact</a></Link>

                    </nav>
                    <nav>
                        <div className="grid grid-flow-col gap-4 ">

                            <div className="h-14 w-14 hover:scale-105">
                                <a href="https://github.com/thevivekmishra/" target="_blank">
                                    <img src={github} /> </a>
                            </div>

                            <div className="h-14 w-14 hover:scale-105">
                                <a href="https://www.facebook.com/VivekMishra2003/" target="_blank">
                                    <img src={facebook} /> </a>
                            </div>

                            <div className="h-14 w-14 hover:scale-105">
                                <a href="https://www.instagram.com/v__4__vivek_/" target="_blank">
                                    <img src={instagram} /> </a>
                            </div>

                            <div className="h-14 w-14 hover:scale-105">
                                <a href="https://www.linkedin.com/in/vivekmishra100" target="_blank">
                                    <img src={linkedin} /> </a>
                            </div>
                        </div>
                    </nav>
                    <aside>
                        <p>Copyright © 2024 - All right reserved by <a href="https://vivekportfolio1.vercel.app" className='underline text-pink-500'>Vivek Kumar Mishra</a></p>
                    </aside>
                </footer>
            </div>
        </>
    )
}

export default Footer