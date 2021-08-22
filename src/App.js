import React from "react";
import { Greeting } from "./components/Greeting";
import { Activities } from "./components/Activities";

import "./css/app.css";

const App = () => {
  return (
    <>
      <div className="layout">
        <Greeting />
        <Activities />
      </div>
    </>
  );
};

export default App;
