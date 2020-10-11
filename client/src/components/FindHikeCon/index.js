import React from "react";
import "./style.css";

function FindHikeCon(props) {
    return (
        <div className="uk-container findHikeCon">
            <h1 className="uk-text-center">Find your next adventure</h1>
            {/* <div class="uk-grid-small uk-grid uk-child-width-1-2@m" uk-grid="true"> */}
                {props.children[0]}
                <div className="uk-grid-large uk-grid uk-child-width-1-3@l">
                    {props.children.slice(1)}
                </div>
            {/* </div> */}
            {/* {props.children[0]}
            <div class="uk-grid-large uk-grid uk-child-width-1-3@m" uk-grid="true">
                {props.children.slice(1)}
            </div> */}
        </div>
    )
}

export default FindHikeCon;