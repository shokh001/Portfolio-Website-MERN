import React from 'react'
import Typed from 'react-typed';
import './main.scss'

const Main = () => {

    return (
        <div className="main">
            <div className="container">
                <h5>Hi, my name is</h5>
                <h1>Shohjahon Dilmurodov.</h1>
                <h2>I build things for the web.</h2>
                <h3>I am  <span id='typed'>
                        <Typed
                            strings={[
                                'a front-end developer.',
                                'a student.' ]}
                            typeSpeed={40}
                            backSpeed={40}
                            loop >
                        </Typed>
                    </span>
                </h3>

                <a className='btn' href="mailto:shohjahondilmurodov56@gmail.com">Get In Touch</a>
            </div>
        </div>
    )
}

export default Main
