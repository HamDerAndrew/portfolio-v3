import React from "react"
import "./bulma-styles.scss";

import Arrow from "../assets/svg/arrow.svg";

import Navigation from "../components/navigation/navigation";
import Seperator from "../components/seperator/seperator";
import Project from "../components/card/card";

export default () => {
    return(
        <div>
            <Navigation />
            <section id="home" className="hero is-fullheight-with-navbar">
                <div className="hero-body">
                    <div className="container has-text-centered	">
                        <h2 className="is-uppercase has-text-weight-bold is-size-1">Hi! I'm André. <br /> I code</h2>
                        <h3 className="subtitle has-text-weight-bold is-size-4">Webdeveloper out of Denmark. <br /> I build things for <br /> the web, Android and iOS.</h3>
                        <div className="arrow-container">
                            <Arrow />
                        </div>
                    </div>
                </div>
            </section>

            <Seperator />

            <section id="projects" className="wrapper">
                <div className="container has-text-centered">
                    <h2 className="is-uppercase has-text-weight-bold is-size-1">Check out what<br /> I have build</h2>
                    <h3 className="subtitle has-text-weight-bold is-size-4">The projects range from  <br /> websites to native apps.</h3>
                </div>
                {/* Projects Start */}
                <div className="columns is-centered">
                    <div className="column">
                        <Project 
                            description="A project involving the use of different technologies for the front-end and back-end. More about the project comes later." 
                            gitUrl="www.github.com/HamDerAndrew" 
                        />
                    </div>
                    <div className="column">
                        <Project 
                            description="A project involving the use of different technologies for the front-end and back-end. More about the project comes later." 
                            gitUrl="www.github.com/HamDerAndrew" 
                        />
                    </div>
                    <div className="column">
                        <Project 
                            description="A project involving the use of different technologies for the front-end and back-end. More about the project comes later." 
                            gitUrl="www.github.com/HamDerAndrew" 
                        />
                    </div>
                </div>
            </section>

            <Seperator />

            <section id="about" className="wrapper">
                <div className="container has-text-centered">
                    <h2 className="is-uppercase has-text-weight-bold is-size-1">About me</h2>
                </div>
                {/* Projects Start */}
            </section>
        </div> 
    )
}
