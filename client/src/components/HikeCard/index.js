import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function HikeCard(props) {
    return (
        <div className="uk-card uk-text-center uk-card-default uk-card-body uk-first-column hikeCard">
            <h2 className="hikeName"><Link to={`/hikeme/${props.id}`}>{props.name}</Link></h2>
            <div className="uk-inline uk-transition-toggle">
                <Link to={`/hikeme/${props.id}`}><img className="hikeImg" src={props.img} alt={props.name} /></Link>
                <div className="uk-overlay uk-transition-fade uk-overlay-primary uk-position-bottom">
                    <p className="hikeRatingDifficulty">Rating: {props.rating} stars</p>
                </div>
            </div>
            <p className="hikeSummary">{props.summary}</p>
            <p className="hikeLengthGain">Length: {props.length} mi. Gain: {props.gain}'</p>
        </div>
    )
}

export default HikeCard;