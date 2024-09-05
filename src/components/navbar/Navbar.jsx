import React, { useEffect, useState } from 'react'
import './Navbar.css'
import resume from '../../public/Qurbonboyev_Zafarbek_cv.pdf'


const Navbar = () => {
    const [responsive, setResponsive] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
        <nav id="header" className={`${scrollY > 50 ? "shadow" : "noShadow"}`}>
            <div className="nav-logo">
                <p className="nav-name">QZB</p>
                <span>.</span>
            </div>
            <div className={`nav-menu ${responsive ? `left-0 ${scrollY > 50 ? "top-[70px]" : "top-[80px]"}` : ""}`}>
                <ul className="nav__menu__list">
                    <li className="nav__list">
                        <a onClick={() => setResponsive(false)} href="#home" className="nav__link">Home</a>
                    </li>
                    <li className="nav__list">
                        <a onClick={() => setResponsive(false)} href="#about" className="nav__link">About</a>
                    </li>
                    <li className="nav__list">
                        <a onClick={() => setResponsive(false)} href="#projects" className="nav__link">Projects</a>
                    </li>
                    <li className="nav__list">
                        <a onClick={() => setResponsive(false)} href="#contact" className="nav__link">Contact</a>
                    </li>
                </ul>
            </div>
            <div className="nav-button">
                <a href={resume} download='Resume' className="btn">
                    Download CV
                </a>
            </div>
            <div onClick={() => setResponsive(!responsive)} className="nav-menu-btn">
                <svg className='w-[25px]' xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" id="bars">
                    <path fill="#6563FF" d="M20,11H4c-0.6,0-1,0.4-1,1s0.4,1,1,1h16c0.6,0,1-0.4,1-1S20.6,11,20,11z M4,8h16c0.6,0,1-0.4,1-1s-0.4-1-1-1H4C3.4,6,3,6.4,3,7S3.4,8,4,8z M20,16H4c-0.6,0-1,0.4-1,1s0.4,1,1,1h16c0.6,0,1-0.4,1-1S20.6,16,20,16z"></path>
                </svg>
            </div>
        </nav>
    );
};

export default Navbar; // Bu qator endi to'g'ri joyda
