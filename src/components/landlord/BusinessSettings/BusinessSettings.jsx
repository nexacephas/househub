import "./BusinessSettings.css";

import { useState } from "react";
import { Building2, Upload } from "lucide-react";
import toast from "react-hot-toast";

export default function BusinessSettings() {
  const [business, setBusiness] = useState({
    companyName: "",
    cacNumber: "",
    tin: "",
    website: "",
    email: "",
    phone: "",
    address: "",
    description: "",
    logo: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setBusiness((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleLogo(e) {
    const file = e.target.files[0];

    if (!file) return;

    setBusiness((prev) => ({
      ...prev,
      logo: URL.createObjectURL(file),
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Later:
    // await settingsService.updateBusiness(business)

    toast.success("Business information updated.");
  }

  return (
    <form
      className="business-settings"
      onSubmit={handleSubmit}
    >
      <div className="logo-section">

        <div className="logo-preview">

          {business.logo ? (

            <img
              src={business.logo}
              alt="Company Logo"
            />

          ) : (

            <Building2 size={55} />

          )}

        </div>

        <label className="upload-logo">

          <Upload size={18} />

          Upload Logo

          <input
            type="file"
            hidden
            accept="image/*"
            onChange={handleLogo}
          />

        </label>

      </div>

      <div className="business-grid">

        <div className="form-group">
          <label>Company Name</label>

          <input
            name="companyName"
            value={business.companyName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>CAC Number</label>

          <input
            name="cacNumber"
            value={business.cacNumber}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>TIN</label>

          <input
            name="tin"
            value={business.tin}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Website</label>

          <input
            name="website"
            value={business.website}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Business Email</label>

          <input
            type="email"
            name="email"
            value={business.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Business Phone</label>

          <input
            name="phone"
            value={business.phone}
            onChange={handleChange}
          />
        </div>

      </div>

      <div className="form-group">

        <label>Business Address</label>

        <input
          name="address"
          value={business.address}
          onChange={handleChange}
        />

      </div>

      <div className="form-group">

        <label>Company Description</label>

        <textarea
          rows="5"
          name="description"
          value={business.description}
          onChange={handleChange}
          placeholder="Describe your company..."
        />

      </div>

      <button
        type="submit"
        className="save-btn"
      >
        Save Business Information
      </button>

    </form>
  );
}