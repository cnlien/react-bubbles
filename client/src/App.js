import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Login from "./components/Login";
import BubblePage from './components/BubblePage'
import Answers from './components/Answers';
import PrivateRoute from './utils/PrivateRoute'

import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path='/bubbles-page' component={BubblePage}/>
        <PrivateRoute exact path='/sprint-answers' component={Answers} />
      </div>
    </Router>
  );
}

export default App;
