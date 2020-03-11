import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

//Rendering the index to the actual HTML
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();