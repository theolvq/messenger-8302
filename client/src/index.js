import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { CloudinaryContext } from "cloudinary-react";

const CLOUD_NAME = process.env.REACT_APP_CLOUD_NAME;

ReactDOM.render(
  <CloudinaryContext cloudName={CLOUD_NAME}>
    <App />
  </CloudinaryContext>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
