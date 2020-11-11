import React, {useEffect, useRef} from "react";
import mapboxgl from 'mapbox-gl';
import "./style.css";

function MapCon(props) {
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API;
    const gMapsURL = "https://www.google.com/maps/dir/?api=1&destination=" + props.latitude + "," + props.longitude + "&travelmode=driving";
    const mapContainerRef = useRef(null);

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [props.longitude, props.latitude],
            zoom: 10,
        });

        new mapboxgl.Marker()
            .setLngLat([props.longitude, props.latitude])
            .setPopup(new mapboxgl.Popup().setHTML(`<p>${props.name}</p>`))
            .addTo(map);
    
        map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
    
        return () => map.remove();
      }, []);

    return (
        <div className="uk-container-expand uk-text-center mapCon">
            <h2>Getting you there</h2>
            <a href={gMapsURL} className="directionsLink" target="blank">Get Directions</a>
            <div className="map-container" ref={mapContainerRef} style={{height: "400px", maxWidth: "600px", margin: "20px auto"}}/>
        </div>
    )
}

export default MapCon;