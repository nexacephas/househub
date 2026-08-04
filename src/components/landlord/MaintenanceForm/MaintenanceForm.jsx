import "./MaintenanceForm.css";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

import maintenanceService from "../../../services/maintenance.service";
import propertyService from "../../../services/property.service";
import tenantService from "../../../services/tenant.service";

import ImageUploader from "../ImageUploader/ImageUploader";

export default function MaintenanceForm({
  editing = false,
}) {
  const navigate = useNavigate();

  const { id } = useParams();

  const [loading, setLoading] = useState(false);

  const [properties, setProperties] = useState([]);

  const [tenants, setTenants] = useState([]);

  const [beforeImages, setBeforeImages] = useState([]);

  const [afterImages, setAfterImages] = useState([]);

  const [uploadProgress, setUploadProgress] =
    useState(0);

  const [formData, setFormData] = useState({
    title: "",

    description: "",

    property: "",

    tenant: "",

    category: "Electrical",

    priority: "Medium",

    status: "Pending",

    technician: "",

    estimatedCost: "",

    notes: "",
  });

  const categories = [
    "Electrical",
    "Plumbing",
    "Painting",
    "Cleaning",
    "Roof",
    "Flooring",
    "HVAC",
    "Appliances",
    "Pest Control",
    "General Repair",
  ];

  const priorities = [
    "Low",
    "Medium",
    "High",
    "Urgent",
  ];

  const statuses = [
    "Pending",
    "Assigned",
    "In Progress",
    "Completed",
    "Cancelled",
  ];

  useEffect(() => {
    async function loadProperties() {
      try {
        const { data } =
          await propertyService.getMyProperties();

        setProperties(data.properties || []);
      } catch (error) {
        console.error(error);
      }
    }

    async function loadTenants() {
      try {
        const { data } =
          await tenantService.getTenants();

        setTenants(data.tenants || []);
      } catch (error) {
        console.error(error);
      }
    }

    async function loadRequest() {
      try {
        const { data } =
          await maintenanceService.getRequest(id);

        const request = data.request;

        setFormData({
          title: request.title || "",
          description:
            request.description || "",
          property:
            request.property?._id || "",
          tenant:
            request.tenant?._id || "",
          category:
            request.category || "Electrical",
          priority:
            request.priority || "Medium",
          status:
            request.status || "Pending",
          technician:
            request.technician || "",
          estimatedCost:
            request.estimatedCost || "",
          notes:
            request.notes || "",
        });
      } catch (error) {
        console.error(error);
        toast.error("Failed to load maintenance request.");
      }
    }

    loadProperties();
    loadTenants();

    if (editing) {
      loadRequest();
    }
  }, [editing, id]);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!formData.title.trim())
      return toast.error(
        "Issue title is required."
      );

    if (!formData.description.trim())
      return toast.error(
        "Description is required."
      );

    if (!formData.property)
      return toast.error(
        "Please select a property."
      );

    try {
      setLoading(true);

      const payload = new FormData();

      Object.entries(formData).forEach(
        ([key, value]) => {
          payload.append(key, value);
        }
      );

      beforeImages.forEach((image) =>
        payload.append(
          "beforeImages",
          image
        )
      );

      afterImages.forEach((image) =>
        payload.append(
          "afterImages",
          image
        )
      );

      if (editing) {
        await maintenanceService.updateRequest(
          id,
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
          "Maintenance request updated."
        );
      } else {
        await maintenanceService.createRequest(
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
          "Maintenance request created."
        );
      }

      navigate("/landlord/maintenance");
    } catch (error) {
      console.error(error);
      toast.error(
        error.response?.data?.message ||
          "Something went wrong."
      );
    } finally {
      setLoading(false);
      setUploadProgress(0);
    }
  }

  return (
    <div className="maintenance-form-page">

      <div className="page-header">

        <h1>
          {editing
            ? "Edit Maintenance Request"
            : "Create Maintenance Request"}
        </h1>

        <p>
          Record and manage maintenance
          requests.
        </p>

      </div>

      <form
        className="maintenance-form"
        onSubmit={handleSubmit}
      >

        <section>

          <h2>Issue Details</h2>

          <input
            name="title"
            placeholder="Issue title"
            value={formData.title}
            onChange={handleChange}
          />

          <textarea
            rows="5"
            name="description"
            placeholder="Describe the issue..."
            value={formData.description}
            onChange={handleChange}
          />

        </section>

        <section>

          <h2>Assignment</h2>

          <div className="grid-2">

            <select
              name="property"
              value={formData.property}
              onChange={handleChange}
            >
              <option value="">
                Select Property
              </option>

              {properties.map((property) => (
                <option
                  key={property._id}
                  value={property._id}
                >
                  {property.title}
                </option>
              ))}

            </select>

            <select
              name="tenant"
              value={formData.tenant}
              onChange={handleChange}
            >
              <option value="">
                Select Tenant
              </option>

              {tenants.map((tenant) => (
                <option
                  key={tenant._id}
                  value={tenant._id}
                >
                  {tenant.fullName}
                </option>
              ))}

            </select>

          </div>

        </section>

        <section>

          <h2>Maintenance Details</h2>

          <div className="grid-3">

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              {categories.map((item) => (
                <option
                  key={item}
                  value={item}
                >
                  {item}
                </option>
              ))}
            </select>

            <select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
            >
              {priorities.map((item) => (
                <option
                  key={item}
                  value={item}
                >
                  {item}
                </option>
              ))}
            </select>

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              {statuses.map((item) => (
                <option
                  key={item}
                  value={item}
                >
                  {item}
                </option>
              ))}
            </select>

          </div>

          <div className="grid-2">

            <input
              name="technician"
              placeholder="Assigned technician"
              value={formData.technician}
              onChange={handleChange}
            />

            <input
              type="number"
              name="estimatedCost"
              placeholder="Estimated repair cost"
              value={formData.estimatedCost}
              onChange={handleChange}
            />

          </div>

        </section>

        <section>

          <h2>Before Photos</h2>

          <ImageUploader
            images={beforeImages}
            setImages={setBeforeImages}
          />

        </section>

        <section>

          <h2>After Photos</h2>

          <ImageUploader
            images={afterImages}
            setImages={setAfterImages}
          />

        </section>

        <section>

          <h2>Additional Notes</h2>

          <textarea
            rows="5"
            name="notes"
            placeholder="Additional information..."
            value={formData.notes}
            onChange={handleChange}
          />

        </section>

        {loading && (
          <div className="upload-progress">

            <div
              className="upload-progress-bar"
              style={{
                width: `${uploadProgress}%`,
              }}
            />

            <span>
              {uploadProgress}%
            </span>

          </div>
        )}

        <button
          className="submit-btn"
          disabled={loading}
        >
          {loading
            ? editing
              ? "Updating..."
              : "Creating..."
            : editing
            ? "Update Request"
            : "Create Request"}
        </button>

      </form>

    </div>
  );
}