import { useRef, useEffect, useState } from "react";
import maplibregl from "maplibre-gl";
import { GeocodingControl } from "@maptiler/geocoding-control/react";
import { createMapLibreGlMapController } from "@maptiler/geocoding-control/maplibregl-controller";
import "@maptiler/geocoding-control/style.css";
import "maplibre-gl/dist/maplibre-gl.css";
import "./map.css";

export default function Map({lng,lat,setLng,setLat}) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const marker = useRef(null);
  const [zoom] = useState(18);
  const [API_KEY] = useState("JHQFoyMjXnA3m8N8Ezl3");
  const [mapController, setMapController] = useState();

  useEffect(() => {
    if (map.current) return; // stops map from initializing more than once

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
      center: [lng, lat],
      zoom: zoom,
    });

    map.current.addControl(new maplibregl.NavigationControl(), "top-right");
    setMapController(createMapLibreGlMapController(map.current, maplibregl));
    // Create and add the initial marker at the initial coordinates
    marker.current = new maplibregl.Marker({
      color: "#FF0000",
    })
      .setLngLat([lng, lat])
      .addTo(map.current);

    map.current.on("click", (e) => {
      const { lngLat } = e;
      const newLng = lngLat.lng;
      const newLat = lngLat.lat;

      // Update the marker's position
      marker.current.setLngLat([newLng, newLat]);

      // Update the state with new coordinates
      setLng(newLng);
      setLat(newLat);
    });
    // Create the Geolocate Control and add it to the map
    const geolocateControl = new maplibregl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
    });
    map.current.addControl(geolocateControl);

    // Listen for the geolocate event to update the marker and center of the map
    geolocateControl.on("geolocate", (e) => {
      const { coords } = e;
      const newLng = coords.longitude;
      const newLat = coords.latitude;

      // Update the marker's position
      marker.current.setLngLat([newLng, newLat]);

      // Update the state with new coordinates
      setLng(newLng);
      setLat(newLat);

      // Set the map's center to the new coordinates
      map.current.setCenter([newLng, newLat]);
    });
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
