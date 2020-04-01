import React from "react"
import Helmet from "react-helmet";
import "./bulma-styles.scss";

import Arrow from "../assets/svg/arrow.svg";
import Github from "../assets/svg/github-icon.svg";
import Linkedin from "../assets/svg/linkedin-icon.svg";
import Twitter from "../assets/svg/twitter-icon.svg";

import Navigation from "../components/navigation/navigation";
import Seperator from "../components/seperator/seperator";
import Project from "../components/card/card";

export default () => {
    return(
        <div>
        <Helmet>
            <link href="https://fonts.googleapis.com/css2?family=Archivo+Narrow:wght@700&family=Yanone+Kaffeesatz:wght@400;500;600;700&display=swap" rel="stylesheet" />
        </Helmet>
            <Navigation />
            <section id="home" className="hero is-fullheight-with-navbar">
                <div className="hero-body">
                    <div className="container has-text-centered	">
                        <h2 className="is-uppercase has-text-weight-bold is-size-1">Hi! I'm André. <br /> I code</h2>
                        <h3 className="subtitle has-text-weight-bold is-size-4">Webdeveloper out of Denmark. <br /> I build things for <br /> the web, Android and iOS.</h3>
                        <div className="arrow-container">
                            <a href="#projects">
                                <Arrow />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Seperator />

            <section id="projects" className="wrapper pb">
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

            <section id="about" className="wrapper pb">
                <div className="container has-text-centered pb">
                    <h2 className="is-uppercase has-text-weight-bold is-size-1">About me</h2>
                </div>
                <div className="leyline-box is-hidden-mobile">
                    <div className="leyline long"></div>
                    <div className="leyline short"></div>
                </div>
                <div className="columns about-container">
                    <div className="column">
                        <p className="is-size-4">Aside from being interested in technology in general, I hold a bachelor degree in Webdevelopment from UCL Odense in Denmark and have worked with develppment of websites and native apps for 2 years. I have worked on projects where I was the only developer and also on projects as part of a team.
                        Some of the technologies I have worked with include:
                        </p>
                    </div>
                    <div className="column">
                        <div className="box-container">
                            <div className="tech-box has-text-centered">
                                <p className="is-size-4 skill-text">HTML/CSS</p>
                            </div>
                            <div className="tech-box has-text-centered">
                                <p className="is-size-4 skill-text">JavaScript</p>
                            </div>
                            <div className="tech-box has-text-centered">
                                <p className="is-size-4 skill-text">Vue</p>
                            </div>
                            <div className="tech-box has-text-centered">
                                <p className="is-size-4 skill-text">React Native</p>
                            </div>
                            <div className="tech-box has-text-centered">
                                <p className="is-size-4 skill-text">Swift 5</p>
                            </div>
                            <div className="tech-box has-text-centered">
                                <p className="is-size-4 skill-text">FireBase</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="leyline-box is-hidden-mobile">
                    <div className="leyline short"></div>
                    <div className="leyline long"></div>
                </div>
            </section>

            <Seperator />

            <section id="contact" className="wrapper pb">
                <div className="container has-text-centered">
                    <h2 className="is-uppercase has-text-weight-bold is-size-1">Want to work <br /> with me?</h2>
                    <p className="is-size-4">Feel free to reach out or <br /> just have a look at my <br /> social media:</p>
                </div>
                <div className="columns has-text-centered">
                    <div className="some-icon column">
                        <a>
                            <Linkedin />
                        </a>
                    </div>
                    <div className="some-icon column">
                        <a>
                            <Twitter />
                        </a>
                    </div>
                    <div className="some-icon column">
                        <a>
                            <Github />
                        </a>
                    </div>
                </div>
                <div className="container has-text-centered">
                    <h3 className="">Or contact me on my email:</h3>
                    <p>andrewsondergaard@gmail.com</p>
                </div>
            </section>
        </div> 
    )
}
