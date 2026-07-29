import { useState } from "react";

import DashboardLayout from "../../../components/dashboard/DashboardLayout/DashboardLayout";

import MaintenanceStats from "../../../components/tenant/MaintenanceStats/MaintenanceStats";
import RequestForm from "../../../components/tenant/RequestForm/RequestForm";
import RequestList from "../../../components/tenant/RequestList/RequestList";

import "./Maintenance.css";

export default function Maintenance() {
  const [requests] = useState([]);

  const [loading] = useState(false);

  return (
    <DashboardLayout role="tenant">

      <div className="tenant-maintenance-page">

        <div className="page-header">

          <div>

            <h1>Maintenance Requests</h1>

            <p>
              Report issues, monitor repairs and
              communicate with your landlord.
            </p>

          </div>

        </div>

        <MaintenanceStats />

        <div className="maintenance-grid">

          <div className="maintenance-left">

            <RequestForm />

          </div>

          <div className="maintenance-right">

            <RequestList
              requests={requests}
              loading={loading}
            />

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}