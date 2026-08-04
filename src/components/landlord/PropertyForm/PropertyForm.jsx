import "./PropertyForm.css";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import propertyService from "../../../services/property.service";
import ImageUploader from "../ImageUploader/ImageUploader";

export default function PropertyForm({
  editing = false,
  property = null,
}) {
  const navigate = useNavigate();

  // ==========================
  // UI State
  // ==========================

  const [loading, setLoading] = useState(false);

  const [uploadProgress, setUploadProgress] =
    useState(0);

  // ==========================
  // Images
  // ==========================

  const [images, setImages] = useState([]);

  const [existingImages, setExistingImages] =
    useState([]);

  const [removedImages, setRemovedImages] =
    useState([]);

  // ==========================
  // Form State
  // ==========================

  const [formData, setFormData] = useState({
    title: "",

    description: "",

    propertyType: "apartment",

    purpose: "rent",

    price: "",

    bedrooms: 1,

    bathrooms: 1,

    address: "",

    city: "",

    state: "",

    amenities: [],
  });

  // ==========================
  // Available Amenities
  // ==========================

  const amenityOptions = [
    "Swimming Pool",
    "Gym",
    "Parking",
    "24/7 Security",
    "Balcony",
    "Garden",
    "Elevator",
    "Smart Home",
    "Generator",
    "CCTV",
  ];

  // ==========================
  // Load property when editing
  // ==========================

  useEffect(() => {
    if (!editing || !property) return;

    setFormData({
      title: property.title || "",

      description:
        property.description || "",

      propertyType:
        property.propertyType ||
        "apartment",

      purpose:
        property.purpose || "rent",

      price: property.price || "",

      bedrooms:
        property.bedrooms || 1,

      bathrooms:
        property.bathrooms || 1,

      address:
        property.address || "",

      city: property.city || "",

      state: property.state || "",

      amenities:
        property.amenities || [],
    });

    setExistingImages(
      property.images || []
    );
  }, [editing, property]);

  // ==========================
  // Input Handler
  // ==========================

  const handleChange = ({
    target,
  }) => {
    const { name, value, type } =
      target;

    setFormData((prev) => ({
      ...prev,

      [name]:
        type === "number"
          ? Number(value)
          : value,
    }));
  };

const validateForm = () => {
  if (!formData.title.trim()) {
    toast.error("Title is required.");
    return false;
  }

  if (!formData.description.trim()) {
    toast.error("Description is required.");
    return false;
  }

  if (!formData.address.trim()) {
    toast.error("Address is required.");
    return false;
  }

  if (!formData.city.trim()) {
    toast.error("City is required.");
    return false;
  }

  if (!formData.state.trim()) {
    toast.error("State is required.");
    return false;
  }

  if (!formData.price) {
    toast.error("Price is required.");
    return false;
  }

  return true;
};

const removeExistingImage = (index) => {
  const toRemove = existingImages[index];
  if (!toRemove) return;

  setExistingImages((prev) =>
    prev.filter((_, idx) => idx !== index)
  );
  setRemovedImages((prev) => [
    ...prev,
    toRemove.publicId,
  ]);
};

const toggleAmenity = (amenity) => {
  setFormData((prev) => ({
    ...prev,
    amenities: prev.amenities.includes(amenity)
      ? prev.amenities.filter((item) => item !== amenity)
      : [...prev.amenities, amenity],
  }));
};

const handleSubmit = async (e) => {
  e.preventDefault();

  if (loading) return;

  if (!validateForm()) return;

  try {
    setLoading(true);
    setUploadProgress(0);

    const payload = new FormData();

    // ==========================
    // Append form fields
    // ==========================

    Object.entries(formData).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((item) =>
          payload.append(key, item)
        );
      } else {
        payload.append(key, value);
      }
    });

    // ==========================
    // New Images
    // ==========================

    images.forEach((image) => {
      payload.append("images", image);
    });

    // ==========================
    // Removed Images
    // ==========================

    removedImages.forEach((publicId) => {
      payload.append(
        "removedImages",
        publicId
      );
    });

    // ==========================
    // Create
    // ==========================

    if (!editing) {
      await propertyService.createProperty(
        payload,
        (progressEvent) => {
          const percent = Math.round(
            (progressEvent.loaded * 100) /
              progressEvent.total
          );

          setUploadProgress(percent);
        }
      );

      toast.success(
        "Property created successfully."
      );
    }

    // ==========================
    // Update
    // ==========================

    else {
      await propertyService.updateProperty(
        property._id,
        payload,
        (progressEvent) => {
          const percent = Math.round(
            (progressEvent.loaded * 100) /
              progressEvent.total
          );

          setUploadProgress(percent);
        }
      );

      toast.success(
        "Property updated successfully."
      );
    }

    // ==========================
    // Reset
    // ==========================

    setImages([]);

    setExistingImages([]);

    setRemovedImages([]);

    setUploadProgress(0);

    navigate("/landlord/properties");
  } catch (error) {
    console.error(error);

    toast.error(
      error.response?.data?.message ||
        "Something went wrong."
    );
  } finally {
    setLoading(false);
  }
};

   return (
    <div className="property-form-page">

      <div className="page-header">

        <h1>
          {editing
            ? "Edit Property"
            : "Add Property"}
        </h1>

        <p>
          {editing
            ? "Update your property listing."
            : "Create a new property listing on HouseHub."}
        </p>

      </div>

      <form
        className="property-form"
        onSubmit={handleSubmit}
      >

        {/* ========================= */}
        {/* Basic Information */}
        {/* ========================= */}

        <section className="form-section">

          <h2>Basic Information</h2>

          <div className="form-group">

            <label>Property Title</label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Luxury 4 Bedroom Duplex"
            />

          </div>

          <div className="form-group">

            <label>Description</label>

            <textarea
              rows={6}
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe this property..."
            />

          </div>

        </section>

        {/* ========================= */}
        {/* Property Details */}
        {/* ========================= */}

        <section className="form-section">

          <h2>Property Details</h2>

          <div className="grid-2">

            <div className="form-group">

              <label>Property Type</label>

              <select
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
              >

                <option value="apartment">
                  Apartment
                </option>

                <option value="duplex">
                  Duplex
                </option>

                <option value="bungalow">
                  Bungalow
                </option>

                <option value="house">
                  House
                </option>

                <option value="land">
                  Land
                </option>

                <option value="office">
                  Office
                </option>

              </select>

            </div>

            <div className="form-group">

              <label>Purpose</label>

              <select
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
              >

                <option value="rent">
                  Rent
                </option>

                <option value="sale">
                  Sale
                </option>

              </select>

            </div>

          </div>

          <div className="grid-3">

            <div className="form-group">

              <label>Price (₦)</label>

              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
              />

            </div>

            <div className="form-group">

              <label>Bedrooms</label>

              <input
                type="number"
                name="bedrooms"
                value={formData.bedrooms}
                onChange={handleChange}
              />

            </div>

            <div className="form-group">

              <label>Bathrooms</label>

              <input
                type="number"
                name="bathrooms"
                value={formData.bathrooms}
                onChange={handleChange}
              />

            </div>

          </div>

        </section>

        {/* ========================= */}
        {/* Location */}
        {/* ========================= */}

        <section className="form-section">

          <h2>Location</h2>

          <div className="form-group">

            <label>Address</label>

            <input
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Street Address"
            />

          </div>

          <div className="grid-2">

            <div className="form-group">

              <label>City</label>

              <input
                name="city"
                value={formData.city}
                onChange={handleChange}
              />

            </div>

            <div className="form-group">

              <label>State</label>

              <input
                name="state"
                value={formData.state}
                onChange={handleChange}
              />

            </div>

          </div>

        </section>

        {/* ========================= */}
        {/* Existing Images */}
        {/* ========================= */}

        {editing &&
          existingImages.length > 0 && (

          <section className="form-section">

            <h2>Current Images</h2>

            <div className="preview-grid">

              {existingImages.map(
                (image, index) => (

                  <div
                    className="preview-card"
                    key={image.publicId}
                  >

                    <img
                      src={image.url}
                      alt=""
                    />

                    <button
                      type="button"
                      className="remove-image"
                      onClick={() =>
                        removeExistingImage(index)
                      }
                    >

                      ✕

                    </button>

                  </div>

                )
              )}

            </div>

          </section>

        )}

        {/* ========================= */}
        {/* Upload Images */}
        {/* ========================= */}

        <section className="form-section">

          <h2>Property Images</h2>

          <ImageUploader
            images={images}
            setImages={setImages}
          />

        </section>

        {/* ========================= */}
        {/* Amenities */}
        {/* ========================= */}

        <section className="form-section">

          <h2>Amenities</h2>

          <div className="amenities-grid">

            {amenityOptions.map((item) => (

              <label
                key={item}
                className="amenity-item"
              >

                <input
                  type="checkbox"
                  checked={formData.amenities.includes(
                    item
                  )}
                  onChange={() =>
                    toggleAmenity(item)
                  }
                />

                {item}

              </label>

            ))}

          </div>

        </section>

        {/* ========================= */}
        {/* Upload Progress */}
        {/* ========================= */}

        {loading && (

          <div className="upload-progress">

            <div
              className="upload-progress-bar"
              style={{
                width: `${uploadProgress}%`,
              }}
            />

            <span>
              Uploading...
              {uploadProgress}%
            </span>

          </div>

        )}

        {/* ========================= */}
        {/* Submit */}
        {/* ========================= */}

        <button
          className="submit-btn"
          disabled={loading}
        >

          {loading
            ? editing
              ? "Updating..."
              : "Creating..."
            : editing
            ? "Update Property"
            : "Create Property"}

        </button>

      </form>

    </div>
  );
}