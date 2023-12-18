import React from "react";
import "../../assets/css/home.css";

import bubbles from "../../assets/images/bubble.png";
import background from "../../assets/images/background.png";

export const Home = () => {
    return (
        <div className="main-container">
            <main
                className="main"
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="page-1">
                    <div className="header">
                        {/* <div className="nav container">
                            <div className="logo">
                                <img src={bubbles} alt="" />
                                <h1>
                                    thunder<span>coding</span>
                                </h1>
                            </div>
                            <ul>
                                <li>
                                    <a href="">Home</a>
                                </li>
                                <li>
                                    <a href="">About</a>
                                </li>
                                <li>
                                    <a href="">Contact</a>
                                </li>
                            </ul>
                            <a href="" className="btn">
                                Join us
                            </a>
                        </div> */}
                    </div>

                    <div className="page-1__body container">
                        <h2>Welcome to our</h2>
                        <h1>
                            Thunder's <br />
                            Creative World Tour
                        </h1>
                        <p>
                            Thunder's Creative World Tour agency offers scuba
                            diving tours, it might take travelers to some of the
                            world's best dive spots to explore <br />
                            underwater ecosystems.
                        </p>
                        <a href="" className="btn">
                            Take a Tour
                        </a>
                    </div>

                    <div className="social container">
                        <div>
                            <i className="fa-brands fa-instagram"></i>
                        </div>
                        <div>
                            <i className="fa-brands fa-facebook"></i>
                        </div>
                        <div>
                            <i className="fa-brands fa-twitter"></i>
                        </div>
                        <div>
                            <i className="fa-brands fa-github"></i>
                        </div>
                    </div>

                    <div className="bubble">
                        <img src={bubbles} alt="" />
                        <img src={bubbles} alt="" />
                        <img src={bubbles} alt="" />
                        <img src={bubbles} alt="" />
                        <img src={bubbles} alt="" />
                        <img src={bubbles} alt="" />
                        <img src={bubbles} alt="" />
                        <img src={bubbles} alt="" />
                        <img src={bubbles} alt="" />
                        <img src={bubbles} alt="" />
                    </div>
                </div>
            </main>
        </div>
    );
};
