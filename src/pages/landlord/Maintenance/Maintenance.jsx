import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import MaintenanceStats from "../../../components/landlord/MaintenanceStats/MaintenanceStats";
import MaintenanceFilters from "../../../components/landlord/MaintenanceFilters/MaintenanceFilters";
import MaintenanceTable from "../../../components/landlord/MaintenanceTable/MaintenanceTable";
import MaintenanceForm from "../../../components/landlord/MaintenanceForm/MaintenanceForm";
import MaintenanceTimeline from "../../../components/landlord/MaintenanceTimeline/MaintenanceTimeline";
import MaintenanceGallery from "../../../components/landlord/MaintenanceGallery/MaintenanceGallery";
import DeleteMaintenanceModal from "../../../components/landlord/DeleteMaintenanceModal/DeleteMaintenanceModal";
import DashboardLayout from "../../../components/dashboard/DashboardLayout/DashboardLayout";
import StatePanel from "../../../components/common/StatePanel";
import maintenanceService from "../../../services/maintenance.service";


import "./Maintenance.css";

function Maintenance() {
  const [requests, setRequests] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [selectedRequest, setSelectedRequest] = useState(null);

  const [showForm, setShowForm] = useState(false);

  const [showDelete, setShowDelete] = useState(false);

  const [filters, setFilters] = useState({
    search: "",
    priority: "",
    status: "",
    property: "",
    technician: "",
  });

  useEffect(() => {
    let isMounted = true;

    async function loadRequests() {
      try {
        setLoading(true);
        setError("");

        const [requestsRes, statsRes] = await Promise.all([
          maintenanceService.getRequests(),
          maintenanceService.getStats().catch(() => null),
        ]);

        if (!isMounted) return;

        const nextRequests = requestsRes?.data?.requests || requestsRes?.data?.maintenance || [];
        const nextStats = statsRes?.data?.stats || null;

        setRequests(nextRequests);
        setStats(nextStats);
      } catch (error) {
        if (!isMounted) return;
        console.error(error);
        setRequests([]);
        setStats(null);
        setError(error.message || "Unable to load maintenance records.");
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
    <DashboardLayout role="landlord">
    <div className="maintenance-page">

      {/* Header */}

      <div className="maintenance-header">

        <div>
          <h1>Maintenance</h1>

          <p>
            Manage tenant repair requests and property issues.
          </p>
        </div>



<button
  className="maintenance-add-btn"
  onClick={() => setShowForm(true)}
>
  <Plus size={18} />
  New Request
</button>

      </div>

      {/* Stats */}

      {loading ? (
        <MaintenanceStats loading={true} stats={null} />
      ) : error ? (
        <StatePanel status="error" title="Unable to load maintenance" message={error} onRetry={() => window.location.reload()} />
      ) : (
        <MaintenanceStats loading={false} stats={stats} />
      )}

      {/* Filters */}

      <MaintenanceFilters
        filters={filters}
        setFilters={setFilters}
      />

      {/* Main Content */}

      <div className="maintenance-content">

        <div className="maintenance-list">

          {loading ? (
            <MaintenanceTable requests={[]} loading={true} onDelete={() => {}} />
          ) : error ? (
            <StatePanel status="error" title="Unable to load maintenance" message={error} onRetry={() => window.location.reload()} />
          ) : !requests.length ? (
            <StatePanel status="empty" title="No maintenance requests" message="There are no maintenance requests to show right now." />
          ) : (
            <MaintenanceTable
              requests={requests}
              loading={false}
              onDelete={(request) => {
                setSelectedRequest(request);
                setShowDelete(true);
              }}
            />
          )}

        </div>

        {selectedRequest && (

          <div className="maintenance-details-panel">

            <MaintenanceTimeline
              request={selectedRequest}
            />

            <MaintenanceGallery
              request={selectedRequest}
            />

            <button
              className="delete-maintenance-btn"
              onClick={() => setShowDelete(true)}
            >
              Delete Request
            </button>

          </div>

        )}

      </div>

      {/* Create Form */}

      {showForm && (
        <MaintenanceForm
          onClose={() => setShowForm(false)}
        />
      )}

      {/* Delete Modal */}

      {showDelete && (
        <DeleteMaintenanceModal
          request={selectedRequest}
          onClose={() => setShowDelete(false)}
        />
      )}

    </div>
    </DashboardLayout>
  );
}

export default Maintenance;