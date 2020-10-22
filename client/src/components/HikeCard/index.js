import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function HikeCard(props) {
    const linkObj = {
        pathname: `/hikeme/${props.id}`,
        hikeProps: {
            name: `${props.name}`,
            bigimg: `${props.img}`,
            rating: `${props.rating}`,
            summary: `${props.summary}`,
            length: `${props.length}`,
            gain: `${props.gain}`,
            distance: `${props.distance}`,
            location: `${props.location}`
        }
    }
    return (
        <div className="hikeCard">
            <hr/>
            <h2 className="hikeName uk-text-center"><Link className="hikeName" to={linkObj}>{props.name}</Link></h2>
            <h3 className="hikeLocation uk-text-center">{props.location}</h3>
            <div className="uk-grid-large uk-grid uk-child-width-1-2" uk-grid="true">
                <div className="uk-first-column">
                    {props.lilimg ? <Link to={linkObj}><img className="hikeImg" src={props.lilimg} alt={props.name} /></Link> : <Link to={linkObj}><img className="hikeImg" src="https://via.placeholder.com/300/1e6262/b4f1f1?text=Image+Not+Found" alt="image not found" /></Link>}
                </div>
                <div className="hikeInfo">
                    <p className="hikeRatingDifficulty">Rating: {props.rating} stars</p>
                    <p className="hikeDistance">Distance: {props.distance} mi</p>
                    <p className="hikeLengthGain">Length: {props.length} mi. Gain: {props.gain}'</p>
                </div>
            </div>
            {/* <p className="hikeRatingDifficulty">Rating: {props.rating} stars</p>
            <p className="hikeDistance">Distance: {props.distance} mi</p>
            <p className="hikeLengthGain">Length: {props.length} mi. Gain: {props.gain}'</p> */}
        </div>
    )
}

export default HikeCard;