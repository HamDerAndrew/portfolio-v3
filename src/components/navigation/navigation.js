import React, {Component} from "react";
import logo from "../../assets/img/A.png";

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleMenu: false
        }
    }

    handleToggle = () => {
        this.setState(prevState => ({
            toggleMenu: !this.state.toggleMenu
        }));
    }

    render() {
        return (
        <nav id="main-nav" className="navbar">
            <div className="navbar-brand">
                <a href="/">
                    <img src={logo} alt="logo"/>
                </a>

                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                <a role="button" className={`navbar-burger burger ${this.state.isNavToggled ? 'is-active' : ''}`} onClick={this.handleToggle} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className={`navbar-menu ${this.state.toggleMenu ? 'is-active' : ''}`}>
                <div className="navbar-end">
                    <a href="#home" className="navbar-item hvr-underline-from-left">
                        Home
                    </a>
                    <a href="#projects" id="projects" className="navbar-item hvr-underline-from-left">
                        Projects
                    </a>
                    <a href="#about" id="about" className="navbar-item hvr-underline-from-left">
                        About
                    </a>
                    <a href="#contact" id="contact" className="navbar-item hvr-underline-from-left">
                        Contact
                    </a>
                </div>
            </div>
        
        </nav>

        
        )
    }
}

export default Navigation;