import React from "react";

function TemparatureInput({ temp, changeTemp, type }) {
  return (
    <fieldset>
      <legend>Enter Temp is °{type}</legend>
      <input type="number" value={temp} onChange={changeTemp} />°{type}
    </fieldset>
  );
}

export default TemparatureInput;
