import React, { Component } from "react"
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import "./bulma-styles.scss";
import { Spring } from "react-spring/renderprops"

import Github from "../assets/svg/github-icon.svg";
import Linkedin from "../assets/svg/linkedin-icon.svg";
import Twitter from "../assets/svg/twitter-icon.svg";

import Loading from "../components/loading/loading";
import Navigation from "../components/navigation/navigation";
import SEO from "../components/seo/seo";
import ScrollArrow from "../components/scrollIcon/scrollIcon";
import Seperator from "../components/seperator/seperator";
import Project from "../components/card/card";

export default class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            loadDuration: 2400
        }
    }

    componentDidMount() {
        setTimeout( () => {
            this.setState({isLoading: false})
        }, this.state.loadDuration)
       
    }

    render() {
        const { data } = this.props;
        
        if(this.state.isLoading) {

            return (
            <div>
                <SEO 
                    title={data.site.siteMetadata.title}
                    description={data.site.siteMetadata.description}
                    twitterUser={data.site.siteMetadata.twitterUser}
                />
                <Loading />
            </div>
            )
        }

        return(
            <div>
            <SEO 
                title={data.site.siteMetadata.title}
                description={data.site.siteMetadata.description}
                twitterUser={data.site.siteMetadata.twitterUser}
            />
            <Helmet>
                <link href="https://fonts.googleapis.com/css2?family=Archivo+Narrow:wght@700&family=Yanone+Kaffeesatz:wght@400;500;600;700&display=swap" rel="stylesheet" />
                <script src="https://kit.fontawesome.com/83763123a9.js" crossorigin="anonymous"></script>
            </Helmet>
            <Navigation />
            <section id="home" className="hero is-fullheight-with-navbar">
                <div className="hero-body wrapper">
                    <div className="container has-text-centered	">
                        <Spring
                            from={{ opacity: 0 }}
                            to={{  opacity: 1 }}
                            config={{duration: 1000}}
                            >
                            {props => 
                                <div style={props}>
                                    <h2 className="is-uppercase has-text-weight-bold is-size-1">Hello there! <span role="image">👋</span> </h2> 
                                    <h3 className="subtitle has-text-weight-bold is-size-4">I'm André Larsen. Webdeveloper out of Denmark.</h3>
                                    <p>
                        Currently I am spending my time building cool tools in 2nd Level Support @Umbraco HQ + resolving tickets for Umbraco CMS and Umbraco Cloud.
                    </p>
                                </div>}
                        </Spring>
                        <div className="arrow-container">
                            <ScrollArrow />
                        </div>
                    </div>
                </div>
            </section>

            <Seperator />

            <section id="projects" className="wrapper ptb">
                <div className="container has-text-centered">
                    <h2 className="is-uppercase has-text-weight-bold is-size-1">Check out what<br /> I have built</h2>
                </div>
                {/* Projects Start */}
                <h2 className="under-construction">Under construction <span role="image">🔨</span> </h2>
                <div className="card-container under-construction-hider">
                    <p>
                        Currently I am spending my time building cool tools in 2nd Level Support @Umbraco HQ + resolving tickets for Umbraco CMS and Umbraco Cloud.
                    </p>
                    <p>Feel free to checkout some of the cool sideprojects I've built:</p>
                    <div className="is-flex is-justify-content-space-between">
                    
                        {data.allMarkdownRemark.edges.map(({ node }) => (
                            
                        <div class="card m-1" key={node.id}>
                            <div class="has-background-link p-4">
                            </div>
                            <div class="card-content">
                                <div class="media">
                                    <div class="media-content">
                                        <p class="title is-4">{node.frontmatter.title}</p>
                                        <div className="tags">
                                            <span className="tag">Nodejs</span>
                                            <span className="tag">Vanilla js</span>
                                            <span className="tag">CSS</span>
                                            <span className="tag">HTML5</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="content">
                                {node.excerpt}
                                <ul>
                                    <li>
                                        <a href={node.frontmatter.giturl}>GitHub</a> 
                                    </li>
                                    <li>
                                        <a href={node.frontmatter.liveurl}>Live</a>
                                    </li>
                                </ul>
                                </div>
                            </div>
                                                      {/* <Project 
                                keyId={node.id}
                                cardTitle={node.frontmatter.title}
                                description={node.excerpt}
                                gitUrl={node.frontmatter.giturl}
                                liveUrl={node.frontmatter.liveurl}
                            /> */}
                        </div>
                        ))}
                        </div>
                        <div className="container has-text-centered">
                            <h3 className="subtitle has-text-weight-bold is-size-4">Have a look here or  <br /> 
                            check my <a href="https://github.com/hamderandrew" className="header-link" target="_blank" rel="noopener noreferrer">Github</a> for more.</h3>
                        </div>
                </div>
                <div class="card custom-card under-construction-hider">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-left">
                                <figure class="image is-48x48">
                                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                                </figure>
                            </div>
                            <div class="media-content">
                                <p class="title is-4">André Larsen</p>
                                <p class="subtitle is-6">@HamDerAndrew</p>
                            </div>
                        </div>
                    </div>
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
                        <p className="is-size-4">I hold a bachelor degree in Webdevelopment and an AP degree in Multimedia Design And Communication, both from UCL Odense in Denmark. 
                        I have worked with development of websites and native apps for 2 years. I have worked on projects where I was the only developer and also on projects as part of a team.
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
                                <p className="is-size-4 skill-text">Lit</p>
                            </div>
                            <div className="tech-box has-text-centered">
                                <p className="is-size-4 skill-text">React</p>
                            </div>
                            <div className="tech-box has-text-centered">
                                <p className="is-size-4 skill-text">Umbraco CMS</p>
                            </div>
                            <div className="tech-box has-text-centered">
                                <p className="is-size-4 skill-text">Azure</p>
                            </div>
                            <div className="tech-box has-text-centered">
                                <p className="is-size-4 skill-text">Nodejs</p>
                            </div>
                            <div className="tech-box has-text-centered">
                                <p className="is-size-4 skill-text">MongoDB</p>
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
                    <a className="some-icon" href="https://twitter.com/hamderandrew">
                        <Twitter />
                    </a>
                    <a className="some-icon" href="https://github.com/hamderandrew">
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
}


export const query = graphql`
query {
    allMarkdownRemark(limit: 3) {
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
