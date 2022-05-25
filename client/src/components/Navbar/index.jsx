import React, { useState, useEffect } from 'react'
import Resume from './Resume.pdf'
import './navbar.scss'
import logo from '../../assets/images/logo.PNG'
// import enter from '../../assets/icons/enter.png'

const Navbar = () => {

    const [active, setActive] = useState(0);
    const [nav, setNav] = useState(false);
    const [addClass, setAddClass] = useState('navbar');

    const disableScrolling = () => {
        setNav(true);
        window.onscroll = function () { window.scrollTo(0, 0); };
    }

    const enableScrolling = () => {
        setNav(false);
        let lastScrollTop = 0;
        window.onscroll = () => {
            var st = window.pageYOffset;

            if (st >= 100) {
                setAddClass('navbar navTop');
            }
            if (st <= lastScrollTop) {
                setAddClass('navbar showNavbar')
            }
            if (st < 100) {
                setAddClass('navbar')
            }

            lastScrollTop = st <= 0 ? 0 : st;
        }
    }

    const linkGo = (num) => {
        setActive(num)
        enableScrolling()
    }

    useEffect(() => {
        enableScrolling()
    }, []);


    return (
        <div className={addClass}>
            <div className='container'>
                <a href='/#' className="logo">
                    <img src={logo} alt="" />
                </a>

                <div className="links" style={{ transform: nav && 'translateX(0%)' }}>
                    <div className="times" onClick={enableScrolling}>
                        <div className="line_1"></div>
                        <div className="line_2"></div>
                    </div>
                    <ul>
                        <li><a href="#about" onClick={() => linkGo(1)} style={{ border: active === 1 && '2px dashed #64ffda' }}> <span>01.</span> About</a></li>
                        <li><a href="#experience" onClick={() => linkGo(2)} style={{ border: active === 2 && '2px dashed #64ffda' }}> <span>02.</span> Experience</a></li>
                        <li><a href="#work" onClick={() => linkGo(3)} style={{ border: active === 3 && '2px dashed #64ffda' }}> <span>03.</span> Work</a></li>
                        <li><a href="#contact" onClick={() => linkGo(4)} style={{ border: active === 4 && '2px dashed #64ffda' }}> <span>04.</span> Contact</a></li>
                    </ul>

                    <a className='btn' target='_blank' rel="noreferrer" href={Resume}>Resume</a>

                    {/* <div className='enter'>
                        <img src={enter} alt="" />
                    </div> */}
                </div>

                <div className="burger" onClick={disableScrolling}>
                    <div className="line line-1"></div>
                    <div className="line line-2"></div>
                    <div className="line line-3"></div>
                </div>

            </div>
        </div>
    )
}

export default Navbar
