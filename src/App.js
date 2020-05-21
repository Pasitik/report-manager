import React from 'react';
import logo from './logo.svg';
import './App.css'; 
import Login from "./components/login/login"; 
import LoginM from "./components/login/loginM";  
import Home from "./components/screens/home"; 
import Front from "./components/screens/front"; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import Maintenance from './components/screens/maintenancesDash';


function App() {
  return (  
      <Router>
      <div className="App">  
      <Switch> 
      <Route exact path="/maintenance" component={Maintenance} />  
      <Route exact path="/login1" component={Login} />  
      <Route exact path="/login2" component={LoginM} />  
      <Route exact path="/" component={Front} />  
      <Route exact path="/home" component={Home} />  

      </Switch>
      </div>
      </Router>
    
          );
      } 

export default App;
