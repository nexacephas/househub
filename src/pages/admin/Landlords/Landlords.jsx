import { useEffect, useState } from "react";

import LandlordStats from "../../../components/admin/LandlordStats/LandlordStats";
import LandlordFilters from "../../../components/admin/LandlordFilters/LandlordFilters";
import LandlordTable from "../../../components/admin/LandlordTable/LandlordTable";
import LandlordDetails from "../../../components/admin/LandlordDetails/LandlordDetails";
import LandlordVerification from "../../../components/admin/LandlordVerification/LandlordVerification";
import SuspendLandlordModal from "../../../components/admin/SuspendLandlordModal/SuspendLandlordModal";
import DeleteLandlordModal from "../../../components/admin/DeleteLandlordModal/DeleteLandlordModal";

import landlordService from "../../../services/landlord.service";

import "./Landlords.css";

function Landlords() {
  const [landlords, setLandlords] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedLandlord, setSelectedLandlord] =
    useState(null);

  const [showSuspend, setShowSuspend] =
    useState(false);

  const [showDelete, setShowDelete] =
    useState(false);

  const [filters, setFilters] = useState({
    search: "",
    status: "",
    verification: "",
    propertyCount: "",
  });

  async function loadLandlords() {
    try {
      setLoading(true);

      const { data } =
        await landlordService.getLandlords();

      setLandlords(data.landlords || []);
    } catch (error) {
      console.error(error);
      setLandlords([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadLandlords();
  }, [filters]);

  return (
    <div className="admin-landlords-page">

      <div className="page-header">

        <div>

          <h1>Landlords</h1>

          <p>
            Manage landlords and property owners.
          </p>

        </div>

      </div>

      <LandlordStats />

      <LandlordFilters
        filters={filters}
        setFilters={setFilters}
      />

      <div className="landlords-content">

        <div className="landlords-table">

          <LandlordTable
            landlords={landlords}
            loading={loading}
            onSelect={setSelectedLandlord}
            onVerify={setSelectedLandlord}
            onSuspend={(landlord) => {
              setSelectedLandlord(landlord);
              setShowSuspend(true);
            }}
            onDelete={(landlord) => {
              setSelectedLandlord(landlord);
              setShowDelete(true);
            }}
          />

        </div>

        {selectedLandlord && (

          <div className="landlord-side-panel">

            <LandlordDetails
              landlord={selectedLandlord}
            />

            <LandlordVerification
              landlord={selectedLandlord}
              onApprove={() =>
                console.log("Approve")
              }
              onReject={() =>
                console.log("Reject")
              }
            />

          </div>

        )}

      </div>

      {showSuspend && (

        <SuspendLandlordModal
          landlord={selectedLandlord}
          onClose={() => setShowSuspend(false)}
          onConfirm={(data) =>
            console.log(data)
          }
        />

      )}

      {showDelete && (

        <DeleteLandlordModal
          landlord={selectedLandlord}
          onClose={() => setShowDelete(false)}
          onConfirm={(id) =>
            console.log(id)
          }
        />

      )}

    </div>
  );
}

export default Landlords;