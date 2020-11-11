import React from "react";
import "./style.css";

function HomeageCard(props) {

    return (
        <div className="homeageCard">
            <p>{props.info.Name} learn more <a href={props.info.description}>here</a></p>
        </div>
    )
}

export default HomeageCard;