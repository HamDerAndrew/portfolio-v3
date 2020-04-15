import React, { Component } from "react";


class Loading extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false,
        }
    }


    render() {

        return (
            <div className={`loading has-text-centered`}>
                <h1 className="title has-text-white">Loading. . .</h1>
            </div>
        )
    }
}

export default Loading;

