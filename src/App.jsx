import {useState} from "react";
import logo from "./logo.svg";
import "./App.css";
import VendingMachineApp from "./VendingMachineApp";

/** Component for entire page.
 *
 * Props: none
 * State: none
 *
 */

function App() {
  function incrCount() {
    setCount((count) => count + 1);
  }

  return (
    <div className="App">
      <VendingMachineApp />
    </div>
  );
}

export default App;
