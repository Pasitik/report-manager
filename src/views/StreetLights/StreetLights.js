import React,{ useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import firebase from "firebase"; 
import geohash from "ngeohash";
import {usePosition} from "use-position";


// @material-ui/core components

import { Container, FormControlLabel, Switch, Button } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { number } from "yup";

// core components
//import styles from "../../assets/jss/material-dashboard-react/components/tableStyle.js";

//const useStyles = makeStyles(styles);

export default function Accidents(props) { 
  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell); 

  const updateContent = async (row) => {
    const accRef = await db.collection("Street_lights").doc(row.id).get()
    if (accRef.exists) {
      const data = accRef.data()

      const solvedRef = await db.collection("SolvedLights").doc(row.id).get()
      if (!solvedRef.exists) {
        await db.collection("SolvedLights").doc(row.id).set(data).then(async (succ) => {
          await db.collection("Street_lights").doc(row.id).delete()
        })
      }
    }
  }
 
  const button = ( 
    <Button
      component={Link}
      variant='contained'
      color='primary'
      size='small'
      to={'/maps'}
    >
      View Map
    </Button>
  );
  
  const switchButton = (
    <Button
    component={Link}
    variant='contained'
    color='secondary'
    size='small'
    //to={'/maps'} 
    
  >
    Solved
  </Button>
  );
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
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
  
  //const firestore = new Firestore();
  const db = firebase.firestore();

  function createData(info, timestamp, actions) {
    return { info, timestamp, actions };
  }

  //var snapShot = firestore.collection("Accidents").get();
  var accident = getAccidents();

  async function getAccidents() {
    var snapShot = await db.collection("accident").get();

    return snapShot.docs.length;
  }
  const watch = true;
  const {latitude,
    longitude,
    timestamp,
    accuracy,
    error,} = usePosition(); 
    

  //console.log(`longitude: ${lng} | latitude: ${lat}`);
    //console.log("lat: " + latitude)

const[rows, setRows] = useState([]); 
//let rows=[]; 
useEffect(() => { 
   // Retrieve the current coordinates using the navigator API
   const randomLatitude = 9.4186961;
   const randomLongitude = -0.8192849;
   // Get a geohash range of 10 miles on all sides;
   const range = getGeohashRange(randomLatitude, randomLongitude, 30);
 //rows = [];
 db
   .collection("Street_lights")
   .where("location.geohash", ">=", range.lower)
   .where("location.geohash", "<=", range.upper)
   .onSnapshot(snapshot => {
    //You can "listen" to a document with the onSnapshot() method.
    const listItems = snapshot.docs.map(doc => ({
      //map each document into snapshot
      id: doc.id, //id and data pushed into items array 
      date:new Date(doc.data().timestamp)
      .toUTCString(),
      ...doc.data(), //spread operator merges data to id. 
    }));
    setRows(listItems); //items is equal to listItems 
    console.log(listItems);
  });
}, []);
   
   /**
    * .get()
   .then(snapshot => {
      snapshot.forEach(doc => {   
       //rows=[];         
       //var snap = db.collection("Accidents").get().;  
       var a= doc.data().info; 
       var b= doc.data().timestamp; 
       var query= createData(a,b);  
       setRows([...rows, query]);
       console.log(query); 
       return query;  
     }); 
     //setRows(rows=>[...rows, ])
   })
   .catch(err => {
     console.log('Error getting documents', err);
   });
    */


   // .catch(function(error) {
      //  console.log("Error getting documents: ", error);
    //});

     // createData(1, 'Accidents', '20-05-2020'),
  
  
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });
  
  
  const classes = useStyles();
 //const { tableHead, tableData, tableHeaderColor } = props;
  return (
    <div className={classes.tableResponsive}>
      <Container style={{ marginTop: '6em' }}>
          <TableContainer
            component={Paper}
            style={{ marginTop: '2em', marginBottom: '6em' }}
          >
            <Table className={classes.table} aria-label='customized table'>
              <TableHead>
                <TableRow>
                  <StyledTableCell align='center'>Problem</StyledTableCell>
                  <StyledTableCell align='center'>Date</StyledTableCell>
                  <StyledTableCell align='center'>Actions</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow>
                    <StyledTableCell align='center'>
                      {row.info}
                    </StyledTableCell>
                    <StyledTableCell align='center'>{row.date}</StyledTableCell>
                    <StyledTableCell align='center'>
                    <Button
                      component={Link}
                      variant='contained'
                      color='secondary'
                      size='small'
                      onClick={() => updateContent(row)}
                    //to={'/maps'} 

                    >
                      Solved
    </Button>

                    <Button
                      component={Link}
                      variant='contained'
                      color='primary'
                      size='small'
                      to={{
                        pathname: '/maps',
                        state: {
                          loc: row.location.geopoint
                        }
                      }}
                    >
                      View Map
    </Button >
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
    </div>
  );
}

Accidents.defaultProps = {
  tableHeaderColor: "gray"
};

Accidents.propTypes = {
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
};
