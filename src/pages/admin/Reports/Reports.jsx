import { useEffect, useState } from "react";

import ReportStats from "../../../components/admin/ReportStats/ReportStats";
import ReportFilters from "../../../components/admin/ReportFilters/ReportFilters";
import ReportTable from "../../../components/admin/ReportTable/ReportTable";
import ReportDetails from "../../../components/admin/ReportDetails/ReportDetails";
import ExportReportModal from "../../../components/admin/ExportReportModal/ExportReportModal";

import reportService from "../../../services/report.service";

import "./Reports.css";

function Reports() {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedReport, setSelectedReport] = useState(null);

  const [showExport, setShowExport] = useState(false);

  const [filters, setFilters] = useState({
    search: "",
    type: "",
    status: "",
    date: "",
    generatedBy: "",
  });

  useEffect(() => {
    loadReports();
  }, []);

  async function loadReports() {
    try {
      setLoading(true);

      const { data } =
        await reportService.getReports();

      setReports(data.reports || []);
    } catch (error) {
      console.error(error);
      setReports([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="admin-reports-page">

      <div className="page-header">

        <div>

          <h1>Reports</h1>

          <p>
            Generate, manage and export system reports.
          </p>

        </div>

      </div>

      <ReportStats />

      <ReportFilters
        filters={filters}
        setFilters={setFilters}
      />

      <div className="reports-content">

        <div className="reports-table">

          <ReportTable
            reports={reports}
            loading={loading}
            onSelect={setSelectedReport}
            onDelete={(report) => {
              setSelectedReport(report);
            }}
          />

        </div>

        {selectedReport && (

          <div className="report-details-panel">

            <ReportDetails
              report={selectedReport}
            />

            <button
              className="export-report-btn"
              onClick={() => setShowExport(true)}
            >
              Export Report
            </button>

          </div>

        )}

      </div>

      {showExport && (

        <ExportReportModal
          report={selectedReport}
          onClose={() => setShowExport(false)}
        />

      )}

    </div>
  );
}

export default Reports;