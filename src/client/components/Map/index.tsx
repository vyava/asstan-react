import React, { useState } from "react";
import MapboxMap, { GeolocateControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const TOKEN = process.env.MAPBOX_TOKEN;
console.log(process.env.MAPBOX_TOKEN)
console.log(process.env)

const MapContainer = () => {

    let [viewport, setViewport] = useState({
        width: "100%",
        height: "100%",
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8,
        mapboxApiAccessToken: TOKEN,
        mapStyle: 'mapbox://styles/mapbox/dark-v10?optimize=true'
    });

    const geolocateStyle = {
        float: 'left',
        margin: '50px',
        padding: '10px'
    };

    const _onViewportChange = (viewport: any) => setViewport({ ...viewport, transitionDuration: 1 })
    return (
        <MapboxMap
            {...viewport}

            onViewportChange={_onViewportChange}
        // onViewportChange={(viewport) => {
        //     const { width, height, latitude, longitude, zoom } = viewport;
        //     // Optionally call `setState` and use the state to update the map.
        // }}
        >
            <GeolocateControl
                style={geolocateStyle}
                positionOptions={{ enableHighAccuracy: true }}
                trackUserLocation={true}
            />
        </MapboxMap>
    )
};

export default MapContainer;