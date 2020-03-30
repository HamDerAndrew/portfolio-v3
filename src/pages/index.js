import React from "react"
import "./bulma-styles.scss";
import Arrow from "../assets/svg/Arrow.svg";
import Navigation from '../components/navigation/navigation';

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
        </div> 
    )
}
