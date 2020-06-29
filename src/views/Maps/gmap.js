import React, { useState, useEffect } from 'react';
import { compose, withProps } from 'recompose'; 
import firebase from "firebase"; 
import geohash from "ngeohash";
import { number, array } from "yup"; 
import fetch from "isomorphic-fetch";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

export default function Gmap() { 

const MapComponent = compose( 
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `90vh`, marginTop: '2rem' }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
) 
(props => { 

 
    function displayMarkers (){ 
      return Object.values(marker).map((marker, index) => {
        return <Marker key={index} id={index} position={{
         lat:Number(marker.Ic),
         lng:Number(marker.wc)
       }} 
       onClick={() => console.log("You clicked me!")} />
      })
    }


 const mark= <GoogleMap  
    defaultZoom={15}
    defaultCenter={{ lat:  9.4186961, lng: -0.8192849 }}
  >  
  { displayMarkers() }
  </GoogleMap> 
  return mark;
});  


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
let [marker, setMarker] = useState([]);
    const { isMarkerShown } = false;
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
    setMarker(marker=location);  //items is equal to listItems  
    //marker=location 
    let x= marker.length;
    console.log(marker);
     }); 
     
     db
    .collection("Robbery")
    .where("location.geohash", ">=", range.lower)
    .where("location.geohash", "<=", range.upper) 
    .onSnapshot(snapshot => {
    //You can "listen" to a document with the onSnapshot() method.
    const location = snapshot.docs.map(doc => ({
      //map each document into snapshot
      //id: doc.id, //id and data pushed into items array 
      ...doc.data().location.geopoint, //spread operator merges data to id. 
    })); 
     setMarker(marker=location);  //items is equal to listItems  
    //marker=location 
    let x= marker.length;
    console.log(marker);
     });  

     db
      .collection("Potholes")
      .where("location.geohash", ">=", range.lower)
      .where("location.geohash", "<=", range.upper) 
      .onSnapshot(snapshot => {
      //You can "listen" to a document with the onSnapshot() method.
      const location = snapshot.docs.map(doc => ({
      //map each document into snapshot
      //id: doc.id, //id and data pushed into items array 
      ...doc.data().location.geopoint, //spread operator merges data to id. 
    })); 
      setMarker(marker=location);  //items is equal to listItems  
    //marker=location 
      let x= marker.length;
      console.log(marker);
     });  

     db
   .collection("Blockage")
   .where("location.geohash", ">=", range.lower)
   .where("location.geohash", "<=", range.upper) 
   .onSnapshot(snapshot => {
    //You can "listen" to a document with the onSnapshot() method.
    const location = snapshot.docs.map(doc => ({
      //map each document into snapshot
      //id: doc.id, //id and data pushed into items array 
      ...doc.data().location.geopoint, //spread operator merges data to id. 
    })); 
    setMarker(marker=location);  //items is equal to listItems  
    //marker=location 
    let x= marker.length;
    console.log(marker);
     });  

     db
   .collection("Traffic")
   .where("location.geohash", ">=", range.lower)
   .where("location.geohash", "<=", range.upper) 
   .onSnapshot(snapshot => {
    //You can "listen" to a document with the onSnapshot() method.
    const location = snapshot.docs.map(doc => ({
      //map each document into snapshot
      //id: doc.id, //id and data pushed into items array 
      ...doc.data().location.geopoint, //spread operator merges data to id. 
    })); 
    setMarker(marker=location);  //items is equal to listItems  
    //marker=location 
    let x= marker.length;
    console.log(marker);
     });  

     db
   .collection("Street_lights")
   .where("location.geohash", ">=", range.lower)
   .where("location.geohash", "<=", range.upper) 
   .onSnapshot(snapshot => {
    //You can "listen" to a document with the onSnapshot() method.
    const location = snapshot.docs.map(doc => ({
      //map each document into snapshot
      //id: doc.id, //id and data pushed into items array 
      ...doc.data().location.geopoint, //spread operator merges data to id. 
    })); 
    setMarker(marker=location);  //items is equal to listItems  
    //marker=location 
    let x= marker.length;
    console.log(marker);
     }); 

     db
   .collection("Car_breakdown")
   .where("location.geohash", ">=", range.lower)
   .where("location.geohash", "<=", range.upper) 
   .onSnapshot(snapshot => {
    //You can "listen" to a document with the onSnapshot() method.
    const location = snapshot.docs.map(doc => ({
      //map each document into snapshot
      //id: doc.id, //id and data pushed into items array 
      ...doc.data().location.geopoint, //spread operator merges data to id. 
    })); 
    setMarker(marker=location);  //items is equal to listItems  
    //marker=location 
    let x= marker.length;
    console.log(marker);
     }); 

        delayedShowMarker();
    }, []);

    const delayedShowMarker = () => {
        setMarker({ isMarkerShown: true });
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