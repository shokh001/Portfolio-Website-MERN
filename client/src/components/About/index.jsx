import './about.scss'

const About = ({ aboutData }) => {

    return (
        <div id='about' className="about">
            <div className="container">
                <div className="left-content">
                    <h2>
                        <span>01.</span>
                        About Me
                    </h2>

                    <p>{aboutData[0]?.descr}</p>

                    <p className='aboutTechnology'>Here are a few technologies I've been working with recently:</p>

                    <div className="list-technology">
                        <div className='list'>
                            {
                                aboutData[0]?.technologies
                                    .slice(0, Math.round(aboutData[0]?.technologies.length / 2))
                                    .map((value, i) => <div key={i} className="technology">{value.technology}</div>)
                            }
                        </div>
                        <div className='list'>
                            {
                                aboutData[0]?.technologies
                                    .slice(Math.round(aboutData[0]?.technologies.length / 2))
                                    .map((value, i) => <div key={i} className="technology">{value.technology}</div>)
                            }
                        </div>
                    </div>
                </div>

                <div className="right-content">
                    <div className="wrapper">
                        <img src={aboutData[0]?.image} alt="me" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
