import React from "react";

import Restcard from "./Restcard";
import "./comp.css";

function Body() {
  return (
    <div>
      <div> Search</div>
      <div className="res-container">
        <Restcard />
        <Restcard />
        <Restcard />
        <Restcard />
        <Restcard />
        <Restcard />
        <Restcard />
        <Restcard />
      </div>
    </div>
  );
}

export default Body;
