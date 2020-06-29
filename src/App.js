import React from 'react';
//import logo from './logo.svg';
import './App.css'; 
import Login from "./components/login/login";  
import Home from "./components/screens/home"; 
import Front from "./components/screens/front"; 
//import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'; 
import Maintenance from './components/screens/maintenancesDash'; 
import { AuthProvider } from "./auth.js" 
import PrivateRoute from "./PrivateRoute";
import Dashboard from './components/screens/Dashboard'; 
import Admin from "./layouts/Admin.js";
//import RTL from "./layouts/RTL.js";

import "./assets/css/material-dashboard-react.css?v=1.9.0"; 
import Maps from './views/Maps/Maps.js';
import Gmap from './views/Maps/gmap.js';


const hist = createBrowserHistory();

function App() {
  return (  
      <AuthProvider>
      <Router history={hist}>
      <Switch> 
      <PrivateRoute exact path="/" component={Admin} />  
      <Route exact path="/login" component={Login} />  
      <Route exact path="/front" component={Front} />  
      <Route exact path="/home" component={Home} />  
      <Route exact path="/dashboard" component={Dashboard} /> 
      <Route exact path="/maps" component={Maps} />
      <Route exact path="/gmaps" component={Gmap} />
      <Route path="/admin" component={Admin} />
      <Redirect from="/" to="/admin/dashboard" />  
      </Switch>
      </Router>
      </AuthProvider> 
          );
      } 

export default App;
