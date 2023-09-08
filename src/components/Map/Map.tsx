import React, { useEffect, useRef } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Import the marker icon image
import markerIcon from './location.svg'; // Adjust the path as needed

interface MapProps {
  globalLocation: [number, number] | null;
  onLocationChange: (lat: number, lng: number) => void;
}

interface LocationMarkerProps {
  location: [number, number] | null;
  setLocation: (location: [number, number] | null) => void;
  onLocationChange: (lat: number, lng: number) => void;
}

const LocationMarker: React.FC<LocationMarkerProps> = ({
  location,
  setLocation,
  onLocationChange,
}) => {
  const handleMapClick = (e: any) => {
    const { lat, lng } = e.latlng;
    setLocation([lat, lng]);
    onLocationChange(lat, lng);
  };

  const customIcon = new L.Icon({
    iconUrl: markerIcon, // Use the imported marker icon
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  // Use MapEvents to listen to click events on the map
  useMapEvents({
    click: handleMapClick,
  });

  return location ? (
    <Marker position={location} icon={customIcon}>
      <Popup>You are here</Popup>
    </Marker>
  ) : null;
};

const Map: React.FC<MapProps> = ({ onLocationChange, globalLocation }) => {
  const [location, setLocation] = React.useState<[number, number] | null>(globalLocation);

  // Ref to store the map container
  const mapContainerRef = useRef<typeof MapContainer | null>(null); // Use typeof MapContainer

  // Call invalidateSize after map is mounted to force update
  useEffect(() => {
    if (!navigator || !navigator.geolocation) {
      alert(
        "Location services are not allowed or not supported by your browser."
      );
      return;
    }
    if (!location) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation([position.coords.latitude, position.coords.longitude]);
          onLocationChange(position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          alert("Error getting your location. Please allow location access." + error.message);
        }
      );
    }
    else {
      return 
    }
  }, [navigator.geolocation, location]);

  return (
    location && (
      // @ts-ignore
      <MapContainer ref={mapContainerRef} center={location} zoom={15}>
        <TileLayer
          attribution="&copy; Openstreet map"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker
          location={location}
          setLocation={setLocation}
          onLocationChange={onLocationChange}
        />
      </MapContainer>
    )
  );
};

export default Map;
