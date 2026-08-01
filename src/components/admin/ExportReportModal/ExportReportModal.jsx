import "./ExportReportModal.css";

import {
  X,
  Download,
  FileText,
  FileSpreadsheet,
  FileJson,
} from "lucide-react";

export default function ExportReportModal({
  report,
  onClose,
}) {
  if (!report) return null;

  function handleExport(format) {
    console.log(`Exporting ${report.title} as ${format}`);

    // TODO:
    // await reportService.exportReport(report._id, format);

    onClose();
  }

  return (
    <div className="export-report-overlay">

      <div className="export-report-modal">

        <button
          className="close-btn"
          onClick={onClose}
        >
          <X size={20} />
        </button>

        <h2>Export Report</h2>

        <p>
          Choose the format you'd like to export
          <strong> {report.title}</strong>.
        </p>

        <div className="export-options">

          <button
            onClick={() => handleExport("pdf")}
          >
            <FileText size={22} />
            <span>PDF</span>
          </button>

          <button
            onClick={() => handleExport("excel")}
          >
            <FileSpreadsheet size={22} />
            <span>Excel</span>
          </button>

          <button
            onClick={() => handleExport("csv")}
          >
            <Download size={22} />
            <span>CSV</span>
          </button>

          <button
            onClick={() => handleExport("json")}
          >
            <FileJson size={22} />
            <span>JSON</span>
          </button>

        </div>

      </div>

    </div>
  );
}