import React, { useEffect, useState } from "react";
import Input from "../Components/Input";
import { Times } from "./unit";
const Tiempo = () => {
  const [num, setNum] = useState(0);
  const [fromopc, setFromopc] = useState(0);
  const [toopc, setToopc] = useState(0);
  const [result, setResult] = useState(0);
  const TIEMPOS = {
    Second: (o, n) =>
      o == "Millisecond"? n * 1000: o == "Microsecond"? n * 1e6: o == "Nanosecond"
        ? n * 1e9: o == "Picosecond"? n * 1e12: o == "Minute"? n / 60: o == "Hour"
        ? n / 3600: o == "Day"? n / 86400: o == "Month"? n / 2.628e6: o == "Year"
        ?n / 3.154e7: o == "Week"? n / 604800: n,
    Millisecond: (o, n) =>
      o == "Second"? n / 1000: o == "Microsecond"? n * 1000: o == "Nanosecond"
        ? n * 1e6: o == "Picosecond"? n * 1e9: o == "Minute"? n / 60000
        : o == "Hour"? n / 3.6e6: o == "Day"? n / 8.64e7: o == "Month"? n / 2.628e9
        : o == "Year"? n / 3.154e10: o == "Week" ? n / 6.048e8: n,
    Microsecond: (o, n) =>
      o == "Millisecond"? n: o == "Second"? n / 1e6: o == "Nanosecond"? n * 1000
        : o == "Picosecond"? n * 1e6: o == "Minute"? n / 6e7 : o == "Hour"? n / 3.6e9
        : o == "Day"? n / 8.64e10: o == "Month"? n / 2.628e12: o == "Year"? n / 3.154e13
        : o == "Week"? n / 6.048e11: n,
    Nanosecond: (o, n) =>
      o == "Millisecond"? n / 1e6 : o == "Microsecond"? n / 1000: o == "Second"
        ? n / 1e9: o == "Picosecond"? n / 1000: o == "Minute"? n / 6e10: o == "Hour"
        ? n / 3.6e12: o == "Day"? n / 8.64e13: o == "Month"? n / 2.628e15: o == "Year"
        ? n / 3.154e16: o == "Week"? n / 6.048e14: n,
    Picosecond: (o, n) =>
      o == "Millisecond"? n / 1e9: o == "Microsecond"? n / 1e6: o == "Nanosecond"
        ? n / 1000: o == "Second"? n / 1e12: o == "Minute"? n / 6e13
        : o == "Hour"? n / 3.6e15: o == "Day"? n / 8.64e16: o == "Month"? n / 2628e18
        : o == "Year"? n / 3.154e19: o == "Week"? n / 6.048e17: n,
    Minute: (o, n) =>
      o == "Millisecond"? n * 60000: o == "Microsecond"? n * 6e7: o == "Nanosecond"
        ? n * 6e10: o == "Picosecond"? n * 6e13: o == "Second"? n * 60: o == "Hour"
        ? n / 60: o == "Day"? n / 1440: o == "Month"? n / 43800: o == "Year"? n / 525600
        : o == "Week"? n / 10080: n,
    Hour: (o, n) =>
      o == "Millisecond"? n * 3.6e6: o == "Microsecond"? n * 3.6e9: o == "Nanosecond"
        ? n * 3.6e12: o == "Picosecond"? n * 3.6e6: o == "Minute"? n * 60: o == "Second"
        ? n * 3600: o == "Day"? n * 24: o == "Month"? n / 730: o == "Year"? n / 8760
        : o == "Week"? n / 168: n,
    Day: (o, n) =>
      o == "Millisecond"? n * 8.64e7: o == "Microsecond"? n * 8.64e16: o == "Nanosecond"
        ? n * 8.64e16: o == "Picosecond"? n * 8.64e16: o == "Minute"? n * 1440
        : o == "Hour"? n * 24: o == "Second"? n * 86400: o == "Month"? n / 30.417
        : o == "Year"? n / 365 : o == "Week"? n / 7: n,
    Month: (o, n) =>
      o == "Millisecond"? n * 2.628e9: o == "Microsecond"? n * 2.628e12: o == "Nanosecond"
        ? n * 2.628e15: o == "Picosecond"? n * 2.628e18: o == "Minute"? n * 43800
        : o == "Hour"? n * 730: o == "Day"? n * 30.417: o == "Second"? n * 2.628e6
        : o == "Year"? n / 12: o == "Week"? n * 4.345: n,
    Year: (o, n) =>
      o == "Millisecond"? n * 3.154e10: o == "Microsecond"? n * 3.154e13: o == "Nanosecond"
        ? n * 3.154e16: o == "Picosecond"? n * 3.154e19: o == "Minute"? n * 525600
        : o == "Hour"? n * 8760: o == "Day"? n * 365: o == "Month"? n * 12: o == "Second"
        ? n * 3.154e7: o == "Week"? n * 52.143: n,
    Week: (o, n) =>
      o == "Millisecond"? n * 6.048e8: o == "Microsecond"? n * 6.048e11: o == "Nanosecond"
        ? n * 6.048e14: o == "Picosecond"? n * 6.048e17: o == "Minute"? n * 10080
        : o == "Hour"? n * 168: o == "Day"? n / 7: o == "Month"? n / 4.345: o == "Year"
        ? n / 52.143: o == "Second"? n * 604800: n,
  };
  useEffect(() => {
    if (num.length && fromopc && toopc && !isNaN(num)) {
      if (fromopc !== toopc) {
        setResult(TIEMPOS[fromopc](toopc, num));
      }
      if (fromopc === toopc) {
        setResult(num);
      }
    }
  }, [num, fromopc, toopc]);
  return (
    <div>
      <Input
        datos={Times}
        num={setNum}
        from={setFromopc}
        to={setToopc}
        reult={result}
      />
      
    </div>
  );
};

export default Tiempo;
