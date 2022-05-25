import React, { useState } from "react";
import './experience.scss'

const Experience = ({companyData}) => {
    const [active, setActive] = useState(1);

    return (
        <div className="experience" id='experience'>
            <div className="container">
                <h2>
                    <span>02.</span>
                    Where I’ve Worked
                </h2>
                <div className="wrapper-section">
                    <div className="left-section">
                        <ul>
                            {
                                companyData.map(({ id, role }) => {
                                    return (
                                        <li key={id}>
                                            <span
                                                onClick={() => setActive(id)}
                                                className={(active === id)? 'active': ''}
                                            >
                                                {role}
                                            </span>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <div className="right-section">
                        {
                            companyData.map(({ id, role, link, title, date, descr }) => {
                                return (
                                    active === id &&
                                    <div key={id} className='card'>
                                        <h4>{role} <span>@</span> <a href={link}> {title}</a></h4>
                                        <h5>{date}</h5>
                                        <p>{descr}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;