import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Login from "./components/Login";
import BubblePage from './components/BubblePage'
import PrivateRoute from './utils/PrivateRoute'
import Navigation from './components/Navigation'

import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Route exact path="/" component={Login} />
        <Switch>
          <PrivateRoute exact path='/bubbles-page' component={BubblePage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
