import React from "react";
import InputRange from 'react-input-range';
import "react-input-range/lib/css/index.css";
import "./style.css";

function SearchBar(props) {
    return (
        <div className="uk-container uk-first-column searchBar uk-width-1-3@m uk-width-1-1@s">
            <form className="uk-form" onSubmit={props.onSearch}>
                
                    <h3 className="uk-text-center searchHead">Search Hikes</h3>


                    <div className="uk-first-column locationInput">
                        <h4 className="uk-text-center inputHead">Your Zip Code</h4>
                        <input onChange={props.onZipChange} className="uk-input" type="text" placeholder="80231"/>
                    </div>

                    <div className="lengthInputRange">
                        <h4 className="uk-text-center inputHead">Length</h4>
                        <InputRange
                            formatLabel={value => `${value} mi`}
                            maxValue={50}
                            minValue={0}
                            value={props.lengthValue} 
                            onChange={props.onLengthChange} />
                    </div>

                    <div className="gainInputRange">
                        <h4 className="uk-text-center inputHead">Elevation Gain</h4>
                        <InputRange
                            formatLabel={value => `${value} ft`}
                            maxValue={5000}
                            minValue={0}
                            step={100}
                            value={props.gainValue} 
                            onChange={props.onGainChange} />
                    </div>

                    <div className="distanceInputRange">
                        <h4 className="uk-text-center inputHead">Distance from you</h4>
                        <InputRange
                            formatLabel={value => `${value} mi`}
                            maxValue={200}
                            step={5}
                            value={props.distanceValue} 
                            onChange={props.onDistanceChange} />
                    </div>

                    <div>
                        <h4 className="uk-text-center inputHead">Minimum Rating</h4>
                        <select className="uk-select" name="ratingMin" onChange={props.onStarChange} id="ratingMin">
                            <option value="0">No minimum</option>
                            <option value="1">At least 1 star</option>
                            <option value="2">At least 2 stars</option>
                            <option value="3">At least 3 stars</option>
                            <option value="4">At least 4 stars</option>
                        </select>
                    </div>

                    <div>
                        <h4 className="uk-text-center inputHead"># of Results</h4>
                        <select className="uk-select" name="maxResults" onChange={props.onResultChange} id="maxResults">
                            <option value="50">50</option>
                            <option value="100">100</option>
                            <option value="250">250</option>
                            <option value="500">500</option>
                        </select>
                    </div>

                    <div className="uk-first-column">
                        <h4 className="uk-text-center inputHead">Sort By</h4>
                        <select className="uk-select" name="sortby" onChange={props.onSortChange} id="sortby">
                            <option value="Quality">Quality</option>
                            <option value="Distance">Distance</option>
                            <option value="Length">Length</option>
                        </select>
                    </div>

                    <div>
                        <button className="uk-align-center uk-button uk-button-default searchBtn"><span uk-icon="icon: search; ratio: 1"></span></button>
                    </div>

            </form>
        </div>
    )
}

export default SearchBar;