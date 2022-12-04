import React, { useState } from "react";
import "./portfolio.scss";

const Portfolio = ({ data }) => {
    const [dnone, setDnone] = useState(6);
    const [btnShow, setBtnShow] = useState(false);

    const btnLess = () => {
        setBtnShow(false);
        setDnone(6);
    };

    const btnMore = () => {
        setBtnShow(true);
        setDnone(data.length + 1);
    };

    return (
        <div className="portfolio experience">
            <div className="container">
                <h1>Other Projects</h1>
                <div className="archive-wrap">
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/shokh001?tab=repositories"
                        className="archive"
                    >
                        view the archive
                    </a>
                </div>

                <div className="card-wrapper">
                    {data?.map(
                        ({
                            id,
                            title,
                            external_link,
                            link,
                            descr,
                            _id,
                            technology
                        }) => {
                            return (
                                <div className={dnone >= id ? "card" : "card dnone"} key={_id}>
                                    <div className="links">
                                        <i className="far fa-folder"></i>
                                        <div className="github">
                                            <a target="_blank" rel="noreferrer" href={link}>
                                                <i className="fab fa-github"></i>
                                            </a>
                                            {external_link && (
                                                <a
                                                    href={external_link}
                                                    rel="noreferrer"
                                                    target="_blank"
                                                    className="external_link"
                                                >
                                                    <i className="fas fa-external-link-alt"></i>
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    <h3>{title}</h3>

                                    <p>{descr}</p>

                                    <ul>
                                        {
                                            technology.map(({ technology}, i) => <li key={i}>{technology}</li>)
                                        }
                                    </ul>
                                </div>
                            );
                        }
                    )}
                </div>

                <button
                    type="button"
                    className="btn"
                    style={{ display: btnShow && "none" }}
                    onClick={btnMore}
                >
                    Show more
                </button>
                <button
                    type="button"
                    className="btn"
                    style={{ display: !btnShow && "none" }}
                    onClick={btnLess}
                >
                    Show less
                </button>
            </div>
        </div>
    );
};

export default Portfolio;
