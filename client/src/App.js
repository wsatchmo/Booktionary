import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import Nav from "./components/Nav";
import Repo from "./pages/Repo";
import NoMatch from "./pages/NoMatch";
import "./App.css";

//Rendering the App to the index page
function App() {
  return (
    <Router>
      <div className="bg-primary">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/saved" component={Saved} />
          <Route exact path="/repo" component={Repo} />
          <Route component={NoMatch} />
        </Switch>
        <div className="box">
          <div class='wave -one'></div>
          <div class='wave -two'></div>
          <div class='wave -three'></div>
        </div>
      </div>
    </Router>
  );
}

export default App;