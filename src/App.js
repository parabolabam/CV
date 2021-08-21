import React from "react";
import { Greeting } from "./components/Greeting";
import { Link } from "./components/Link";
import { email, emailLink } from "./utils/constants";
import { Activities } from "./components/Activities";

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
