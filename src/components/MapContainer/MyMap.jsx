import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MyMap = () => {
  return (
    <MapContainer center={[38.984653, -77.094711]} zoom={13} style={{ height: "500px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[38.984653, -77.094711]}>
        <Popup>Welcome to Bethesda's Gaming Studio</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MyMap;
