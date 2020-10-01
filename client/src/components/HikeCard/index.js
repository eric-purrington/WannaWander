import React from "react";
import "./style.css";

function HikeCard(props) {
    return (
        <div className="uk-card uk-text-center uk-card-default uk-card-body uk-first-column hikeCard">
            <h2 className="hikeName">{props.name}</h2>
            <div className="uk-inline uk-transition-toggle">
                <img className="hikeImg" src={props.img} alt={props.name} />
                <div className="uk-overlay uk-transition-fade uk-overlay-primary uk-position-bottom">
                    <p className="hikeRatingDifficulty">Rating: {props.rating} stars Difficulty: {props.difficulty}</p>
                </div>
            </div>
            <p className="hikeSummary">{props.summary}</p>
            <p className="hikeLengthGain">Length: {props.length} mi. Gain: {props.gain}'</p>
        </div>
    )
}

export default HikeCard;