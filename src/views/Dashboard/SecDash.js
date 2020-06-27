import React, { useState, useEffect } from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";  
import Button from '@material-ui/core/Button'; 
import geohash from "ngeohash";
import { number, array } from "yup"; 
import firebase from "firebase"; 

import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardIcon from "../../components/Card/CardIcon.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";
import {
  dailySalesChart,
  emailsSubscriptionChart,
 // completedTasksChart
} from "../../variables/charts.js";

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);  

export default function SecDash() {
  const classes = useStyles(); 
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
  

    const db = firebase.firestore();
let [accident, setAccident] = useState([]); 
let [robbery, setRobbery] = useState([]); 

    useEffect(() => {  
       // Retrieve the current coordinates using the navigator API
   const randomLatitude = 9.4186961;
   const randomLongitude = -0.8192849;
   // Get a geohash range of 10 miles on all sides;
   const range = getGeohashRange(randomLatitude, randomLongitude, 30);
 db
 .collection("Accidents")
 .where("location.geohash", ">=", range.lower)
 .where("location.geohash", "<=", range.upper) 
 .onSnapshot(snapshot => {
  //You can "listen" to a document with the onSnapshot() method.
  const location = snapshot.docs.map(doc => ({
    //map each document into snapshot
    ...doc.data(), //spread operator merges data to id. 
  })); 
  setAccident(accident=location);  //items is equal to listItems  
  //marker=location 
  //let x= marker.length;
  //console.log(marker.length);
   });  

   db
   .collection("Robbery")
   .where("location.geohash", ">=", range.lower)
   .where("location.geohash", "<=", range.upper) 
   .onSnapshot(snapshot => {
    //You can "listen" to a document with the onSnapshot() method.
    const location = snapshot.docs.map(doc => ({
      //map each document into snapshot
      ...doc.data(), //spread operator merges data to id. 
    })); 
    setRobbery(robbery=location);  //items is equal to listItems  
    //marker=location 
    //let x= marker.length;
   // console.log(robbery);
     }); 
  }, []); 
 
  function accidents() {  
    if(accident.length>0){
    let x= accident.length;  
       console.log(accident.length); 
    return accident[x-1]["info"]; 
  }
  }  

  function rob() {  
    if(robbery.length>0){
    let x= robbery.length;  
       console.log(robbery.length); 
    return robbery[x-1]["info"]; 
  }
  } 


 

  return (
    <div>
      <GridContainer>
        
      <GridItem xs={12} sm={12} md={4}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Icon>Robbery</Icon>
              </CardIcon><br/><br/><br/>
  <p className={classes.cardCategory} align="center">{rob()}</p><br/>
              <Button color="secondary"> View Location On Map </Button>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <LocalOffer />
              </div>
            </CardFooter>
          </Card>
        </GridItem> 
        <GridItem xs={12} sm={12} md={4}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Icon> Accident </Icon>
              </CardIcon><br/><br/><br/>
              <p className={classes.cardCategory} align="center">{accidents()}</p><br/>
              <Button color="secondary"> View Location on Map </Button>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <LocalOffer />
              </div>
            </CardFooter>
          </Card>
        </GridItem> 
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}></p>
              <h3 className={classes.cardTitle}></h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
      <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="warning">
              <ChartistGraph
                className="ct-chart"
                data={emailsSubscriptionChart.data}
                type="Bar"
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Reports made Per Month(ACCIDENTS)</h4>
              <p className={classes.cardCategory}>Performance</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="warning">
              <ChartistGraph
                className="ct-chart"
                data={emailsSubscriptionChart.data}
                type="Bar"
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Reports made Per Month(ROBBERY)</h4>
              <p className={classes.cardCategory}>Performance</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
       
      </GridContainer>
      
    </div>
  );
}
