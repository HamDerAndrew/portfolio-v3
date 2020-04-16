import React, { Component } from "react";
import { Trail } from "react-spring/renderprops";


class Loading extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false,
        }
    }
/*     interval = null

    startInterval = () => {
        this.interval = setInterval(() => {
            this.setState({
                isLoaded: true
            })
            console.log("logging")
        }, 1000);
    }

    componentDidMount() {
        this.startInterval()
    }

    componentWillMount() {
        clearInterval();
    } */

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
                    reset={this.isLoaded}>
                        {element => props => <span style={props} className="title has-text-light">{element}</span>}
                    </Trail>
                </h1>
            </div>
        )
    }
}

export default Loading;