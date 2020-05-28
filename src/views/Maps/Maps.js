import React, { useState, useEffect } from 'react';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';


const MapComponent = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `90vh`, marginTop: '2rem' }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: 6.674503499999999, lng: -1.5716114 }}
  >
    {props.isMarkerShown && (
      <Marker
        position={{ lat: 6.674503499999999, lng: -1.5716114 }}
        onClick={props.onMarkerClick}
      />
    )}
  </GoogleMap>
));

const Maps = () => {
    const [marker, setMarker] = useState({
      isMarkerShown: false
    });

    const { isMarkerShown } = marker;
    useEffect(() => {
        delayedShowMarker();
    }, []);

    const delayedShowMarker = () => {
        setTimeout(() => {
        setMarker({ isMarkerShown: true });
        }, 3000);
    };

    const handleMarkerClick = () => {
        setMarker({ isMarkerShown: false });
        delayedShowMarker();
    };

    return (
      
      <div>
        <MapComponent
          isMarkerShown={isMarkerShown}
          onMarkerClick={handleMarkerClick}
        />
      </div>
    );
}

export default Maps;
