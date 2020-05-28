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
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyDanEc0d2_0dClacfkr2t9qmX1w7G2QJDA',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100vh` }} />,
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
    const [formData, setFormData] = useState({
      isMarkerShown: false
    });

    const { isMarkerShown } = formData;
    useEffect(() => {
        delayedShowMarker();
    }, []);

    const delayedShowMarker = () => {
        setTimeout(() => {
        setFormData({ isMarkerShown: true });
        }, 3000);
    };

    const handleMarkerClick = () => {
        setFormData({ isMarkerShown: false });
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
