import React from "react";
import "./style.css";

function SearchBar(props) {
    return (
        <div className="uk-container uk-width-1-4 searchBar">
            <form>
                <select className="uk-select">
                    <option>Quality</option>
                    <option>Distance</option>
                </select>

                <label className="uk-form-label" for="lengthRange">Length</label>
                <input className="uk-range" id="lengthRange" type="range" value="30" min="0" max="200" step="1" />
            </form>
            <p>rating</p>
            <p>difficulty</p>
            <p>distance from user</p>
            <p></p>
        </div>
    )
}

export default SearchBar;