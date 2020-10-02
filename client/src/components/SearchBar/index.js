import React from "react";
import "./style.css";

function SearchBar(props) {
    return (
        <div className="uk-container-expand searchBar">
            <form className="uk-form-horizontal" onSubmit={props.onSearch}>
                <div class="uk-grid-small uk-grid uk-child-width-1-3@m" uk-grid="true">

                    <select className="uk-select uk-first-column" name="sortby">
                        <option value="Quality">Quality</option>
                        <option value="Distance">Distance</option>
                        <option value="Length">Length</option>
                    </select>

                    <select className="uk-select" name="maxResults">
                        <option value="10">10</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                        <option value="250">250</option>
                        <option value="500">500</option>
                    </select>

                    <select className="uk-select" name="ratingMin">
                        <option value="0">No minimum</option>
                        <option value="1">At least 1 star</option>
                        <option value="2">At least 2 stars</option>
                        <option value="3">At least 3 stars</option>
                        <option value="4">At least 4 stars</option>
                    </select>

                    <div className="uk-first-column">
                        <label className="uk-form-label" for="lengthRange">Length Range</label>
                        <span>0 mi.</span>
                        <input className="uk-range" id="lengthRange" type="range" defaultValue="0" min="0" max="100" step="1" name="length" uk-tooltip={props.lengthValue} onChange={props.onLengthChange}/>
                        <span>100+ mi.</span>
                    </div>

                    <div className="">
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
                    </div>

                    <button className="uk-button uk-button-default"><span uk-icon="icon: search; ratio: 1"></span></button>
                </div>
            </form>
        </div>
    )
}

export default SearchBar;