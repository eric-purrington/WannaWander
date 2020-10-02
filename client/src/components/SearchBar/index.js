import React from "react";
import "./style.css";

function SearchBar(props) {
    return (
        <div className="uk-container searchBar">
            <form onSubmit={props.onSearch}>
                <select className="uk-select">
                    <option>Quality</option>
                    <option>Distance</option>
                    <option>Length</option>
                </select>

                <select className="uk-select">
                    <option>No minimum</option>
                    <option>At least 1 <span uk-icon="icon: star; ratio: 1"></span>s</option>
                    <option>At least 2 <span uk-icon="icon: star; ratio: 1"></span>s</option>
                    <option>At least 3 <span uk-icon="icon: star; ratio: 1"></span>s</option>
                    <option>At least 4 <span uk-icon="icon: star; ratio: 1"></span>s</option>
                </select>

                <label className="uk-form-label" for="lengthRange">Length Range</label>
                <span>0 mi.</span>
                <input className="uk-range" id="lengthRange" type="range" value="0" min="0" max="100" step="1" />
                <span>100+ mi.</span>

                <label className="uk-form-label" for="gainRange">Elevation Gain</label>
                <span>0 mi.</span>
                <input className="uk-range" id="gainRange" type="range" value="3000" min="0" max="5000" step="100" />
                <span>5000+ mi.</span>

                <label className="uk-form-label" for="distanceRange">Distance from you</label>
                <span>0 mi.</span>
                <input className="uk-range" id="distanceRange" type="range" value="30" min="0" max="200" step="100" />
                <span>200+ mi.</span>

                <button className="uk-button uk-button-default"><span uk-icon="icon: search; ratio: 1"></span></button>
            </form>
        </div>
    )
}

export default SearchBar;