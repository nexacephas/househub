import "./DocumentList.css";

import DocumentCard from "../DocumentCard/DocumentCard";

export default function DocumentList({
  documents = [],
  loading = false,
}) {
  const demoDocuments = [
    {
      id: 1,
      title: "Lease Agreement 2026",
      category: "Lease Agreement",
      size: "2.4 MB",
      uploadedAt: "28 Jul 2026",
      type: "PDF",
    },
    {
      id: 2,
      title: "July Rent Receipt",
      category: "Rent Receipt",
      size: "580 KB",
      uploadedAt: "01 Jul 2026",
      type: "PDF",
    },
    {
      id: 3,
      title: "Property Inspection Report",
      category: "Inspection Report",
      size: "1.8 MB",
      uploadedAt: "15 Jun 2026",
      type: "PDF",
    },
    {
      id: 4,
      title: "National ID",
      category: "ID Document",
      size: "950 KB",
      uploadedAt: "05 Jun 2026",
      type: "JPG",
    },
  ];

  const data =
    documents.length > 0
      ? documents
      : demoDocuments;

  return (
    <section className="document-list">

      <div className="document-list-header">

        <div>

          <h2>My Documents</h2>

          <p>
            View, preview and download your uploaded
            documents.
          </p>

        </div>

      </div>

      {loading ? (

        <div className="document-empty">

          Loading documents...

        </div>

      ) : data.length === 0 ? (

        <div className="document-empty">

          No documents available.

        </div>

      ) : (

        <div className="document-grid">

          {data.map((document) => (

            <DocumentCard
              key={document.id}
              document={document}
            />

          ))}

        </div>

      )}

    </section>
  );
}