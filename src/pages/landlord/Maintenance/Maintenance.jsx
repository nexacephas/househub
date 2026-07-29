import { useState } from "react";

import MaintenanceStats from "../../../components/landlord/MaintenanceStats/MaintenanceStats";
import MaintenanceFilters from "../../../components/landlord/MaintenanceFilters/MaintenanceFilters";
import MaintenanceTable from "../../../components/landlord/MaintenanceTable/MaintenanceTable";
import MaintenanceDetails from "../../../components/landlord/MaintenanceDetails/MaintenanceDetails";
import MaintenanceForm from "../../../components/landlord/MaintenanceForm/MaintenanceForm";
import MaintenanceTimeline from "../../../components/landlord/MaintenanceTimeline/MaintenanceTimeline";
import MaintenanceGallery from "../../../components/landlord/MaintenanceGallery/MaintenanceGallery";
import DeleteMaintenanceModal from "../../../components/landlord/DeleteMaintenanceModal/DeleteMaintenanceModal";

import "./Maintenance.css";


function Maintenance() {

  const [selectedRequest, setSelectedRequest] = useState(null);

  const [showForm, setShowForm] = useState(false);

  const [showDelete, setShowDelete] = useState(false);


  return (
    <div className="maintenance-page">

      {/* Header */}
      <div className="maintenance-header">

        <div>
          <h1>
            Maintenance
          </h1>

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



      {/* Statistics */}

      <MaintenanceStats />



      {/* Filters */}

      <MaintenanceFilters />



      {/* Main Content */}

      <div className="maintenance-content">


        <div className="maintenance-list">

          <MaintenanceTable
            onSelect={setSelectedRequest}
          />

        </div>



        {
          selectedRequest && (

            <div className="maintenance-details-panel">

              <MaintenanceDetails
                request={selectedRequest}
              />


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

          )
        }


      </div>



      {/* Create Maintenance */}

      {
        showForm && (

          <MaintenanceForm
            onClose={() => setShowForm(false)}
          />

        )
      }



      {/* Delete Modal */}

      {
        showDelete && (

          <DeleteMaintenanceModal

            request={selectedRequest}

            onClose={() => setShowDelete(false)}

          />

        )
      }


    </div>
  );
}


export default Maintenance;