import React from 'react';
import logo from './logo.svg';
import './App.css'; 
import Login from "./components/login/login";  
import Home from "./components/screens/home"; 
import Front from "./components/screens/front"; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import Maintenance from './components/screens/maintenancesDash'; 
import { AuthProvider } from "./auth.js" 
import PrivateRoute from "./PrivateRoute";
import Dashboard from './components/screens/Dashboard';


function App() {
  return (  
      <AuthProvider>
      <Router>
      <Switch> 
      <PrivateRoute exact path="/" component={Maintenance} />  
      <Route exact path="/login" component={Login} />  
      <Route exact path="/front" component={Front} />  
      <Route exact path="/home" component={Home} />  
      <Route exact path="/dashboard" component={Dashboard} />  
      </Switch>
      </Router>
      </AuthProvider>
          );
      } 

export default App;
