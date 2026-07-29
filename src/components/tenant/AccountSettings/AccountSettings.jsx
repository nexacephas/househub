import { useState } from "react";
import "./AccountSettings.css";

import { User } from "lucide-react";

export default function AccountSettings() {
  const [formData, setFormData] = useState({
    firstName: "Cephas",
    lastName: "Johnson",
    email: "cephas@example.com",
    phone: "+234 801 234 5678",
    emergencyContact: "+234 809 876 5432",
  });

  function handleChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(formData);

    // TODO:
    // PUT /api/v1/tenant/profile
  }

  return (
    <section className="account-settings">

      <div className="settings-card-header">

        <div className="settings-icon">

          <User size={24} />

        </div>

        <div>

          <h2>Account Information</h2>

          <p>
            Update your personal information.
          </p>

        </div>

      </div>

      <form onSubmit={handleSubmit}>

        <div className="two-columns">

          <div className="form-group">

            <label>First Name</label>

            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />

          </div>

          <div className="form-group">

            <label>Last Name</label>

            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />

          </div>

        </div>

        <div className="form-group">

          <label>Email Address</label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

        </div>

        <div className="form-group">

          <label>Phone Number</label>

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />

        </div>

        <div className="form-group">

          <label>Emergency Contact</label>

          <input
            type="tel"
            name="emergencyContact"
            value={formData.emergencyContact}
            onChange={handleChange}
          />

        </div>

        <button
          type="submit"
          className="save-btn"
        >
          Save Changes
        </button>

      </form>

    </section>
  );
}