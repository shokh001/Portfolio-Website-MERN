import me from '../../assets/images/me.jpg'
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
                                    .slice(0, 4)
                                    .map((value) => <div key={value.id} className="technology">{value.technology}</div>)
                            }
                        </div>
                        <div className='list'>
                            {
                                aboutData[0]?.technologies
                                    .slice(4)
                                    .map((value) => <div key={value.id} className="technology">{value.technology}</div>)
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
