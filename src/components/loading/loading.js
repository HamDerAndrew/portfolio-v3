import React, { Component } from "react";
import { Trail, Spring, config } from "react-spring/renderprops";


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
                <div className="loading-img-container">
                    <Spring
                        from={{ stroke: "transparent", strokeWidth: 0, opacity: 0 }}
                        to={{ stroke: "#fdf8f5;", strokeWidth: 15, opacity: 1 }}>
                        {props => (
                        <svg style={{opacity: props.opacity}} id="svg-logo" data-name="LayerOne" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477.44 479.33">
                            <polygon className="cls-1" points="140.25 478.33 1 338.52 1 140.81 140.25 1 337.19 1 476.44 140.81 476.44 338.52 337.19 478.33 140.25 478.33" />
                            <path stroke={props.stroke} strokeWidth={props.strokeWidth} className="cls-2" d="M348.77,13,487.44,152.22V349.11L348.77,488.33H152.67L14,349.11V152.22L152.67,13h196.1m.83-2H151.84L12,151.39V349.94L151.84,490.33H349.6L489.44,349.94V151.39L349.6,11Z" transform="translate(-12 -11)" />
                            <polygon className="cls-3" points="140 181 182 139 307.5 139.5 349 181 349 307 307 348 306.5 264.5 181.5 264.5 181.5 306.5 140.5 348.5 139.5 222.5 307.5 222.5 307.5 201.5 285.5 180.5 140 181" />
                        </svg>
                        )}
                    </Spring>
                </div>
                <div>
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
            </div>
        )
    }
}

export default Loading;