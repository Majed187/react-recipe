import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.css";

import Router from "./copmonentes/Router";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<Router />, document.getElementById("root"));
registerServiceWorker();
