import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '800px',
  height: '600px',
  margin: '0 auto'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function MapComponent() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDIasFaHTFGq6SR1eTv3SyPwNZR8fKmImc'
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
    >
      <Marker position={center} />
    </GoogleMap>
  );
}

export default React.memo(MapComponent);
