import React from "react";
import {NavLink} from "react-router-dom";

import "./Nav.css";

function Nav() {
  return (
    <nav className="NavBar">
      <ul>
        <li>
          <NavLink to="/">Vending Machine</NavLink>
        </li>
        <li>
          <NavLink to="/snack/snickers">Snickers</NavLink>
        </li>
        <li>
          <NavLink to="/snack/coke">Coke</NavLink>
        </li>
        <li>
          <NavLink to="/snack/chips">Chips</NavLink>
        </li>
      </ul>
    </nav>
  );
}
// end

export default Nav;
