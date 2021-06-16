import logo from './logo.svg';
import "./style.css";
import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import HomeBottom from "./components/Home/HomeBottom";
import Preloader from "../src/components/Pre";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";


function App() {
  const [load, upadateLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      upadateLoad(false);
    }, 1200);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App">
        <Switch>
          <Route exact path='/' component= {Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
