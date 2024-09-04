import React, { useEffect } from 'react'
import { FaArrowDown, FaRegEnvelope } from 'react-icons/fa'
import { FiPhone } from 'react-icons/fi'
import { LuSendHorizonal } from 'react-icons/lu'
import './Contact.css'
import ScrollReveal from "scrollreveal";

const Contact = () => {



    useEffect(() => {

        const srLeft = ScrollReveal({
            origin: "left",
            distance: "80px",
            duration: 2000,
            reset: true,
        });

        srLeft.reveal('.contact-info', { delay: 100 });
    }, [])

    useEffect(() => {
        const srRight = ScrollReveal({
            origin: "right",
            distance: "80px",
            duration: 2000,
            reset: true,
        });

        srRight.reveal('.form-control', { delay: 100 });
    }, [])



    return (
        <div className='section' id='contact' >
            <div className="top-header">
                <h1>Get in touch</h1>
                <span>Do you have a project in your mind, contact me here</span>
            </div>
            <div className="row">
                <div className="col">
                    <div className="contact-info">
                        <h2>Find Me  <FaArrowDown className='contact-icons' /></h2>
                        <p className='gmail'><FaRegEnvelope className='contact-icons' /> Email:dasturchiqurbonboyev@gmail.com</p>
                        <p><FiPhone className='contact-icons' /> Tel: +998990955904</p>
                    </div>
                </div>
                <div className="col">
                    <div className="form-control">
                        <div className="form-inputs">
                            <input type="text" className="input-field" placeholder='Name' />
                            <input type="email" className="input-field" placeholder='Email' />
                        </div>
                        <div className="text-area">
                            <textarea className='textarea' placeholder='Message'></textarea>
                        </div>
                        <div className="form-button">
                            <button className='btn'>Send <LuSendHorizonal className='contact-icons form-btn-icon' /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact