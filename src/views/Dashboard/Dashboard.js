import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
//import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
//import BugReport from "@material-ui/icons/BugReport";
//import Code from "@material-ui/icons/Code";
//import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
//import Table from "../../components/Table/Table.js";
//import Tasks from "../../components/Tasks/Tasks.js";
//import CustomTabs from "../../components/CustomTabs/CustomTabs.js";
//import Danger from "../../components/Typography/Danger.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardIcon from "../../components/Card/CardIcon.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";
import Pending from "./problems/pendingReports";
import Potholes from "./problems/potholes"; 
import SolvedPotholes from "./problems/SolvedPotholes" ;
import SolvedTraffic from "./problems/SolvedTraffic" ; 
import SolvedLights from "./problems/SolvedLights" ; 
import Solved from "./problems/Solved" ; 
import Button from "@material-ui/core/Button";

//import { bugs, website, server } from "../../variables/general.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  // completedTasksChart
} from "../../variables/charts.js";

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";
import StreetLight from "./problems/streetlights.js";
import TrafficLights from "./problems/trafficlights.js";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}>Total Pending Reports</p>
              <h3 className={classes.cardTitle}>
                {" "}
                <Pending></Pending>
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Icon>Fixed Issues</Icon>
              </CardIcon>
              <br />
              <br />
              <br />
              <p className={classes.cardCategory} align="center">
                {""}
                Total Fixed Issues
              </p>
              <h3 className={classes.cardTitle} align="center">
                {" "}
                <Solved></Solved>
              </h3>
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
            <CardHeader color="success">
              <ChartistGraph
                className="ct-chart"
                data={dailySalesChart.data}
                type="Line"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Daily Reports</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </span>{" "}
                increase in today reports.
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 4 minutes ago
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
              <h4 className={classes.cardTitle}>Task Completed Per Month</h4>
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
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Icon>Traffic lights issues </Icon>
              </CardIcon>
              <br />
              <br />
              <br />
              <p className={classes.cardCategory} align="center">
                {" "}
                Traffic lights issues
              </p>
              <h3 className={classes.cardTitle} align="center">
                Fixed: <SolvedTraffic></SolvedTraffic>
              </h3>
              <br />
              <h3 className={classes.cardTitle} align="center">
                Pending: <TrafficLights></TrafficLights>
              </h3>
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
                <Icon>Street lights issues </Icon>
              </CardIcon>
              <br />
              <br />
              <br />
              <p className={classes.cardCategory} align="center">
                {" "}
                Street lights issues
              </p>
              <h3 className={classes.cardTitle} align="center">
                Fixed: <SolvedLights></SolvedLights>
              </h3>
              <br />
              <h3 className={classes.cardTitle} align="center">
                Pending: <StreetLight></StreetLight>
              </h3>
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
                <Icon>Potholes issues </Icon>
              </CardIcon>
              <br />
              <br />
              <br />
              <p className={classes.cardCategory} align="center">
                {" "}
                Potholes issues
              </p>
              <h3 className={classes.cardTitle} align="center">
                Fixed: <SolvedPotholes></SolvedPotholes>
              </h3>
              <br />
              <h3 className={classes.cardTitle} align="center">
                Pending: <Potholes></Potholes>
              </h3>
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
                <Icon> Car Breakdown </Icon>
              </CardIcon>
              <br />
              <br />
              <br />
              <p className={classes.cardCategory} align="center">
                {" "}
                A car is strunded on the road!
              </p>
              <br />
              <Button color="secondary"> View Location on Map </Button>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <LocalOffer />
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
