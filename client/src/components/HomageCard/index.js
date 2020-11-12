import React from "react";
import "./style.css";

function HomageCard(props) {
    return (
        <div className="homageCard">
            <p>{props.info.Name} territory: Learn more <a className="homageLink" href={props.info.description} target="blank">here</a></p>
        </div>
    )
}

export default HomageCard;