import "./DocumentCard.css";

import {
  FileText,
  Image,
  Download,
  Eye,
  Trash2,
} from "lucide-react";

export default function DocumentCard({
  document,
}) {
  const isImage =
    document.type === "JPG" ||
    document.type === "PNG";

  return (
    <div className="document-card">

      <div className="document-card-top">

        <div className="document-icon">

          {isImage ? (
            <Image size={34} />
          ) : (
            <FileText size={34} />
          )}

        </div>

        <span className="document-type">
          {document.type}
        </span>

      </div>

      <div className="document-body">

        <h3>{document.title}</h3>

        <span className="document-category">
          {document.category}
        </span>

        <div className="document-meta">

          <p>
            <strong>Uploaded:</strong>{" "}
            {document.uploadedAt}
          </p>

          <p>
            <strong>Size:</strong>{" "}
            {document.size}
          </p>

        </div>

      </div>

      <div className="document-actions">

        <button className="preview-btn">

          <Eye size={18} />

          Preview

        </button>

        <button className="download-btn">

          <Download size={18} />

          Download

        </button>

        <button className="delete-btn">

          <Trash2 size={18} />

        </button>

      </div>

    </div>
  );
}