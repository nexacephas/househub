import "./DocumentPreview.css";

import {
  FileText,
  Image,
  Download,
  Printer,
  CalendarDays,
  HardDrive,
  Tag,
} from "lucide-react";

export default function DocumentPreview({
  document = {
    title: "Lease Agreement 2026",
    category: "Lease Agreement",
    type: "PDF",
    uploadedAt: "28 Jul 2026",
    size: "2.4 MB",
    preview:
      "https://images.unsplash.com/photo-1517842645767-c639042777db?w=900",
  },
}) {
  const isImage =
    document.type === "PNG" ||
    document.type === "JPG" ||
    document.type === "JPEG";

  return (
    <section className="document-preview">

      <div className="preview-header">

        <div>

          <h2>{document.title}</h2>

          <p>
            Preview your uploaded document before
            downloading or printing.
          </p>

        </div>

        <div className="preview-actions">

          <button className="download-btn">

            <Download size={18} />

            Download

          </button>

          <button className="print-btn">

            <Printer size={18} />

            Print

          </button>

        </div>

      </div>

      <div className="preview-body">

        <div className="preview-viewer">

          {isImage ? (

            <img
              src={document.preview}
              alt={document.title}
            />

          ) : (

            <div className="pdf-placeholder">

              <FileText size={70} />

              <h3>PDF Preview</h3>

              <p>
                Integrate react-pdf or your preferred
                PDF viewer here.
              </p>

            </div>

          )}

        </div>

        <aside className="preview-sidebar">

          <h3>Document Details</h3>

          <div className="detail-item">

            <Tag size={18} />

            <div>

              <small>Category</small>

              <strong>{document.category}</strong>

            </div>

          </div>

          <div className="detail-item">

            {isImage ? (
              <Image size={18} />
            ) : (
              <FileText size={18} />
            )}

            <div>

              <small>File Type</small>

              <strong>{document.type}</strong>

            </div>

          </div>

          <div className="detail-item">

            <CalendarDays size={18} />

            <div>

              <small>Uploaded</small>

              <strong>{document.uploadedAt}</strong>

            </div>

          </div>

          <div className="detail-item">

            <HardDrive size={18} />

            <div>

              <small>File Size</small>

              <strong>{document.size}</strong>

            </div>

          </div>

        </aside>

      </div>

    </section>
  );
}