import React, { useState } from "react";
import Car from "./Car";

// Car component (receives props)


// Garage component (uses state + passes props)
function Garage() {
  const [carName, setCarName] = useState("Toyota");


  return (
    <div>
      <h2>My Garage</h2>


      {/* Passing state as props */}
      <Car brand={carName} />


      {/* Change state */}
      <button onClick={() => setCarName("BMW")}>Change Car</button>
      <h3>160124737168</h3>
    </div>
  );
}


export default Garage;
