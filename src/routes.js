/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
//import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "./views/Dashboard/Dashboard.js";
//import UserProfile from "./views/UserProfile/UserProfile.js";
import TableList from "./views/TrafficProblems/TrafficProblems";
import Typography from "./views/StreetLights/StreetLights.js";
import Icons from "./views/Potholes/Potholes.js";
import Maps from "./views/Maps/Maps.js";
import NotificationsPage from "./views/Administrator/Administrator.js";
// core components/views for RTL layout
import RTLPage from "./views/Car_Breakdown/Car_Breakdown.js";
import Accidents from "./views/Accidents/Accidents.js";
import Robbery from "./views/Robbery/Robbery.js";
import SecDash from "./views/Dashboard/SecDash.js"; 
import Gmap from "./views/Maps/gmap.js"

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard(Maintenance)",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  
  {
    path: "/traffic",
    name: "Traffic Lights",
    icon: LibraryBooks,
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/streetLights",
    name: "Street Lights",
    icon: LibraryBooks,
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/potholes",
    name: "Potholes",
    icon: LibraryBooks,
    component: Icons,
    layout: "/admin"
  }, 
  {
    path: "/car_breakdown",
    name: "Car breakdown",
    icon: LibraryBooks,
    component: RTLPage,
    layout: "/admin"
  }, 
  {
    path: "/secDash",
    name: "Dashboard(Security)",
    icon: Dashboard,
    component: SecDash,
    layout: "/admin"
  }, 
  {
    path: "/accidents",
    name: "Accidents",
    icon: LibraryBooks,
    component: Accidents,
    layout: "/admin"
  }, 

  {
    path: "/robbery",
    name: "Robbery",
    icon: LibraryBooks,
    component: Robbery,
    layout: "/admin"
  },

  {
    path: "/gmaps",
    name: "Maps",
    icon: LocationOn,
    component: Gmap,
    layout: "/admin"
  },
  {
    path: "/Admin",
    name: "Admin(manage users)",
    icon: Person,
    component: NotificationsPage,
    layout: "/admin"
  },
  
 
];

export default dashboardRoutes;
