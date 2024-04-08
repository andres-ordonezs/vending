import React from "react";

import Snack from "./Snack";

const SNACKS = ["Snickers", "Coke", "Chips"];

/**
 *
 *
 */
function VendingMachineApp({snacks = SNACKS}) {
  return (
    <div>
      <h1>Vending Machine</h1>
      {snacks.map((snack) => (
        <Snack key={snack} title={snack} />
      ))}
    </div>
  );
}

export default VendingMachineApp;
