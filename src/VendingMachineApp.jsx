import React from "react";
import { Link } from "react-router-dom";

import Snack from "./Snack";

const SNACKS = ["Snickers", "Coke", "Chips"];

/**
 *
 *
 */
function VendingMachineApp({ snacks = SNACKS }) {
  return (
    <div>
      <h1>Vending Machine</h1>
      <ul>
        {snacks.map((snack) => (
          <li key={snack}>
            <Link to={`/snack/${snack}`}>{snack}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VendingMachineApp;
