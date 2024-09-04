import React, { useEffect } from 'react'
import './About.css'
import { FiDownload } from 'react-icons/fi'
import ScrollReveal from "scrollreveal";

const About = () => {



    useEffect(() => {

        const srLeft = ScrollReveal({
            origin: "left",
            distance: "80px",
            duration: 2000,
            reset: true,
        });

        srLeft.reveal('.about-info', { delay: 100 });
    }, [])

    useEffect(() => {
        const srRight = ScrollReveal({
            origin: "right",
            distance: "80px",
            duration: 2000,
            reset: true,
        });

        srRight.reveal('.skills-box', { delay: 100 });
    }, [])


    return (
        <div>
            <div className="section" id="about">
                <div className="top-header">
                    <h1>About Me</h1>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="about-info">
                            <h1>My introduction</h1>
                            <p>
                                I am well-versed in HTML CSS and JavaScript, and other cutting adge frameworks and libraries, which allows me to implement interactive features.
                                Additionally, I have experirence working with content managment systems (CMS) like
                                Wordpress.
                            </p>
                            <div className="about-btn">
                                <button className="btn">
                                    Download CV <FiDownload />
                                </button>
                            </div>

                        </div>
                    </div>
                    <div className="col">
                        <div className="skills-box">
                            <div className="skills-header">
                                <h3>Frontend</h3>
                            </div>
                            <div className="skills-list">
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>SCSS</span>
                                <span>SASS</span>
                                <span>Bootstrap</span>
                                <span>Tailwind</span>
                                <span>JavaScript</span>
                                <span>React</span>
                                <span>NextJS</span>
                                <span>TypeScript</span>
                                <span>Redux</span>
                                <span>Git</span>
                                <span>GitHub</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About