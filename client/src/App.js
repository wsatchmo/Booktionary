import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Save from "./pages/Save";
import None from "./pages/None";

function App(){
    return(
        <Router>
            <div>
                <Nav/>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/save" component={Save} />
                    <Route component={None} />
                </Switch>
            </div>
        </Router>
    )
}

export default App;