import React, { useRef, useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';
import { GeocodingControl } from "@maptiler/geocoding-control/react";
import { createMapLibreGlMapController } from "@maptiler/geocoding-control/maplibregl-controller";
import "@maptiler/geocoding-control/style.css";
import 'maplibre-gl/dist/maplibre-gl.css';
import './map.css';
export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(47.990341);
  const [lat] = useState(29.378586);
  const [zoom] = useState(18);
  const [API_KEY] = useState('JHQFoyMjXnA3m8N8Ezl3');
  const [mapController, setMapController] = useState();
  useEffect(() => {
      if (map.current) return; // stops map from intializing more than once
      map.current = new maplibregl.Map({
          container: mapContainer.current,
          style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
          center: [lng, lat],
          zoom: zoom
        });
        map.current.addControl(new maplibregl.NavigationControl(), 'top-right');
        new maplibregl.Marker({color: "#FF0000"})
          .setLngLat([lng,lat])
          .addTo(map.current);
    }, [API_KEY, lng, lat, zoom]);    
  return (
    <div className="map-wrap">
      <div className="geocoding">
        <GeocodingControl apiKey={API_KEY} mapController={mapController} />
      </div>
      <div ref={mapContainer} className="map" />
    </div>
  );
}