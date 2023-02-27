import React, { useEffect, useState } from "react";
import { Areas } from "./unit";
import Input from "../Components/Input";

const Area = () => {
  const [num, setNum] = useState(0);
  const [fromopc, setFromopc] = useState(0);
  const [toopc, setToopc] = useState(0);
  const [result, setResult] = useState(0);

  const AREASOPC = {
    "Square Meter": (o, n) =>
      o == "Square Kilometer"
        ? n / 1e6
        : o == "Square Centimeter"
        ? n * 10000
        : o == "Square Millimeter"
        ? n * 1e6
        : o == "Square Micrometer"
        ? n * 1e12
        : o == "Hectare"
        ? n / 10000
        : o == "Square Mile"
        ? n / 2.59e6
        : o == "Square Yard"
        ? n * 1.196
        : o == "Square Foot"
        ? n * 10.764
        : o == "Square Inch"
        ? n * 1550
        : n,
    "Square Kilometer": (o, n) =>
      o == "Square Meter"
        ? n * 1e6
        : o == "Square Centimeter"
        ? n * 1e10
        : o == "Square Millimeter"
        ? n * 1e12
        : o == "Square Micrometer"
        ? n * 1e18
        : o == "Hectare"
        ? n * 100
        : o == "Square Mile"
        ? n / 2.59
        : o == "Square Yard"
        ? n * 1.196e6
        : o == "Square Foot"
        ? n * 1.076e7
        : o == "Square Inch"
        ? n * 1.55e9
        : n,
    "Square Centimeter": (o, n) =>
      o == "Square Kilometer"
        ? n / 1e10
        : o == "Square Meter"
        ? n / 10000
        : o == "Square Millimeter"
        ? n * 100
        : o == "Square Micrometer"
        ? n * 1e8
        : o == "Hectare"
        ? n / 1e8
        : o == "Square Mile"
        ? n / 2.59e10
        : o == "Square Yard"
        ? n / 8361
        : o == "Square Foot"
        ? n / 929
        : o == "Square Inch"
        ? n / 6.452
        : n,
    "Square Millimeter": (o, n) =>
      o == "Square Kilometer"
        ? n / 1e12
        : o == "Square Centimeter"
        ? n / 100
        : o == "Square Meter"
        ? n / 1e6
        : o == "Square Micrometer"
        ? n * 1e6
        : o == "Hectare"
        ? n / 1e10
        : o == "Square Mile"
        ? n / 2.59e12
        : o == "Square Yard"
        ? n / 836100
        : o == "Square Foot"
        ? n / 92900
        : o == "Square Inch"
        ? n / 645.2
        : n,
    "Square Micrometer": (o, n) =>
      o == "Square Kilometer"
        ? n / 1e18
        : o == "Square Centimeter"
        ? n / 1e8
        : o == "Square Millimeter"
        ? n / 1e6
        : o == "Square Meter"
        ? n / 1e12
        : o == "Hectare"
        ? n / 1e16
        : o == "Square Mile"
        ? n / 2.59e18
        : o == "Square Yard"
        ? n / 8.361e11
        : o == "Square Foot"
        ? n / 9.29e10
        : o == "Square Inch"
        ? n / 6.452e8
        : n,
    " Hectare": (o, n) =>
      o == "Square Kilometer"
        ? n / 100
        : o == "Square Centimeter"
        ? n * 1e8
        : o == "Square Millimeter"
        ? n * 1e10
        : o == "Square Micrometer"
        ? n * 1e16
        : o == "Square Meter"
        ? n * 10000
        : o == "Square Mile"
        ? n * 259
        : o == "Square Yard"
        ? n * 11960
        : o == "Square Foot"
        ? n * 107600
        : o == "Square Inch"
        ? n * 1.55e7
        : n,
    "Square Mile": (o, n) =>
      o == "Square Kilometer"
        ? n * 2.59
        : o == "Square Centimeter"
        ? n * 2.59e10
        : o == "Square Millimeter"
        ? n * 1.609e6
        : o == "Square Micrometer"
        ? n * 1.609e9
        : o == "Hectare"
        ? n * 259
        : o == "Square Meter"
        ? n * 2.59e6
        : o == "Square Yard"
        ? n * 3.098e6
        : o == "Square Foot"
        ? n * 2.788e7
        : o == "Square Inch"
        ? n * 4.014e9
        : n,
    "Square Yard": (o, n) =>
      o == "Square Kilometer"
        ? n
        : o == "Square Centimeter"
        ? n
        : o == "Square Millimeter"
        ? n
        : o == "Square Micrometer"
        ? n
        : o == "Hectare"
        ? n
        : o == "Square Mile"
        ? n
        : o == "Square Meter"
        ? n
        : o == "Square Foot"
        ? n
        : o == "Square Foot"
        ? n
        : o == "Square Inch"
        ? n
        : n,
    "Square Foot": (o, n) =>
      o == "Square Kilometer"
        ? n
        : o == "Square Centimeter"
        ? n
        : o == "Square Millimeter"
        ? n
        : o == "Square Micrometer"
        ? n
        : o == "Hectare"
        ? n
        : o == "Square Mile"
        ? n
        : o == "Square Yard"
        ? n
        : o == "Square Meter"
        ? n
        : o == "Square Inch"
        ? n
        : n,
    "Square Inch": (o, n) =>
      o == "Square Kilometer"
        ? n
        : o == "Square Centimeter"
        ? n
        : o == "Square Millimeter"
        ? n
        : o == "Square Micrometer"
        ? n
        : o == "Hectare"
        ? n
        : o == "Square Mile"
        ? n
        : o == "Square Yard"
        ? n
        : o == "Square Foot"
        ? n
        : o == "Square Meter"
        ? n
        : n,
  };

  useEffect(() => {
    if (num.length && fromopc && toopc && !isNaN(num)) {
      if (fromopc !== toopc) {
        setResult(AREASOPC[fromopc](toopc, num));
      }
      if (fromopc === toopc) {
        setResult(num);
      }
    }
  }, [num, fromopc, toopc]);
  return (
    <div>
      <Input
        datos={Areas}
        num={setNum}
        from={setFromopc}
        to={setToopc}
        reult={result}
      />
    </div>
  );
};

export default Area;
