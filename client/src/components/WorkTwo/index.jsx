import React from 'react'
import movieApp from '../../assets/images/movieApp.png'
import '../Work/work.scss'
import './workTwo.scss'

const WorkTwo = ({ data }) => {

    const newData = data.filter((value) => value.title === 'The Movies')

    return (
        <div className="work workTwo experience">
            <div className="container">

                <div className="wrapper-project">
                    <a
                        target='_blank'
                        rel="noreferrer"
                        href={newData[0].external_link}
                        className="project-img" style={{ right: '0' }}>
                        <img src={movieApp} alt="" />
                    </a>
                    <div className="project-content" style={{ marginLeft: '0', textAlign: 'left' }}>
                        <div>
                            <h5>Featured Project</h5>
                            <a
                                target='_blank'
                                rel="noreferrer"
                                href='https://movie-website-react-app.netlify.app/'>
                                {newData[0].title}
                            </a>

                            <div className="project-card">
                                {newData[0].descr}
                            </div>
                            <ul style={{ justifyContent: 'flex-start' }}>
                                <li>{newData[0].technology}</li>
                            </ul>

                            <div className="project-link">
                                <a target='_blank' rel="noreferrer" href={newData[0].link}><i className="fab fa-github"></i></a>
                                <a target='_blank' rel="noreferrer" href={newData[0].external_link}><i className="fas fa-external-link-alt"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkTwo
