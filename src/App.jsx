import {useState} from "react";
import logo from "./logo.svg";
import "./App.css";
import VendingMachineApp from "./VendingMachineApp";
import RoutesList from "./RoutesList";
import {BrowserRouter} from "react-router-dom";
import Nav from "./Nav";

/** Component for entire page.
 *
 * Props: none
 * State: none
 *
 */

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <RoutesList />
      </BrowserRouter>
    </div>
  );
}

export default App;
