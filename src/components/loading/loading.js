import React, { Component } from "react";
import { Trail, config } from "react-spring/renderprops";


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
        console.log("logging")
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    render() {
        const elements = [" .", " .", " ."]

        return (
            <div className="loading has-text-centered">
                <h1 className="title has-text-light">Loading
                    <Trail
                    items={elements}
                    keys={element => element.key}
                    from={{ opacity: 0 }}
                    to={{ opacity: 1 }}
                    config={config.slow}
                    reset={this.state.isLoaded}>
                        {element => props => <span key={element.key} style={props} className="title has-text-light">{element}</span>}
                    </Trail>
                </h1>
            </div>
        )
    }
}

export default Loading;