import React from "react";
import { NavLink } from "react-router-dom";
import "../app.css";
function Navbar() {
  return (
    <div className="container__nav">
      <ul>
        <li>
          <NavLink
            to="Unit-Converter-react/Long"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            longitud
          </NavLink>
        </li>
        <li>
          <NavLink
            to="Unit-Converter-react/Temp"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Temperatura
          </NavLink>
        </li>
        <li>
          <NavLink
            to="Unit-Converter-react/Area"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            Area
          </NavLink>
        </li>

        <li>
          <NavLink
            to="Unit-Converter-react/peso"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {" "}
            Peso
          </NavLink>
        </li>
        <li>
          <NavLink
            to="Unit-Converter-react/Tiempo"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Tiempo
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
