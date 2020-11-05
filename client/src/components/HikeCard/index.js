import React from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import "./style.css";

function HikeCard(props) {
    const linkObj = {
        pathname: `/hikeme/${props.id}`,
        hikeProps: {
            name: `${props.name}`,
            bigimg: `${props.bigimg}`,
            rating: `${props.rating}`,
            ratingRating: `${props.ratingRating}`,
            summary: `${props.summary}`,
            length: `${props.length}`,
            gain: `${props.gain}`,
            distance: `${props.distance}`,
            longitude: `${props.longitude}`,
            latitude: `${props.latitude}`,
            location: `${props.location}`
        }
    }
    return (
        <div className="uk-width-1-1 hikeCard uk-container-expand">
            <hr/>
            <h2 className="hikeName uk-text-center"><Link className="hikeName" to={linkObj}>{props.name}</Link></h2>
            <h3 className="hikeLocation uk-text-center">{props.location}</h3>
            <div className="uk-grid-large uk-grid uk-child-width-1-2" uk-grid="true">
                <div className="uk-first-column">
                    {props.lilimg ? <Link to={linkObj}><img className="hikeImg" src={props.lilimg} alt={props.name} /></Link> : <Link to={linkObj}><img className="hikeImg" src="https://via.placeholder.com/300/1e6262/b4f1f1?text=Image+Not+Found" alt={props.name} /></Link>}
                </div>
                <div className="hikeInfo">
                    <p className="hikeRatingDifficulty">Rating:&nbsp;  
                        <Rating
                            initialRating={props.rating}
                            readonly
                            emptySymbol={<i className="badStar fas fa-star"></i>}
                            fullSymbol={<i className="goodStar fas fa-star"></i>}
                        /> ({props.ratingRating} votes)</p>
                    <p className="hikeDistance">Distance: ~ {props.distance} mi.</p>
                    <p className="hikeLength">Length: {props.length} mi.</p>
                    <p className="hikeGain">Gain: {props.gain} ft.</p>
                </div>
            </div>
        </div>
    )
}

export default HikeCard;