import React, { useEffect, useState } from "react";
import Input from "../Components/Input";
import {Temps} from './unit'
const Temp = () => {
  const [num, setNum] = useState(0);
  const [fromopc, setFromopc] = useState(0);
  const [toopc, setToopc] = useState(0);
  const [result, setResult] = useState(0);

  const OPCRESULT = {
    Fahrenheit: (o, n) =>
      o == "Celsius" ? ((n - 32) * 5) / 9 : ((n - 32) * 5) / 9 + 273.15,
    Celsius: (o, n) => (o == "Kelvin" ? n + 273.15 : (n * 9) / 5 + 32),
    Kelvin: (o, n) =>
      o == "Fahrenheit" ? ((n - 273.15) * 9) / 5 + 32 : n - 273.15,
  };
  useEffect(() => {
    if ( num.length &&fromopc&&toopc &&!isNaN(num)) {
      console.log("entro");
      if (fromopc !== toopc) {
        setResult(OPCRESULT[fromopc](toopc, num));
      } if(fromopc === toopc) {
        setResult(num);
      }
    }
    console.log(result);
  }, [num, fromopc, toopc]);

  return (
    <div>
      <Input
        datos={Temps}
        num={setNum}
        from={setFromopc}
        to={setToopc}
        reult={result}
      />
    </div>
  );
};

export default Temp;
