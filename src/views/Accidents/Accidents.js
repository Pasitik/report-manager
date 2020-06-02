import React,{ useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import firebase from "firebase"; 
import { usePosition } from 'use-position';
import geohash from "ngeohash";
import { Firestore } from "@google-cloud/firestore";


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
    <FormControlLabel
      control={<Switch />}
    />
  );
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  const {
    latitude,
    longitude,
  } = usePosition();  

  const getGeohashRange = (
    latitude= {latitude},
    longitude={longitude},
    distance = 15.5343, // miles
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
  
  const firestore = new Firestore();

  function createData(info, timestamp, actions) {
    return { info, timestamp, actions };
  }

  //var snapShot = firestore.collection("Accidents").get();
  var accident = getAccidents();

  async function getAccidents() {
    var snapShot = await firestore.collection("accident").get();

    return snapShot.docs.length;
  }


//const[rows, setRows] = useState([]); 
let rows=[]; 

    // Retrieve the current coordinates using the navigator API
  navigator.geolocation.getCurrentPosition(position => {
  const { latitude, longitude } = position.coords;
  const range = getGeohashRange(latitude, longitude, 10);
  firestore
    .collection("Accidents")
    .where("geohash", ">=", range.lower)
    .where("geohash", "<=", range.upper)
    .onSnapshot(snapshot => { 
       //rows = [];
      // Your own custom logic here 
      for(var i=0; i>=accident; i++){  
     var a = firestore.collection("accident").doc().get("/info");
     var b = firestore.collection("accident").doc().get("/timestamp");
     

        rows.push(createData(a,b)); 
      //return rows=[{setRows}]
      }
      console.log(snapshot.docs)
    })
})
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
                    <StyledTableCell align='center'>{row.timestamp}</StyledTableCell>
                    <StyledTableCell align='center'>
                      {switchButton}
                      {button}
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
