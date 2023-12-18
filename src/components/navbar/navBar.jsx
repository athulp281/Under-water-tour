import React from "react";
import { Link } from "react-router-dom";
import "../../../src/App.css";

export const NavBar = () => {
    return (
        <div className="sticky-header">
            <header>
                <nav>
                    <div className="main-container">
                        <div className="nav-left">
                            <div className="logo">
                                <h1>
                                    World<span>Tour</span>
                                </h1>
                            </div>
                        </div>
                        <div className="nav-right">
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="end-nav">
                            <a href="" className="btn">
                                Join us
                            </a>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
};
