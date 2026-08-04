import "./TenantForm.css";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import tenantService from "../../../services/tenant.service";
import propertyService from "../../../services/property.service";

export default function TenantForm({
    editing = false,
}) {
  const navigate = useNavigate();
const { id } = useParams();

  const [loading, setLoading] = useState(false);

  const [properties, setProperties] = useState([]);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    gender: "Male",
    occupation: "",

    property: "",
    rentAmount: "",
    securityDeposit: "",

    leaseStart: "",
    leaseEnd: "",

    emergencyName: "",
    emergencyPhone: "",
    emergencyRelationship: "",

    notes: "",
  });

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

    loadProperties();
  }, []);

  useEffect(() => {
    if (!editing) {
      return;
    }

    async function loadTenant() {
      try {
        const { data } =
          await tenantService.getTenant(id);

        const tenant = data.tenant;

        setFormData({
          fullName: tenant.fullName || "",
          email: tenant.email || "",
          phone: tenant.phone || "",
          gender: tenant.gender || "Male",
          occupation: tenant.occupation || "",
          property: tenant.property?._id || "",
          rentAmount: tenant.rentAmount || "",
          securityDeposit: tenant.securityDeposit || "",
          leaseStart:
            tenant.leaseStart?.substring(0, 10) || "",
          leaseEnd:
            tenant.leaseEnd?.substring(0, 10) || "",
          emergencyName:
            tenant.emergencyContact?.name || "",
          emergencyPhone:
            tenant.emergencyContact?.phone || "",
          emergencyRelationship:
            tenant.emergencyContact?.relationship || "",
          notes: tenant.notes || "",
        });
      } catch {
        toast.error("Failed to load tenant.");
      }
    }

    loadTenant();
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

    if (!formData.fullName.trim())
      return toast.error("Full name is required.");

    if (!formData.email.trim())
      return toast.error("Email is required.");

    if (!formData.property)
      return toast.error("Select a property.");

    try {
      setLoading(true);

      if (editing) {

    await tenantService.updateTenant(
        id,
        formData
    );

    toast.success(
        "Tenant updated successfully."
    );

} else {

    await tenantService.createTenant(
        formData
    );

   
}

      navigate("/landlord/tenants");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to create tenant."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="tenant-form-page">

      <div className="page-header">

       <h1>
    {editing
        ? "Edit Tenant"
        : "Add Tenant"}
</h1> 

        <p>
          Register a new tenant and assign them
          to a property.
        </p>

      </div>

      <form
        className="tenant-form"
        onSubmit={handleSubmit}
      >

        {/* Personal */}

        <section>

          <h2>Personal Information</h2>

          <div className="grid-2">

            <input
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
            />

            <input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />

          </div>

          <div className="grid-3">

            <input
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />

            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option>Male</option>
              <option>Female</option>
            </select>

            <input
              name="occupation"
              placeholder="Occupation"
              value={formData.occupation}
              onChange={handleChange}
            />

          </div>

        </section>

        {/* Lease */}

        <section>

          <h2>Lease Information</h2>

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

          <div className="grid-2">

            <input
              type="number"
              name="rentAmount"
              placeholder="Monthly Rent"
              value={formData.rentAmount}
              onChange={handleChange}
            />

            <input
              type="number"
              name="securityDeposit"
              placeholder="Security Deposit"
              value={formData.securityDeposit}
              onChange={handleChange}
            />

          </div>

          <div className="grid-2">

            <input
              type="date"
              name="leaseStart"
              value={formData.leaseStart}
              onChange={handleChange}
            />

            <input
              type="date"
              name="leaseEnd"
              value={formData.leaseEnd}
              onChange={handleChange}
            />

          </div>

        </section>

        {/* Emergency */}

        <section>

          <h2>Emergency Contact</h2>

          <div className="grid-3">

            <input
              name="emergencyName"
              placeholder="Full Name"
              value={formData.emergencyName}
              onChange={handleChange}
            />

            <input
              name="emergencyPhone"
              placeholder="Phone Number"
              value={formData.emergencyPhone}
              onChange={handleChange}
            />

            <input
              name="emergencyRelationship"
              placeholder="Relationship"
              value={
                formData.emergencyRelationship
              }
              onChange={handleChange}
            />

          </div>

        </section>

        {/* Notes */}

        <section>

          <h2>Notes</h2>

          <textarea
            rows="5"
            name="notes"
            placeholder="Additional notes..."
            value={formData.notes}
            onChange={handleChange}
          />

        </section>

        <button
          className="submit-btn"
          disabled={loading}
        >
          {loading
    ? editing
        ? "Updating..."
        : "Creating..."
    : editing
        ? "Update Tenant"
        : "Create Tenant"}
        </button>

      </form>

    </div>
  );
}