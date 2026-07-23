import { Route } from "react-router-dom";

import Dashboard from "../pages/landlord/Dashboard/Dashboard";

export default function LandlordRoutes() {
  return (
    <Route path="/landlord">
      <Route path="dashboard" element={<Dashboard />} />
    </Route>
  );
}