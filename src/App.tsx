import React from "react";
import { Routes, Route } from "react-router-dom";
import OrderCardPage from "./pages/OrderCard";
import DashboardLayout from "./layout/Dashboard";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        // element={<Layout />}
      >
        <Route index element={<OrderCardPage />} />
      </Route>
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<OrderCardPage />} />
      </Route>
    </Routes>
  );
}

export default App;
