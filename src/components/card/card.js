import React from "react";

import Github from "../../assets/svg/github-icon.svg";
import Live from "../../assets/svg/live-icon.svg";
import PlaceholderImg from "../../assets/img/placeholder-project.jpg";

export default (props) => (
<div className="project-container">
    <div className="image-container">
        <img src={PlaceholderImg} alt="project" className="image custom-img" />
    </div>
    <div className="text-container">
        <p className="project-text is-size-5">{props.description}</p>
    </div>
    <div className="column project-deployment">
        <div className="deploy-location">
            <a href={props.gitUrl} target="_blank">
                <Github />
            </a>
            <a href={props.liveUrl} target="_blank">
                <Live />
            </a>
        </div>
    </div>
</div>
)