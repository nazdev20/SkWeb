import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// TypeScript Interface for Position
interface Position {
  lat: number;
  lng: number;
}

// Component to handle setting the initial center of the map
const SetViewOnLoad: React.FC<{ position: Position }> = ({ position }) => {
  const map = useMap();
  map.setView([position.lat, position.lng], 13); // Set initial view when component loads

  return null; // No need to return any JSX
};

// Component to handle zooming in on marker click
const ZoomToMarker: React.FC<{ position: Position }> = ({ position }) => {
  const map = useMap();

  const handleClick = () => {
    map.setView([position.lat, position.lng], 16); // Set zoom level to 16 when clicked
  };

  return (
    <Marker position={[position.lat, position.lng]} eventHandlers={{ click: handleClick }}>
      <Popup>
        Camohaguin Barangay Hall
      </Popup>
    </Marker>
  );
};

const MyMapComponent: React.FC = () => {
  const currentPosition: Position = {
    lat: 13.909491554603317,
    lng: 122.16558462351907,
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
      <MapContainer
        
        style={{ 
          height: '400px', 
          width: '80%', 
          borderRadius: '20px', 
          border: '2px solid #ccc', 
          overflow: 'hidden',
          zIndex: 1, // Ensure the map stays behind other content
        }}
      >
        {/* Set the view on load with the SetViewOnLoad component */}
        <SetViewOnLoad position={currentPosition} />

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <ZoomToMarker position={currentPosition} />
      </MapContainer>
    </div>
  );
};

export default MyMapComponent;
