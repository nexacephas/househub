import "./LandlordVerification.css";

import {
  BadgeCheck,
  Clock3,
  XCircle,
  CheckCircle2,
} from "lucide-react";

export default function LandlordVerification({
  landlord,
  onApprove,
  onReject,
}) {
  if (!landlord) return null;

  const status =
    landlord.verificationStatus || "pending";

  return (
    <div className="landlord-verification">

      <div className="verification-header">

        <h3>Verification Status</h3>

        <span className={`verification-status ${status}`}>

          {status === "verified" && (
            <BadgeCheck size={16} />
          )}

          {status === "pending" && (
            <Clock3 size={16} />
          )}

          {status === "rejected" && (
            <XCircle size={16} />
          )}

          {status}

        </span>

      </div>

      <div className="verification-info">

        <div>
          <label>Government ID</label>

          <span>
            {landlord.idUploaded
              ? "Uploaded"
              : "Not Uploaded"}
          </span>
        </div>

        <div>
          <label>Proof of Address</label>

          <span>
            {landlord.addressProof
              ? "Uploaded"
              : "Not Uploaded"}
          </span>
        </div>

        <div>
          <label>Selfie Verification</label>

          <span>
            {landlord.selfieUploaded
              ? "Uploaded"
              : "Not Uploaded"}
          </span>
        </div>

      </div>

      {status !== "verified" && (

        <div className="verification-actions">

          <button
            className="approve-btn"
            onClick={() => onApprove(landlord)}
          >
            <CheckCircle2 size={18} />
            Approve
          </button>

          <button
            className="reject-btn"
            onClick={() => onReject(landlord)}
          >
            <XCircle size={18} />
            Reject
          </button>

        </div>

      )}

    </div>
  );
}