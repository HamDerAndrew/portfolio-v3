import React from "react"
import "./bulma-styles.scss";
import Arrow from "../assets/svg/arrow.svg";
import Github from "../assets/svg/github-icon.svg";
import Live from "../assets/svg/live-icon.svg";
import Navigation from '../components/navigation/navigation';
import Seperator from "../components/seperator/seperator";
import PlaceholderImg from "../assets/img/placeholder-project.jpg";

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
                        <div className="project-container">
                            <div className="image-container">
                                <img src={PlaceholderImg} alt="project" className="image custom-img" />
                                
                            </div>
                            <div className="text-container">
                                <p className="project-text is-size-5">Project with some text in regards to how it was build. There will be more text added in the near future I think</p>
                            </div>
                            <div className="column project-deployment">
                                <div className="deploy-location">
                                    <a className="test">
                                    <Github />
                                    </a>
                                    
                                    <Live />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="project-container">
                            <div className="image-container">
                                <img src={PlaceholderImg} alt="project" className="image custom-img" />
                                
                            </div>
                            <div className="text-container">
                                <p className="project-text is-size-5">Project with some text in regards to how it was build.</p>
                            </div>
                            <div className="column project-deployment">
                                <div className="deploy-location">
                                    <Github />
                                    <Live />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="project-container">
                            <div className="image-container">
                                <img src={PlaceholderImg} alt="project" className="image custom-img" />
                                
                            </div>
                            <div className="text-container">
                                <p className="project-text is-size-5">Project with some text in regards to how it was build.</p>
                            </div>
                            <div className="column project-deployment">
                                <div className="deploy-location">
                                    <Github />
                                    <Live />
                                </div>
                            </div>
                        </div>
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
