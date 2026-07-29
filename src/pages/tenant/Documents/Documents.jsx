import "./Documents.css";

import DashboardLayout from "../../../components/dashboard/DashboardLayout/DashboardLayout";

import DocumentStats from "../../../components/tenant/DocumentStats/DocumentStats";
import DocumentFilters from "../../../components/tenant/DocumentFilters/DocumentFilters";
import DocumentList from "../../../components/tenant/DocumentList/DocumentList";
import UploadDocument from "../../../components/tenant/UploadDocument/UploadDocument";

export default function Documents() {
  return (
    <DashboardLayout role="tenant">

      <div className="tenant-documents-page">

        <div className="documents-header">

          <div>

            <h1>Documents</h1>

            <p>
              Access your lease agreements, rent receipts,
              invoices and other important documents.
            </p>

          </div>

        </div>

        <DocumentStats />

        <DocumentFilters />

        <div className="documents-grid">

          <div className="documents-left">

            <UploadDocument />

          </div>

          <div className="documents-right">

            <DocumentList />

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}