import React, {Component} from "react";
import logo from "../../assets/img/A.png";

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleMenu: false,
            prevScrollPos: window.pageYOffset,
            isVisible: true
        }
    }

    handleToggle = () => {
        this.setState(prevState => ({
            toggleMenu: !this.state.toggleMenu
        }));
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
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollShow);
    }

    render() {

        return (
        <nav className={`navbar main-nav ${this.state.isVisible ? '': 'hide-nav'}`}>
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
        )
    }
}

export default Navigation;