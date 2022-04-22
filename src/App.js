import axios from "axios";
import "./App.css";
import { useState, useEffect } from "react";

import useGeoLocation from "./Location/Location";

function App() {
  const location = useGeoLocation();
  console.log(location);

  return (
    <div className="App">
      {location.loaded
        ? JSON.stringify(location)
        : "Location data not available yet."}
    </div>
  );
}

export default App;
