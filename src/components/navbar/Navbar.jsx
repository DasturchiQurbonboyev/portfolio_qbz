import React, { useEffect, useState } from 'react'
import './Navbar.css'

const Navbar = () => {


    const [responsive, setResponsive] = useState("")

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
        <div>
            <nav id="header" className={`${scrollY > 50 ? "shadow" : "noShadow"}`}>
                <div className="nav-logo">
                    <p className="nav-name">QZB</p>
                    <span>.</span>
                </div>
                <div className={`nav-menu  ${responsive ? `left-0  ${scrollY > 50 ? "top-[70px]" : "top-[80px]"} ` : ""}  `} id="myNavMenu">
                    <ul className="nav__menu__list ">
                        <li className="nav__list">
                            <a onClick={() => setResponsive(false)} href="#home" className="nav__link">Home</a>
                            <div className="circle">

                            </div>
                        </li>
                        <li className="nav__list">
                            <a onClick={() => setResponsive(false)} href="#about" className="nav__link">About</a>
                            <div className="circle">

                            </div>
                        </li>
                        <li className="nav__list">
                            <a onClick={() => setResponsive(false)} href="#projects" className="nav__link">Projects</a>
                            <div className="circle">

                            </div>
                        </li>
                        <li className="nav__list">
                            <a onClick={() => setResponsive(false)} href="#contact" className="nav__link">Contact</a>
                            <div className="circle">

                            </div>
                        </li>
                    </ul>
                </div>
                <div className="nav-button">
                    <button className="btn">
                        Download CV <svg className='w-[25px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="file-download-alt"><path fill="#6563FF" d="M8,8a1,1,0,0,0,0,2H9A1,1,0,0,0,9,8Zm5,12H6a1,1,0,0,1-1-1V5A1,1,0,0,1,6,4h5V7a3,3,0,0,0,3,3h3v2a1,1,0,0,0,2,0V9s0,0,0-.06a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.29.29,0,0,0-.1,0A1.1,1.1,0,0,0,12.06,2H6A3,3,0,0,0,3,5V19a3,3,0,0,0,3,3h7a1,1,0,0,0,0-2ZM13,5.41,15.59,8H14a1,1,0,0,1-1-1ZM14,12H8a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Zm6.71,6.29a1,1,0,0,0-1.42,0l-.29.3V16a1,1,0,0,0-2,0v2.59l-.29-.3a1,1,0,0,0-1.42,1.42l2,2a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l2-2A1,1,0,0,0,20.71,18.29ZM12,18a1,1,0,0,0,0-2H8a1,1,0,0,0,0,2Z"></path></svg>
                    </button>
                </div>
                <div onClick={() => setResponsive(!responsive)} className="nav-menu-btn">
                    <svg className='w-[25px]' xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" id="bars"><path fill="#6563FF" d="M20,11H4c-0.6,0-1,0.4-1,1s0.4,1,1,1h16c0.6,0,1-0.4,1-1S20.6,11,20,11z M4,8h16c0.6,0,1-0.4,1-1s-0.4-1-1-1H4C3.4,6,3,6.4,3,7S3.4,8,4,8z M20,16H4c-0.6,0-1,0.4-1,1s0.4,1,1,1h16c0.6,0,1-0.4,1-1S20.6,16,20,16z"></path></svg>
                </div>
            </nav>
        </div>
    )
}

export default Navbar