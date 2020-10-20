import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function HikeCard(props) {
    const linkObj = {
        pathname: `/hikeme/${props.id}`,
        hikeProps: {
            name: `${props.name}`,
            img: `${props.img}`,
            rating: `${props.rating}`,
            summary: `${props.summary}`,
            length: `${props.length}`,
            gain: `${props.gain}`,
            longitude: `${props.longitude}`,
            latitude: `${props.latitude}`,
            location: `${props.location}`
        }
    }
    return (
        <div className="uk-text-center hikeCard">
            <h2 className="hikeName"><Link className="hikeName" to={linkObj}>{props.name}</Link></h2>
            <Link to={linkObj}><img className="hikeImg" src={props.img} alt={props.name} /></Link>
            <h3 className="hikeLocation">{props.location}</h3>
            <p className="hikeRatingDifficulty">Rating: {props.rating} stars</p>
            <p className="hikeLengthGain">Length: {props.length} mi. Gain: {props.gain}'</p>
            <hr/>
        </div>
    )
}

export default HikeCard;