import { PromiseProvider } from "mongoose";
import React from "react";
import "./style.css";

function FindHikeCon(props) {
    return (
        <div className="uk-container findHikeCon">
            <h1>Find a trail to wander</h1>
            <div class="uk-child-width-expand@s" uk-grid="true">
                <div>
                    {props.children[0]}
                </div>
                <div class="uk-child-width-expand@s" uk-grid="true">
                    {props.children.slice(1)}
                </div>
            </div>
        </div>
    )
}

export default FindHikeCon;