import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100vw',
  height: '100vh',
  border: '3px solid green'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const GoogleMaps = () => {
  return (
    <LoadScript
      googleMapsApiKey="">
      <GoogleMap
        class='map'
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        >
        { /* Child components, such as markers, info windows, etc. */ }
      </GoogleMap>
    </LoadScript>
  )
}

export default GoogleMaps;