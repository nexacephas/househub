import { useEffect, useState } from "react";
import "./PropertyForm.css";

export default function PropertyForm({
  property,
  onClose,
  onSave,
}) {
  const [form, setForm] = useState({
    title: "",
    price: "",
    type: "Apartment",
    status: "Available",
    bedrooms: "",
    bathrooms: "",
    area: "",
    address: "",
    description: "",
    featured: false,
  });

  useEffect(() => {
    if (property) {
      setForm({
        title: property.title || "",
        price: property.price || "",
        type: property.type || "Apartment",
        status: property.status || "Available",
        bedrooms: property.bedrooms || "",
        bathrooms: property.bathrooms || "",
        area: property.area || "",
        address: property.address || "",
        description: property.description || "",
        featured: property.featured || false,
      });
    }
  }, [property]);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (onSave) {
      onSave(form);
    }

    onClose();
  }

  return (
    <div className="property-modal">

      <div className="property-form-container">

        <div className="form-header">

          <h2>
            {property
              ? "Edit Property"
              : "Add Property"}
          </h2>

          <button
            className="close-btn"
            onClick={onClose}
          >
            ✕
          </button>

        </div>

        <form onSubmit={handleSubmit}>

          <div className="form-grid">

            <div className="form-group">

              <label>Title</label>

              <input
                name="title"
                value={form.title}
                onChange={handleChange}
              />

            </div>

            <div className="form-group">

              <label>Price</label>

              <input
                type="number"
                name="price"
                value={form.price}
                onChange={handleChange}
              />

            </div>

            <div className="form-group">

              <label>Type</label>

              <select
                name="type"
                value={form.type}
                onChange={handleChange}
              >
                <option>Apartment</option>
                <option>House</option>
                <option>Duplex</option>
                <option>Studio</option>
                <option>Commercial</option>
              </select>

            </div>

            <div className="form-group">

              <label>Status</label>

              <select
                name="status"
                value={form.status}
                onChange={handleChange}
              >
                <option>Available</option>
                <option>Occupied</option>
                <option>Pending</option>
                <option>Draft</option>
              </select>

            </div>

            <div className="form-group">

              <label>Bedrooms</label>

              <input
                type="number"
                name="bedrooms"
                value={form.bedrooms}
                onChange={handleChange}
              />

            </div>

            <div className="form-group">

              <label>Bathrooms</label>

              <input
                type="number"
                name="bathrooms"
                value={form.bathrooms}
                onChange={handleChange}
              />

            </div>

            <div className="form-group">

              <label>Area (sqft)</label>

              <input
                type="number"
                name="area"
                value={form.area}
                onChange={handleChange}
              />

            </div>

            <div className="form-group">

              <label>Address</label>

              <input
                name="address"
                value={form.address}
                onChange={handleChange}
              />

            </div>

          </div>

          <div className="form-group">

            <label>Description</label>

            <textarea
              rows="5"
              name="description"
              value={form.description}
              onChange={handleChange}
            />

          </div>

          <div className="checkbox-group">

            <input
              type="checkbox"
              name="featured"
              checked={form.featured}
              onChange={handleChange}
            />

            <label>
              Featured Property
            </label>

          </div>

          <div className="form-group">

            <label>Property Images</label>

            <input
              type="file"
              multiple
            />

          </div>

          <div className="form-actions">

            <button
              type="button"
              className="cancel-btn"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="save-btn"
            >
              Save Property
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}