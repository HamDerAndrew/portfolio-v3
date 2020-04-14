import React, { Component } from "react";


class Loading extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false
        }
    }

    render() {
        setTimeout(() => {
            this.setState({
                isLoaded: true
            })
            console.log("Timeout 2sec.")
        }, 2000)

        return (
            <div className={`loading has-text-centered`} style={{visibility: `${this.state.isLoaded ? 'hidden' : 'visible'}`, }}>
                <h1 className="title">Loading. . .</h1>
            </div>
        )
    }
}

export default Loading;

