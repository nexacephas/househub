import "./LeaseDownload.css";

import {
  FileText,
  Download,
  Printer,
  Calendar,
  HardDrive,
} from "lucide-react";

export default function LeaseDownload() {
  function handleDownload() {
    alert("Lease download will be connected to the backend.");
  }

  function handlePrint() {
    window.print();
  }

  return (
    <section className="lease-download">

      <div className="download-header">

        <FileText size={36} />

        <div>

          <h2>Lease Agreement</h2>

          <p>
            Download or print your signed lease
            agreement anytime.
          </p>

        </div>

      </div>

      <div className="document-details">

        <div className="detail-row">

          <Calendar size={18} />

          <span>Uploaded</span>

          <strong>January 1, 2026</strong>

        </div>

        <div className="detail-row">

          <HardDrive size={18} />

          <span>File Size</span>

          <strong>2.4 MB</strong>

        </div>

        <div className="detail-row">

          <FileText size={18} />

          <span>Document</span>

          <strong>Lease_Agreement.pdf</strong>

        </div>

      </div>

      <div className="download-actions">

        <button
          className="download-btn"
          onClick={handleDownload}
        >

          <Download size={18} />

          Download PDF

        </button>

        <button
          className="print-btn"
          onClick={handlePrint}
        >

          <Printer size={18} />

          Print Lease

        </button>

      </div>

    </section>
  );
}