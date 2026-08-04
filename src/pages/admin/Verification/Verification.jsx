import { useEffect, useState } from "react";

import VerificationStats from "../../../components/admin/VerificationStats/VerificationStats";
import VerificationFilters from "../../../components/admin/VerificationFilters/VerificationFilters";
import VerificationTable from "../../../components/admin/VerificationTable/VerificationTable";
import VerificationDetails from "../../../components/admin/VerificationDetails/VerificationDetails";
import ApproveVerificationModal from "../../../components/admin/ApproveVerificationModal/ApproveVerificationModal";
import RejectVerificationModal from "../../../components/admin/RejectVerificationModal/RejectVerificationModal";

import verificationService from "../../../services/verification.service";

import "./Verification.css";

function Verification() {
  const [verifications, setVerifications] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [selectedVerification, setSelectedVerification] =
    useState(null);

  const [showApprove, setShowApprove] =
    useState(false);

  const [showReject, setShowReject] =
    useState(false);

  const [filters, setFilters] = useState({
    search: "",
    type: "",
    status: "",
    date: "",
  });

  useEffect(() => {
    async function loadVerifications() {
      try {
        setLoading(true);

        const { data } = await verificationService.getVerifications();

        setVerifications(data.verifications || []);
      } catch (error) {
        console.error(error);
        setVerifications([]);
      } finally {
        setLoading(false);
      }
    }

    loadVerifications();
  }, []);

  return (
    <div className="admin-verification-page">

      <div className="page-header">

        <div>

          <h1>Verification</h1>

          <p>
            Review identity verification requests.
          </p>

        </div>

      </div>

      <VerificationStats />

      <VerificationFilters
        filters={filters}
        setFilters={setFilters}
      />

      <div className="verification-content">

        <div className="verification-table-section">

          <VerificationTable
            verifications={verifications}
            loading={loading}
            onSelect={
              setSelectedVerification
            }
            onApprove={(verification) => {
              setSelectedVerification(
                verification
              );
              setShowApprove(true);
            }}
            onReject={(verification) => {
              setSelectedVerification(
                verification
              );
              setShowReject(true);
            }}
          />

        </div>

        {selectedVerification && (

          <div className="verification-side-panel">

            <VerificationDetails
              verification={
                selectedVerification
              }
            />

          </div>

        )}

      </div>

      {showApprove && (

        <ApproveVerificationModal
          verification={
            selectedVerification
          }
          onClose={() =>
            setShowApprove(false)
          }
          onConfirm={(id) =>
            console.log(id)
          }
        />

      )}

      {showReject && (

        <RejectVerificationModal
          verification={
            selectedVerification
          }
          onClose={() =>
            setShowReject(false)
          }
          onConfirm={(data) =>
            console.log(data)
          }
        />

      )}

    </div>
  );
}

export default Verification;