import React, { Component } from "react";
import { Trail, config } from "react-spring/renderprops";

import SEO from "../seo/seo";


class Loading extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false,
            interval: setInterval(this.startInterval, 1200)
        }
    }

    startInterval = () => {
        this.setState({
            isLoaded: true,
        })
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    render() {
        const elements = [".", ".", "."]

        return (
            <div className="loading has-text-centered">
                <SEO />
                <h1 className="title has-text-light">Loading</h1>
                <p className="loading-dots">
                <Trail
                    items={elements}
                    keys={elements.map((element, index) => index)}
                    from={{ opacity: 0 }}
                    to={{ opacity: 1 }}
                    config={config.slow}
                    reset={this.state.isLoaded}>
                        {element => props => <span style={props} className="title has-text-light">{element}</span>}
                        
                    </Trail>
                </p>
            </div>
        )
    }
}

export default Loading;