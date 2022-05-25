import React from 'react'
import './contact.scss'

const Contact = () => {
    return (
        <div className='contact' id='contact'>
            <div className="container">
                <h4>
                    04. What’s  Next?
                </h4>

                <h3>Get In Touch</h3>
                <p>The inbox is always open. If you have a question or just want to say hello, <br /> I will definitely answer you!</p>
                <a href='mailto:shohjahondilmurodov56@gmail.com' className="btn">
                    Say Hello!
                </a>

                <div className="contactMe">
                    <a target='_blank' rel="noreferrer" href="https://github.com/shokh001"><i className="fab fa-github"></i></a>
                    <a target='_blank' rel="noreferrer" href="https://www.instagram.com/shokhjakhon_001/"><i className="fab fa-instagram"></i></a>
                    <a target='_blank' rel="noreferrer" href="https://www.facebook.com/shohjahon.dilmurodov/"><i className="fab fa-facebook-f"></i></a>
                </div>
                <a href="/#" className='myGithub'>Designed & Built by Shohjahon Dilmurodov</a>
            </div>
        </div>
    )
}

export default Contact
