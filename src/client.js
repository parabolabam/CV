import React from "react";
import { hydrate } from "react-dom";
import "./fonts.css";
import "./colors.css";
import "./index.css";
import App from "./App";

hydrate(<App />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}
