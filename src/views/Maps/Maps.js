import React, { useState, useEffect } from 'react';
import { compose, withProps } from 'recompose'; 
import firebase from "firebase"; 
import geohash from "ngeohash";
import { number } from "yup"; 
import fetch from "isomorphic-fetch";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

export default function Maps(props) { 

const MapComponent = compose( 
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyDanEc0d2_0dClacfkr2t9qmX1w7G2QJDA',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `90vh`, marginTop: '2rem' }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
) 
(props => { 

  function tag(latitude, longitude) { 
    return(
      <Marker 
        position={{ lat:  latitude, lng: longitude }}
        onClick={props.onMarkerClick}
      />  
  )
  } 

   function lo(){  
    console.log(marker.length);    
      for (let i = 0; i <= marker.length; i++) { 
      let lo =  marker[i]["Ic"];
      let la= marker[i]["wc"]; 
      console.log(lo);
     return (  tag(lo,la) )// console.log(long);

    }    
    //console.log(cont);
}

   //      let latti = marker[i]["wc"]        

  // function la() { var latti = marker.map(items=>{return items.wc}) }
 const mark= <GoogleMap  
    defaultZoom={15}
    defaultCenter={{ lat:  9.4186961, lng: -0.8192849 }}
  >  
  {lo()}   

  </GoogleMap> 
  return mark;
});  

  
let [long , setLong]=useState([]); 
let [lati , setLati]=useState([]);


const getGeohashRange = ( 
  latitude= number,
  longitude= number,
  distance = number, // miles
) => {
  const lat = 0.0144927536231884; // degrees latitude per mile
  const lon = 0.0181818181818182; // degrees longitude per mile

  const lowerLat = latitude - lat * distance;
  const lowerLon = longitude - lon * distance;

  const upperLat = latitude + lat * distance;
  const upperLon = longitude + lon * distance;

  const lower = geohash.encode(lowerLat, lowerLon);
  const upper = geohash.encode(upperLat, upperLon);

  return {
    lower,
    upper
  };
};



    
function createData(long,lat) {
  return { long, lat };
}

const db = firebase.firestore();
let [marker, setMarker] = useState({});
    const { isMarkerShown } = marker;
    useEffect(() => {  
       // Retrieve the current coordinates using the navigator API
   const randomLatitude = 9.4186961;
   const randomLongitude = -0.8192849;
   // Get a geohash range of 10 miles on all sides;
   const range = getGeohashRange(randomLatitude, randomLongitude, 30);
 //rows = [];
 db
   .collection("Accidents")
   .where("location.geohash", ">=", range.lower)
   .where("location.geohash", "<=", range.upper) 
   .onSnapshot(snapshot => {
    //You can "listen" to a document with the onSnapshot() method.
    const location = snapshot.docs.map(doc => ({
      //map each document into snapshot
      //id: doc.id, //id and data pushed into items array 
      ...doc.data().location.geopoint, //spread operator merges data to id. 
    })); 
    setMarker(marker=location); //items is equal to listItems  
    console.log(marker.length);
     }); 
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
    
