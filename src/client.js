import React from "react";
import { hydrate } from "react-dom";
import "./css/global-classes.css";
import "./css/fonts.css";
import "./css/colors.css";
import "./css/index.css";
import App from "./App";

hydrate(<App />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}
