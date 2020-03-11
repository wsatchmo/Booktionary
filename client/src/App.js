import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import Repo from "./pages/Repo";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <div>Hello World
    {/*<Router>
      <div className="bg-primary">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/saved" component={Saved} />
          <Route exact path="/repo" component={Repo} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>*/}
    </div>
  );
}

export default App;