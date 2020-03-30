import React from "react";
import logo from "../../assets/img/A.png";

export default () => (
    <nav id="main-nav" className="navbar">
        <div className="navbar-brand">
            <a href="/">
                <img src={logo} alt="logo"/>
            </a>

            {/*mobile nav*/}
            <a role="button" className="navbar-bruger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            <div className="navbar-end">
                <a href="#home" class="navbar-item">
                    Home
                </a>
                <a href="#projects" id="projects" className="navbar-item">
                    Projects
                </a>
                <a href="#about" id="about" className="navbar-item">
                    About
                </a>
                <a href="#contact" id="contact" className="navbar-item">
                    Contact
                </a>
            </div>
        </div>
        
    </nav>
)