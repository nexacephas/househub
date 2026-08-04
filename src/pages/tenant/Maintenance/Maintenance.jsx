import { useEffect, useState } from "react";

import DashboardLayout from "../../../components/dashboard/DashboardLayout/DashboardLayout";

import MaintenanceStats from "../../../components/tenant/MaintenanceStats/MaintenanceStats";
import RequestForm from "../../../components/tenant/RequestForm/RequestForm";
import RequestList from "../../../components/tenant/RequestList/RequestList";
import StatePanel from "../../../components/common/StatePanel";
import maintenanceService from "../../../services/maintenance.service";

import "./Maintenance.css";

export default function Maintenance() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function loadRequests() {
      try {
        setLoading(true);
        setError("");
        const { data } = await maintenanceService.getRequests();

        if (!isMounted) return;
        setRequests(data.requests || data.maintenance || []);
      } catch (err) {
        if (!isMounted) return;
        setError(err.message || "Unable to load maintenance requests.");
        setRequests([]);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    loadRequests();

    return () => {
      isMounted = false;
    };
  }, []);

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

        {loading ? (
          <StatePanel status="loading" title="Loading maintenance requests" message="Fetching your repair history." />
        ) : error ? (
          <StatePanel status="error" title="Unable to load requests" message={error} onRetry={() => window.location.reload()} />
        ) : (
          <MaintenanceStats requests={requests} />
        )}

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