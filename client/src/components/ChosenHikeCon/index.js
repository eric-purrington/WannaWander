import React from "react";
import Rating from "react-rating";
import "./style.css";

function ChosenHikeCon(props) {
    const {name, bigimg, rating, summary, length, gain, distance, location, ratingRating, longitude, latitude} = props.info;

    return (
        <div className="uk-container-expand chosenHikeCon uk-text-center">
            <h1 className="chosenHikeName">{name}</h1>
            <h3 className="chosenHikeLocation">{location}</h3>
            <p>{summary}</p>
            <img className="chosenHikeImg" src={bigimg} alt={name} />
            <div className="hikeInfoGrid uk-grid uk-child-width-1-3" uk-grid="true">
                <div className="uk-first-column">
                    <h4 className="hikeInfoHead"><i class="fas fa-sign"></i> Length</h4>
                    <p>{length} miles, roundtrip</p>
                </div>
                <div>
                    <h4 className="hikeInfoHead">Rating</h4>
                    <p><Rating
                            initialRating={rating}
                            readonly
                            emptySymbol={<i className="badStar fas fa-star"></i>}
                            fullSymbol={<i className="goodStar fas fa-star"></i>}
                        /> ({ratingRating} votes)</p>
                </div>
                <div>
                    <h4 className="hikeInfoHead"><i class="fas fa-mountain"></i> Elevation Gain</h4>
                    <p>{gain} ft.</p>
                </div>
            </div>
        </div>
    )
}

export default ChosenHikeCon;