import React from "react";

import Github from "../../assets/svg/github-icon.svg";
import Live from "../../assets/svg/live-icon.svg";

export default (props) => (
<div className="project-container">
    <div className="image-container">
        <div className="monitor">
            <p className="project-title">Project title here</p>
        </div>
        <div className="monitor-stand"></div>
    </div>
    <div className="text-container">
        <p className="project-text">{props.description}</p>
    </div>
    <div className="column project-deployment">
        <div className="deploy-location">
            <a href={props.gitUrl} target="_blank" rel="noopener noreferrer">
                <Github />
            </a>
            <a href={props.liveUrl} target="_blank" rel="noopener noreferrer">
                <Live />
            </a>
        </div>
    </div>
</div>
)