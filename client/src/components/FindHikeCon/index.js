import React from "react";
import "./style.css";

function FindHikeCon(props) {
    return (
        <div className="uk-container-expand findHikeCon">
            <h1 className="uk-text-center">Find your next adventure</h1>
            {/* <p className="uk-text-center">We respectfully acknowledge the lands we are visiting are the homelands of Indigenous tribes of the Pacific Northwest, some of whom have reserved treaty rights on these lands. Tribes continue to rely on and share in the management of these lands today. Please tread gently and treat these places with respect.</p> */}
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