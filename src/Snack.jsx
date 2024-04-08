import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import "./Snack.css";

/**
 *
 *
 */
{/* <Route path="/snack/:title" element={<Snack />} /> */}


function Snack() {
  const { snack_name } = useParams()

  // TODO: return a 404 here
  // if (!title) return
  return (
    <div className="Snack">
      <h2>{snack_name}</h2>
      <Link to={'/'} > Go Back </Link>
    </div>
  );
}

export default Snack;
