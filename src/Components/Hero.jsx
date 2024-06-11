import React, { useEffect } from 'react'
import "./Hero.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MdKeyboardDoubleArrowDown } from "react-icons/md";


const Hero = ({ Tittle, Description, button }) => {

    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <div className="main-container">
                <div data-aos="fade-up-left"><h1>{Tittle}</h1></div>
                <div data-aos="flip-right">
                    <p>
                        {Description}

                    </p>
                </div>




                <MdKeyboardDoubleArrowDown />
                <button>{button}</button>

            </div>
        </>
    )
}

export default Hero
