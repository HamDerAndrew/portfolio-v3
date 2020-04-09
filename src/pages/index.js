import React from "react"
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import "./bulma-styles.scss";

import Github from "../assets/svg/github-icon.svg";
import Linkedin from "../assets/svg/linkedin-icon.svg";
import Twitter from "../assets/svg/twitter-icon.svg";
import ScrollArrow from "../assets/svg/arrow-icon.svg"

import Navigation from "../components/navigation/navigation";
import SEO from "../components/seo/seo";
import Seperator from "../components/seperator/seperator";
import Project from "../components/card/card";

export default ({ data }) => {
    return(
        <div>
            <SEO 
                title={data.site.siteMetadata.title}
                description={data.site.siteMetadata.description}
                twitterUrl={data.site.siteMetadata.twitterUrl}
            />
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
                                <ScrollArrow />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Seperator />

            <section id="projects" className="wrapper ptb">
                <div className="container has-text-centered">
                    <h2 className="is-uppercase has-text-weight-bold is-size-1">Check out what<br /> I have build</h2>
                    <h3 className="subtitle has-text-weight-bold is-size-4">The projects range from  <br /> websites to native apps.</h3>
                </div>
                {/* Projects Start */}
                <div className="card-container">
                    
                        {data.allMarkdownRemark.edges.map(({ node }) => (
                        <div className="project-card">
                            <Project 
                                keyId={node.id}
                                cardTitle={node.frontmatter.title}
                                description={node.excerpt}
                                gitUrl={node.frontmatter.giturl}
                                liveUrl={node.frontmatter.liveurl}
                            />
                        </div>
                        ))}

                </div>
            </section>

            <Seperator />

            <section id="about" className="wrapper ptb">
                <div className="container has-text-centered pb">
                    <h2 className="is-uppercase has-text-weight-bold is-size-1">About me</h2>
                </div>
                <div className="leyline-box is-hidden-mobile">
                    <div className="leyline long"></div>
                    <div className="leyline short"></div>
                </div>
                <div className="columns about-container">
                    <div className="column">
                        <p className="is-size-4">Aside from being interested in technology in general, I hold a bachelor degree in Webdevelopment from UCL Odense in Denmark. I have worked with development of websites and native apps for 2 years. I have worked on projects where I was the only developer and also on projects as part of a team.
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
                                <p className="is-size-4 skill-text">Gatsby</p>
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

            <section id="contact" className="wrapper ptb">
                <div className="container has-text-centered">
                    <h2 className="is-uppercase has-text-weight-bold is-size-1">Want to work <br /> with me?</h2>
                    <p className="is-size-4">Feel free to reach out or <br /> just have a look at my <br /> social media:</p>
                </div>
                <div className="some-box has-text-centered">
                        <a className="some-icon" href="https://www.linkedin.com/in/sondergaardandre/">
                            <Linkedin />
                        </a>
                        <a className="some-icon" href="https://.twitter.com/hamderandrew">
                            <Twitter />
                        </a>
                        <a className="some-icon" href="https://twitter.com/hamderandrew">
                            <Github />
                        </a>
                </div>
                <div className="container pt has-text-centered">
                    <p className="is-size-4">Or contact me on my email:</p>
                    <p className="is-size-4 has-text-weight-bold">andrewsondergaard@gmail.com</p>
                </div>
            </section>
        </div> 
    )
}

export const query = graphql`
query {
    allMarkdownRemark {
        edges {
          node {
            excerpt
            frontmatter {
              title
              description
              giturl
              liveurl
            }
            id
          }
        }
    }
    site {
        siteMetadata {
          title
          description
          twitterUsername
        }
    }
}
`
