import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '400px',
  height: '400px',
  margin: '0 auto',
};

const LandingPage = (props) => {
  return (
    <div>
      <h1>Welcome to My Google Maps App</h1>
      <Map
        google={props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{ lat: 37.7749, lng: -122.4194 }} // Set the initial center coordinates of the map
      />
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'YOUR_GOOGLE_MAPS_API_KEY', // Replace with your actual API key
})(LandingPage);
