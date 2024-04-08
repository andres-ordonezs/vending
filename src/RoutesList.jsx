import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Snack from "./Snack";
import VendingMachineApp from "./VendingMachineApp";

function RoutesList() {
    return (
        <Routes>
            <Route path="/snack/:snack_name" element={<Snack />} />
            <Route path="/" element={<VendingMachineApp />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}

export default RoutesList;