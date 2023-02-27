import React, { useEffect, useState } from "react";
import { Pesos } from "./unit";
import Input from "../Components/Input";
const Peso = () => {
  const [num, setNum] = useState(0);
  const [fromopc, setFromopc] = useState(0);
  const [toopc, setToopc] = useState(0);
  const [result, setResult] = useState(0);
  const  PESOS = {
    Kilogram: (o, n) =>
      o == "Gram"
        ? n * 1000
        : o == "Milligram"
        ? n * 1e6
        : o == "Metric Ton"
        ? n / 907.2
        : o == "Long Ton"
        ? n / 1016
        : o == "Pound"
        ? n * 2.205
        : o == "Ounce"
        ? n * 35.274
        : o == "Carrat"
        ? n * 5000
        : o == "Atomic Mass Unit"
        ? n * 6.022e26
        : n,
    Gram: (o, n) =>
      o == "Kilogram"
        ? n / 1000
        : o == "Milligram"
        ? n * 1000
        : o == "Metric Ton"
        ? n / 907200
        : o == "Long Ton"
        ? n / 1.016e6
        : o == "Pound"
        ? n / 453.6
        : o == "Ounce"
        ? n / 28.35
        : o == "Carrat"
        ? n * 5
        : o == "Atomic Mass Unit"
        ? n * 6.022e23
        : n,
    Milligram: (o, n) =>
      o == "Gram"
        ? n / 1000
        : o == "Kilogram"
        ? n / 1e6
        : o == "Metric Ton"
        ? n / 9.072e8
        : o == "Long Ton"
        ? n / 1.016e9
        : o == "Pound"
        ? n / 453600
        : o == "Ounce"
        ? n / 28350
        : o == "Carrat"
        ? n / 200
        : o == "Atomic Mass Unit"
        ? n * 6.022e20
        : n,
    "Metric Ton": (o, n) =>
      o == "Gram"
        ? n * 907200
        : o == "Milligram"
        ? n * 9.072e11
        : o == "Kilogram"
        ? n * 907.2
        : o == "Long Ton"
        ? n / 1.12
        : o == "Pound"
        ? n * 2000
        : o == "Ounce"
        ? n * 32000
        : o == "Carrat"
        ? n * 4.536e6
        : o == "Atomic Mass Unit"
        ? n * 5.463e29
        : n,
    "Long Ton": (o, n) =>
      o == "Gram"
        ? n * 1.016e6
        : o == "Milligram"
        ? n * 1.016e9
        : o == "Metric Ton"
        ? n * 1.12
        : o == "Kilogram"
        ? n * 1016
        : o == "Pound"
        ? n * 2240
        : o == "Ounce"
        ? n * 35840
        : o == "Carrat"
        ? n * 5.08e6
        : o == "Atomic Mass Unit"
        ? n * 6.119e29
        : n,

    Pound: (o, n) =>
      o == "Gram"
        ? n * 453.6
        : o == "Milligram"
        ? n * 453600
        : o == "Metric Ton"
        ? n / 2000
        : o == "Long Ton"
        ? n / 2240
        : o == "Kilogram"
        ? n / 2.205
        : o == "Ounce"
        ? n * 16
        : o == "Carrat"
        ? n / 2268
        : o == "Atomic Mass Unit"
        ? n / 2.732e26
        : n,
    Ounce: (o, n) =>
      o == "Gram"
        ? n * 28.35
        : o == "Milligram"
        ? n * 28350
        : o == "Metric Ton"
        ? n / 32000
        : o == "Long Ton"
        ? n / 35840
        : o == "Pound"
        ? n / 16
        : o == "Kilogram"
        ? n / 35.274
        : o == "Carrat"
        ? n * 141.7
        : o == "Atomic Mass Unit"
        ? n * 1.707e25
        : n,
    Carrat: (o, n) =>
      o == "Gram"
        ? n / 5
        : o == "Milligram"
        ? n * 200
        : o == "Metric Ton"
        ? n / 4.536e6
        : o == "Long Ton"
        ? n / 5.08e6
        : o == "Pound"
        ? n / 2268
        : o == "Ounce"
        ? n / 141.7
        : o == "Kilogram"
        ? n / 5000
        : o == "Atomic Mass Unit"
        ? n * 1.204e23
        : n,
    "Atomic Mass Unit": (o, n) =>
      o == "Gram"
        ? n / 6.022e23
        : o == "Milligram"
        ? n / 6.022e20
        : o == "Metric Ton"
        ? n / 5.463e29
        : o == "Long Ton"
        ? n / 6.119e29
        : o == "Pound"
        ? n / 2.732e26
        : o == "Ounce"
        ? n / 1.707e25
        : o == "Carrat"
        ? n / 1.204e23
        : o == "Kilogram"
        ? n / 6.022e26
        : n,
  };

  useEffect(() => {
    if (num.length && fromopc && toopc && !isNaN(num)) {
      if (fromopc !== toopc) {
        setResult(PESOS[fromopc](toopc, num));
      }
      if (fromopc === toopc) {
        setResult(num);
      }
    }
  }, [num, fromopc, toopc]);
  return (
    <div>
      <Input
        datos={Pesos}
        num={setNum}
        from={setFromopc}
        to={setToopc}
        reult={result}
      />
    </div>
  );
};
export default Peso;
/** (o, n) =>
      o == ""
        ? n 
        : o == ""
        ? n 
        : o == ""
        ? n 
        : o == ""
        ? n 
        : o == ""
        ? n 
        : o == ""
        ? n 
        : o == ""
        ? n 
        : o == ""
        ? n 
        : o == ""
        ? n 
        : o == ""
        ? n 
         : o == ""
        ? n 
        
        : n, */
