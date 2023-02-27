import React from "react";
import { NavLink } from "react-router-dom";
import "../app.css";
function Navbar() {
  return (
    <div className="container__nav">
      <ul>
        <li>
          <NavLink
            to="/Long"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            longitud
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Temp"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Temperatura
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Area"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            Area
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/peso"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {" "}
            Peso
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Tiempo"
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
