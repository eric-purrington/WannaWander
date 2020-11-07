import React, {useEffect, useRef} from "react";
import mapboxgl from 'mapbox-gl';
import "./style.css";

function MapCon(props) {
    mapboxgl.accessToken = "";
    const gMapsURL = "https://www.google.com/maps/dir/?api=1&destination=" + props.name + "&travelmode=driving";
    const mapContainerRef = useRef(null);

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-104.9876, 39.7405],
            zoom: 12.5,
        });
    
        map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
    
        return () => map.remove();
      }, []);

    return (
        <div className="uk-container-expand uk-text-center mapCon">
            <h2>Getting you there</h2>
            <a href={gMapsURL} className="directionsLink" target="blank">Get Directions</a>
            <div className="map-container" ref={mapContainerRef} style={{height: "400px"}}/>
        </div>
    )
}

export default MapCon;