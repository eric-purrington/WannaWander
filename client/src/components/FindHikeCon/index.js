import React from "react";
import "./style.css";

function FindHikeCon(props) {
    return (
        <div className="uk-container-expand findHikeCon">
            <h1 className="uk-text-center">Find your next adventure</h1>
            <p className="uk-text-center tread">Please tread gently and treat these places with respect.</p>
            <div className="searchAndResults uk-grid-large uk-grid" uk-grid="true">
                {props.children[0]}
                <div className="uk-width-2-3@m uk-width-1-1@s uk-grid">
                    <h2 className="resultsHeader uk-width-1-1"><span uk-icon="icon: list; ratio: 1.5"></span> Results List</h2>
                    {props.children.slice(1)}
                </div>
            </div>
        </div>
    )
}

export default FindHikeCon;