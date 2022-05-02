import React, { useState } from "react";
import BoilVerdict from "./BoilVerdict";
import TemparatureInput from "./TemparatureInput";
import { toC, toF } from "../utils/convert";

function WaterBoilCalculator() {
  const [temp, setTemp] = useState("");
  const [scale, setScale] = useState("C");

  const celcius =
    scale === "C"
      ? temp
      : isNaN(toC(parseFloat(temp)))
      ? ""
      : toC(parseFloat(temp));
  const farenheit =
    scale === "F"
      ? temp
      : isNaN(toF(parseFloat(temp)))
      ? ""
      : toF(parseFloat(temp));

  const changeCelciusHandler = (e) => {
    setTemp(e.target.value);
    setScale("C");
  };
  const changeFarenheitHandler = (e) => {
    setTemp(e.target.value);
    setScale("F");
  };

  return (
    <div>
      <TemparatureInput
        temp={celcius}
        changeTemp={changeCelciusHandler}
        type="C"
      />
      <TemparatureInput
        temp={farenheit}
        changeTemp={changeFarenheitHandler}
        type="F"
      />
      <BoilVerdict celcius={parseFloat(celcius)} />
    </div>
  );
}

export default WaterBoilCalculator;
