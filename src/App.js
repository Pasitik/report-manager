import React from 'react';
import logo from './logo.svg';
import './App.css'; 
import Login from "./components/login/login";  
import Home from "./components/screens/home"; 
import Front from "./components/screens/front"; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 


function App() {
  return (  
      <Router>
      <div className="App">  
      <Switch> 
      <Route exact path="/home" component={Login} />  
      <Route exact path="/" component={Front} /> 
      </Switch>
      </div>
      </Router>
    
          );
      } 

export default App;
