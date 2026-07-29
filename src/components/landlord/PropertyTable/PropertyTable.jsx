import "./PropertyTable.css";

import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, Pencil, Trash2, Plus } from "lucide-react";
import toast from "react-hot-toast";

import propertyService from "../../../services/property.service";
import DeletePropertyModal from "../DeletePropertyModal/DeletePropertyModal";

export default function PropertyTable({
  properties,
  reload,
}) {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [openDelete, setOpenDelete] = useState(false);
  const [loading, setLoading] = useState(false);

  const deleteProperty = async () => {
    if (!selectedProperty) return;

    try {
      setLoading(true);

      await propertyService.remove(selectedProperty._id);

      toast.success("Property deleted successfully");

      setOpenDelete(false);

      setSelectedProperty(null);

      reload();
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Unable to delete property"
      );
    } finally {
      setLoading(false);
    }
  };

  if (properties.length === 0) {
    return (
      <div className="empty-state">
        <h2>No Properties Yet</h2>

        <p>
          Start by listing your first property.
        </p>

        <Link
          to="/landlord/properties/new"
          className="add-btn"
        >
          <Plus size={18} />
          Add Property
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="table-wrapper">
        <table className="property-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Location</th>
              <th>Price</th>
              <th>Status</th>
              <th>Created</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {properties.map((property) => (
              <tr key={property._id}>
                <td>
                  <img
                    className="property-image"
                    src={
                      property.images?.length
                        ? property.images[0].url
                        : "https://placehold.co/100x70?text=No+Image"
                    }
                    alt={property.title}
                  />
                </td>

                <td>
                  <strong>{property.title}</strong>
                </td>

                <td>
                  {property.city}, {property.state}
                </td>

                <td>
                  ₦{property.price.toLocaleString()}
                </td>

                <td>
                  <span className={`status ${property.status}`}>
                    {property.status}
                  </span>
                </td>

                <td>
                  {new Date(
                    property.createdAt
                  ).toLocaleDateString()}
                </td>

                <td className="actions">
                  <Link
                    to={`/properties/${property._id}`}
                    className="view"
                  >
                    <Eye size={18} />
                  </Link>

                  <Link
                    to={`/landlord/properties/edit/${property._id}`}
                    className="edit"
                  >
                    <Pencil size={18} />
                  </Link>

                  <button
                    className="delete"
                    onClick={() => {
                      setSelectedProperty(property);
                      setOpenDelete(true);
                    }}
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <DeletePropertyModal
        open={openDelete}
        property={selectedProperty}
        loading={loading}
        onClose={() => {
          setOpenDelete(false);
          setSelectedProperty(null);
        }}
        onConfirm={deleteProperty}
      />
    </>
  );
}