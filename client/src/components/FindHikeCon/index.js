import React from "react";
import "./style.css";

function FindHikeCon(props) {
    return (
        <div className="uk-container-expand findHikeCon">
            <h1 className="uk-text-center">Find your next adventure</h1>
            <div className="justify-self-center justify-content-center searchAndResults uk-grid-large uk-grid" uk-grid="true">
                {props.children[0]}
                <div className="uk-width-2-3@m uk-width-1-1@s uk-grid  uk-height-match">
                    {props.children.slice(1)}
                </div>
            </div>
        </div>
    )
}

export default FindHikeCon;