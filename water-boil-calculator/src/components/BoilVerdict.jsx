import React from "react";

function BoilVerdict({ celcius }) {
  return celcius >= 100 ? (
    <div>Water will Boil!</div>
  ) : (
    <div>Water will NOT Boil!</div>
  );
}

export default BoilVerdict;
