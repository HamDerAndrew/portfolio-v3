import React from "react"
import { Spring } from "react-spring/renderprops"
import ScrollArrow from "../../assets/svg/arrow-icon.svg"

export default function scrollIcon() {
    return (
        <div>
            <Spring
                from={{ transform: `translate(0px, 100px)` }}
                to={{ transform: `translate(0px, 0px)` }}
                >
                {props => <div style={props}>  
                    <a href="#projects">
                        <ScrollArrow />
                    </a>
                </div>}
            </Spring>
        </div>
    )
}
