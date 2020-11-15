import React from "react";
import Rating from "react-rating";
import "./style.css";

function ChosenHikeCon(props) {
    const {name, bigimg, rating, summary, length, gain,
        // distance, 
        location, ratingRating, longitude, latitude} = props.info;
    const gMapsURL = "https://www.google.com/maps/dir/?api=1&destination=" + latitude + "," + longitude + "&travelmode=driving";

    return (
        <div className="uk-container-expand chosenHikeCon uk-text-center">
            <h1 className="chosenHikeName">{name}</h1>
            <h3 className="homageHead">This trail falls within...</h3>
            {props.children}
            {bigimg ? <img className="chosenHikeImg" src={bigimg} alt={name} /> : <img className="chosenHikeImg" src="https://via.placeholder.com/500/1e6262/b4f1f1?text=Image+Not+Found" alt={name} />}
            <p>{summary}</p>
            <div className="hikeInfoGrid uk-grid uk-child-width-1-4@s uk-child-width-1-2@xs" uk-grid="true">
                <div className="uk-first-column">
                    <h4 className="hikeInfoHead"><i className="fas fa-map-marker-alt"></i> Location</h4>
                    <p>{location}:</p><a href={gMapsURL} className="directionsLink" target="blank">Get Directions</a>
                </div>
                <div>
                    <h4 className="hikeInfoHead"><i className="fas fa-heart"></i> Rating</h4>
                    <p><Rating
                            initialRating={rating}
                            readonly
                            emptySymbol={<i className="badStar fas fa-star"></i>}
                            fullSymbol={<i className="goodStar fas fa-star"></i>}
                        /> ({ratingRating} vote(s))</p>
                </div>
                <div>
                    <h4 className="hikeInfoHead"><i className="fas fa-sign"></i> Length</h4>
                    <p>{length} miles, roundtrip</p>
                </div>
                <div>
                    <h4 className="hikeInfoHead"><i className="fas fa-mountain"></i> Elevation Gain</h4>
                    <p>{gain} ft.</p>
                </div>
            </div>
        </div>
    )
}

export default ChosenHikeCon;