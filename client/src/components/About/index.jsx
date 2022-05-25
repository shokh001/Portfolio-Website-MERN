import React from 'react'
import me from '../../assets/images/me.jpg'
import './about.scss'

const About = () => {
    return (
        <div id='about' className="about">
            <div className="container">
                <div className="left-content">
                    <h2>
                        <span>01.</span>
                        About Me
                    </h2>

                    <p>Hello! My name is Shohjahon. I entered the Tashkent University of Information Technologies in 2019. I am currently a 3rd year student. My interest in web programming started in 2019. I completed a frontend course at the PDP IT Academy in Tashkent.</p>

                    <p className='aboutTechnology'>Here are a few technologies I've been working with recently:</p>

                    <div className="list-technology">
                        <div className='list'>
                            <div className="technology">HTML</div>
                            <div className="technology">Css</div>
                            <div className="technology">Bootstrap</div>
                            <div className="technology">Sass</div>
                            <div className="technology">Material UI</div>
                        </div>
                        <div className='list'>
                            <div className="technology">JavaScript</div>
                            <div className="technology">React js</div>
                            <div className="technology">Styled Components</div>
                            <div className="technology">Redux</div>
                            <div className="technology">Next Js</div>
                        </div>
                    </div>
                </div>

                <div className="right-content">
                    <div className="wrapper">
                        <img src={me} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
