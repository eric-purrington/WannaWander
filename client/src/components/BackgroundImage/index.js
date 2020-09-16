import { PromiseProvider } from "mongoose";
import React from "react";
import Navbar from "../Navbar";
import "./style.css";

function BackgroundImage() {
    return (
        <div className="hero-image">
            <Navbar />
            <div className="hero-text">
                <h1>Wanna Wander?</h1>
            </div>
        </div>
    )
}

export default BackgroundImage;