import React from "react";
import InputRange from 'react-input-range';
import "react-input-range/lib/css/index.css";
import "./style.css";

function SearchBar(props) {
    return (
        <div className="uk-container searchBar uk-width-1-3@m uk-width-1-1@s">
            <form className="uk-form" onSubmit={props.onSearch}>
                {/* <div class="uk-grid-large uk-grid uk-child-width-1-1@ uk-child-width-1-3@s" uk-grid="true"> */}
                    <h3 className="uk-text-center searchHead">Search Hikes</h3>
                    <div className="uk-first-column lengthInputRange">
                        <h4 className="uk-text-center">Length</h4>
                        <InputRange
                            formatLabel={value => `${value} mi`}
                            maxValue={50}
                            minValue={0}
                            value={props.lengthValue} 
                            onChange={props.onLengthChange} />
                    </div>

                    <div className="gainInputRange">
                        <h4 className="uk-text-center">Elevation Gain</h4>
                        <InputRange
                            formatLabel={value => `${value} ft`}
                            maxValue={5000}
                            minValue={0}
                            value={props.gainValue} 
                            onChange={props.onGainChange} />
                    </div>

                    <div className="distanceInputRange">
                        <h4 className="uk-text-center">Distance from you</h4>
                        <InputRange
                            formatLabel={value => `${value} mi`}
                            maxValue={200}
                            value={props.distanceValue} 
                            onChange={props.onDistanceChange} />
                    </div>

                    <div>
                        <h4 className="uk-text-center">Minimum Rating</h4>
                        <select className="uk-select" name="ratingMin" id="ratingMin">
                            <option value="0">No minimum</option>
                            <option value="1">At least 1 star</option>
                            <option value="2">At least 2 stars</option>
                            <option value="3">At least 3 stars</option>
                            <option value="4">At least 4 stars</option>
                        </select>
                    </div>

                    <div>
                        <h4 className="uk-text-center"># of Results</h4>
                        <select className="uk-select" name="maxResults" id="maxResults">
                            <option value="50">50</option>
                            <option value="100">100</option>
                            <option value="250">250</option>
                            <option value="500">500</option>
                        </select>
                    </div>

                    <div className="uk-first-column">
                        <h4 className="uk-text-center">Sort By</h4>
                        <select className="uk-select" name="sortby" id="sortby">
                            <option value="Quality">Quality</option>
                            <option value="Distance">Distance</option>
                            <option value="Length">Length</option>
                        </select>
                    </div>

                    {/* <div className="uk-first-column">
                        <label className="uk-form-label" for="lengthRange">Length Range</label>
                        <span>0 mi.</span>
                        <input className="uk-range" id="lengthRange" type="range" defaultValue="0" min="0" max="100" step="1" name="length" uk-tooltip={props.lengthValue} onChange={props.onLengthChange}/>
                        <span>100+ mi.</span>
                    </div> */}

                    {/* <div className="">
                        <label className="uk-form-label" for="gainRange">Elevation Gain</label>
                        <span>0 mi.</span>
                        <input className="uk-range" id="gainRange" type="range" defaultValue="3000" min="0" max="5000" step="100" name="gain"/>
                        <span>5000+ mi.</span>
                    </div>
                    
                    <div className="">
                        <label className="uk-form-label" for="distanceRange">Distance from you</label>
                        <span>0 mi.</span>
                        <input className="uk-range" id="distanceRange" type="range" defaultValue="30" min="0" max="200" step="100" name="distance"/>
                        <span>200+ mi.</span>
                    </div> */}

                    <div>
                        <button className="uk-align-center uk-button uk-button-default searchBtn"><span uk-icon="icon: search; ratio: 1"></span></button>
                    </div>
                    
                {/* </div> */}
            </form>
        </div>
    )
}

export default SearchBar;