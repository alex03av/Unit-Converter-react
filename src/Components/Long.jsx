import Input from "../Components/Input";
import React, { useEffect, useState } from "react";
import {long} from './unit'
function Long() {
  const [num, setNum] = useState(0);
  const [fromopc, setFromopc] = useState(0);
  const [toopc, setToopc] = useState(0);
  const [result, setResult] = useState(0);
  const LONGITUDES = {
    Meter: (o, n) =>
        o == "Kilometer"? n / 1000 : o == "Centimeter"? n * 100: o == "Millimeter"
        ? n * 1000: o == "Micrometer"? n * 1e6: o == "Nanometer"? n * 1e9
        : o == "Mile"? n / 1609: o == "Yard"? n * 1.094: n,
    Kilometer: (o, n) =>
        o == "Meter"? n * 1000: o == "Centimeter"? n * 1000: o == "Millimeter"
        ? n * 1e6: o == "Micrometer"? n * 1e9: o == "Nanometer"? n * 1e12: o == "Mile"
        ? n / 1609: o == "Yard"? n * 1094: "",
    Centimeter: (o, n) =>
      o == "Kilometer"? n/100000: o == "Meter"? n/100: o == "Millimeter"? 
      n*10: o == "Micrometer"? n*10000: o == "Nanometer"? n*1e+7: o == "Mile"
      ? n/160900: o == "Yard"? n/91.44: n,
    Millimeter: (o, n) =>
        o == "Kilometer"? n/1e+6: o == "Centimeter"? n/10: o == "Meter"
        ? n/1000: o == "Micrometer"? n*1000 : o == "Nanometer"? n*1e+6
        : o == "Mile"? n/1.609e+6: o == "Yard"? n/914.4 : "",
    Micrometer: (o, n) =>
      o == "Kilometer"? n/1e+9: o == "Centimeter"? n/10000: o == "Millimeter"
        ? n/1000: o == "Meter"? n/1e+6: o == "Nanometer"? n*1000: o == "Mile"
        ? n/1.609e+9: o == "Yard"? n/914400: "",
    Nanometer: (o, n) =>
       o == "Kilometer"? n/1e+12: o == "Centimeter"? n/1e+7: o == "Millimeter"
        ? n/1e+6: o == "Micrometer"? n/1000: o == "Meter"? n/1e+9: o == "Mile"
        ? n/1.609e+12 : o == "Yard"? n/ 9.144e+8: n,
    Mile: (o, n) =>
     o == "Kilometer"? n*1.609: o == "Centimeter"? n*160900: o == "Millimeter"
     ? n*1.609e+6: o == "Micrometer"? n*1.609e+9: o == "Nanometer"? n* 1.609e+12
     : o == "Meter"? n*1609: o == "Yard"? n*1760: n,
    Yard: (o, n) =>
     o == "Kilometer"? n/1094: o == "Centimeter"? n*91.44: o == "Millimeter"? n*914.4
    : o == "Micrometer"? n*914400: o == "Nanometer"? n*9.144e+8: o == "Mile"? n/1760
    : o == "meter"? n/1.094: n,
   
  };

  useEffect(() => {
    if (num.length && fromopc && toopc && !isNaN(num)) {
      console.log("entro");
      if (fromopc !== toopc) {
        setResult(LONGITUDES[fromopc](toopc, num));
      }
      if (fromopc === toopc) {
        setResult(num);
      }
    }
    console.log(result);
  }, [num, fromopc, toopc]);
  return (
    <div>
      <Input
        datos={long}
       
        num={setNum}
        from={setFromopc}
        to={setToopc}
        reult={result}
      />
    </div>
  );
}

export default Long;
