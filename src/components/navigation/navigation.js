import React, {Component} from "react";
import logo from "../../assets/img/A.png";
import { Spring } from "react-spring/renderprops";

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleMenu: false,
            prevScrollPos: 0,
            isVisible: true
        }
    }

    handleToggle = () => {
        this.setState(prevState => ({
            toggleMenu: !this.state.toggleMenu
        }));
    }

    handleEnterKey = (e) => {
        if(e.keyCode === 13) {
            this.setState(prevState => ({
                toggleMenu: !this.state.toggleMenu
            }));
        }
    }

    scrollShow = () => {
        const { prevScrollPos } = this.state;

        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollPos > currentScrollPos;
      
        this.setState({
          prevScrollPos: currentScrollPos,
          isVisible: visible
        });
    }

    componentDidMount() {
        window.addEventListener("scroll", this.scrollShow);
        this.setState({
            prevScrollPos: window.pageYOffset,
          });
    }

    UNSAFE_componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollShow);
    }

    render() {
        return (
            <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}>
                {props => 
                    <div style={props}>
                        <nav className={`navbar main-nav ${this.state.isVisible ? '': 'hide-nav'}`}>
                            <div className="navbar-brand">
                                <a href="/">
                                    <div className="logo-container">
                                        <img src={logo} alt="logo"/>
                                    </div>
                                </a>

                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                                <a role="button" tabIndex="0" className={`navbar-burger burger ${this.state.isNavToggled ? 'is-active' : ''}`} onClick={this.handleToggle} onKeyDown={this.handleEnterKey} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                                </a>
                            </div>

                            <div id="navbarBasicExample" className={`navbar-menu ${this.state.toggleMenu ? 'is-active' : ''}`}>
                                <div className="navbar-end nav-custom">
                                    <a href="#home" className="navbar-item hvr-underline-from-left">
                                        Home
                                    </a>
                                    <a href="#projects" className="navbar-item hvr-underline-from-left">
                                        Projects
                                    </a>
                                    <a href="#about" className="navbar-item hvr-underline-from-left">
                                        About
                                    </a>
                                    <a href="#contact" className="navbar-item hvr-underline-from-left">
                                        Contact
                                    </a>
                                </div>
                            </div>
                        </nav>
                    </div>}
            </Spring>
        )
    }
}

export default Navigation;