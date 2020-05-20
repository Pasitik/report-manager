import React from 'react';
import logo from './logo.svg';
import './App.css'; 
import Login from "./components/login/login";  
import Home from "./components/screens/home"; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 


function App() {
  return (  
      <Router>
      <div className="App">  
      <Switch> 
      <Route exact path="/" component={Login} />  
      <Route exact path="/home" component={Home} /> 
      </Switch>
      </div>
      </Router>
    
          );
      } 

export default App;
