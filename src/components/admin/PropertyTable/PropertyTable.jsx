import "./PropertyTable.css";

import {
  Eye,
  Pencil,
  Trash2,
  MapPin,
} from "lucide-react";

export default function PropertyTable({
  properties = [],
  loading = false,
  onSelect,
  onEdit,
  onDelete,
}) {
  if (loading) {
    return (
      <div className="property-table-loading">
        Loading properties...
      </div>
    );
  }

  if (!properties.length) {
    return (
      <div className="property-table-loading">
        No properties found.
      </div>
    );
  }

  return (
    <div className="property-table-wrapper">

      <table className="property-table">

        <thead>
          <tr>
            <th>Property</th>
            <th>Owner</th>
            <th>Location</th>
            <th>Type</th>
            <th>Price</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          {properties.map((property) => (

            <tr key={property._id}>

              <td>

                <div className="property-info">

                  <img
                    src={
                      property.images?.[0] ||
                      "https://placehold.co/80x60"
                    }
                    alt={property.title}
                  />

                  <div>

                    <h4>{property.title}</h4>

                    {property.featured && (
                      <span className="featured-badge">
                        Featured
                      </span>
                    )}

                  </div>

                </div>

              </td>

              <td>
                {property.owner?.fullName ||
                  property.owner?.name ||
                  "-"}
              </td>

              <td>

                <div className="location-cell">

                  <MapPin size={15} />

                  {property.city ||
                    property.address ||
                    "-"}

                </div>

              </td>

              <td>{property.type || "-"}</td>

              <td>
                ₦
                {(property.price || 0).toLocaleString()}
              </td>

              <td>

                <span
                  className={`status-badge ${(
                    property.status || "draft"
                  ).toLowerCase()}`}
                >
                  {property.status || "Draft"}
                </span>

              </td>

              <td>

                <div className="table-actions">

                  <button
                    className="view-btn"
                    title="View Property"
                    onClick={() => onSelect?.(property)}
                  >
                    <Eye size={18} />
                  </button>

                  <button
                    className="edit-btn"
                    title="Edit Property"
                    onClick={() => onEdit?.(property)}
                  >
                    <Pencil size={18} />
                  </button>

                  <button
                    className="delete-btn"
                    title="Delete Property"
                    onClick={() => onDelete?.(property)}
                  >
                    <Trash2 size={18} />
                  </button>

                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}