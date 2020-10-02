import React from "react";
import "./style.css";

function FindHikeCon(props) {
    return (
        <div className="uk-container findHikeCon">
            <h1 className="uk-text-center">Find a trail to wander</h1>
            <div class="uk-grid-large uk-grid uk-child-width-1-3@l" uk-grid="true">
                <div>
                    {props.children[0]}
                </div>
                <div className="uk-grid uk-child-width-1-2@l uk-grid-match" uk-grid="true">
                    {props.children.slice(1)}
                </div>
            </div>
        </div>
    )
}

export default FindHikeCon;