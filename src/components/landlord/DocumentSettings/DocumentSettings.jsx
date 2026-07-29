import "./DocumentSettings.css";

import { useState } from "react";
import {
  Upload,
  FileText,
  CheckCircle,
} from "lucide-react";
import toast from "react-hot-toast";

const initialDocuments = [
  {
    id: 1,
    title: "Government ID",
    file: null,
    verified: false,
  },
  {
    id: 2,
    title: "CAC Certificate",
    file: null,
    verified: false,
  },
  {
    id: 3,
    title: "Proof of Address",
    file: null,
    verified: false,
  },
  {
    id: 4,
    title: "Tax Certificate",
    file: null,
    verified: false,
  },
];

export default function DocumentSettings() {
  const [documents, setDocuments] =
    useState(initialDocuments);

  function handleUpload(id, file) {
    setDocuments((prev) =>
      prev.map((doc) =>
        doc.id === id
          ? {
              ...doc,
              file,
            }
          : doc
      )
    );

    toast.success("Document uploaded.");
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Future:
    // Upload all documents to backend

    toast.success(
      "Documents saved successfully."
    );
  }

  return (
    <form
      className="document-settings"
      onSubmit={handleSubmit}
    >
      <div className="document-header">

        <FileText size={55} />

        <div>

          <h2>Verification Documents</h2>

          <p>
            Upload documents required for
            account verification.
          </p>

        </div>

      </div>

      <div className="document-list">

        {documents.map((doc) => (

          <div
            className="document-card"
            key={doc.id}
          >
            <div>

              <h3>{doc.title}</h3>

              <p>
                {doc.file
                  ? doc.file.name
                  : "No file uploaded"}
              </p>

            </div>

            <div className="document-actions">

              {doc.verified && (
                <span className="verified">

                  <CheckCircle size={18} />

                  Verified

                </span>
              )}

              <label className="upload-btn">

                <Upload size={18} />

                Upload

                <input
                  hidden
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) =>
                    handleUpload(
                      doc.id,
                      e.target.files[0]
                    )
                  }
                />

              </label>

            </div>

          </div>

        ))}

      </div>

      <button
        type="submit"
        className="save-btn"
      >
        Save Documents
      </button>

    </form>
  );
}