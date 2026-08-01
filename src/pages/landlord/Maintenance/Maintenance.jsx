import { useEffect, useState } from "react";

import MaintenanceStats from "../../../components/landlord/MaintenanceStats/MaintenanceStats";
import MaintenanceFilters from "../../../components/landlord/MaintenanceFilters/MaintenanceFilters";
import MaintenanceTable from "../../../components/landlord/MaintenanceTable/MaintenanceTable";
import MaintenanceForm from "../../../components/landlord/MaintenanceForm/MaintenanceForm";
import MaintenanceTimeline from "../../../components/landlord/MaintenanceTimeline/MaintenanceTimeline";
import MaintenanceGallery from "../../../components/landlord/MaintenanceGallery/MaintenanceGallery";
import DeleteMaintenanceModal from "../../../components/landlord/DeleteMaintenanceModal/DeleteMaintenanceModal";

import maintenanceService from "../../../services/maintenance.service";

import "./Maintenance.css";

function Maintenance() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

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
    loadRequests();
  }, []);

  async function loadRequests() {
    try {
      setLoading(true);

      const { data } = await maintenanceService.getRequests();

      setRequests(data.requests || []);
    } catch (error) {
      console.error(error);
      setRequests([]);
    } finally {
      setLoading(false);
    }
  }

  return (
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
          + New Request
        </button>

      </div>

      {/* Stats */}

      <MaintenanceStats />

      {/* Filters */}

      <MaintenanceFilters
        filters={filters}
        setFilters={setFilters}
      />

      {/* Main Content */}

      <div className="maintenance-content">

        <div className="maintenance-list">

          <MaintenanceTable
            requests={requests}
            loading={loading}
            onDelete={(request) => {
              setSelectedRequest(request);
              setShowDelete(true);
            }}
          />

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
  );
}

export default Maintenance;