import React from "react";
import MapboxMap from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MapContainer = () => {
    return (
        <MapboxMap
            width={400}
            height={400}
            latitude={37.7577}
            longitude={-122.4376}
            zoom={8}
            onViewportChange={(viewport) => {
                const { width, height, latitude, longitude, zoom } = viewport;
                // Optionally call `setState` and use the state to update the map.
            }}
        />
    )
};

export default MapContainer;