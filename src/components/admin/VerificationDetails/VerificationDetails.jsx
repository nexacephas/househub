import "./VerificationDetails.css";

import {
  User,
  Mail,
  Phone,
  Calendar,
  ShieldCheck,
  FileText,
} from "lucide-react";

export default function VerificationDetails({
  verification,
}) {
  if (!verification) {
    return (
      <div className="verification-details-empty">
        Select a verification request to view details.
      </div>
    );
  }

  const user = verification.user || {};

  return (
    <div className="verification-details">

      <div className="verification-header">

        <img
          src={
            user.avatar ||
            "https://placehold.co/120x120"
          }
          alt={user.fullName}
        />

        <div>

          <h2>{user.fullName}</h2>

          <span
            className={`verification-status ${verification.status}`}
          >
            {verification.status}
          </span>

        </div>

      </div>

      <div className="verification-info">

        <div className="info-item">
          <User size={18} />
          <div>
            <label>Full Name</label>
            <span>{user.fullName}</span>
          </div>
        </div>

        <div className="info-item">
          <Mail size={18} />
          <div>
            <label>Email</label>
            <span>{user.email}</span>
          </div>
        </div>

        <div className="info-item">
          <Phone size={18} />
          <div>
            <label>Phone</label>
            <span>{user.phone || "-"}</span>
          </div>
        </div>

        <div className="info-item">
          <ShieldCheck size={18} />
          <div>
            <label>Verification Type</label>
            <span>{verification.type}</span>
          </div>
        </div>

        <div className="info-item">
          <Calendar size={18} />
          <div>
            <label>Submitted</label>
            <span>
              {verification.createdAt
                ? new Date(
                    verification.createdAt
                  ).toLocaleDateString()
                : "-"}
            </span>
          </div>
        </div>

      </div>

      <div className="documents-section">

        <h3>
          <FileText size={18} />
          Submitted Documents
        </h3>

        <div className="documents-grid">

          <div className="document-card">

            <h4>ID Card</h4>

            <img
              src={
                verification.documents?.idCard ||
                "https://placehold.co/300x200"
              }
              alt="ID Card"
            />

          </div>

          <div className="document-card">

            <h4>Selfie</h4>

            <img
              src={
                verification.documents?.selfie ||
                "https://placehold.co/300x200"
              }
              alt="Selfie"
            />

          </div>

          <div className="document-card">

            <h4>Proof of Address</h4>

            <img
              src={
                verification.documents?.addressProof ||
                "https://placehold.co/300x200"
              }
              alt="Address Proof"
            />

          </div>

        </div>

      </div>

      {verification.notes && (

        <div className="verification-notes">

          <h3>Admin Notes</h3>

          <p>{verification.notes}</p>

        </div>

      )}

    </div>
  );
}