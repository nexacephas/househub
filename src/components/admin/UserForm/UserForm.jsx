import { useEffect, useState } from "react";
import { X } from "lucide-react";

import "./UserForm.css";

export default function UserForm({
  user = null,
  onClose,
  onSubmit,
}) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    role: "tenant",
    status: "active",
    isVerified: false,
  });

  useEffect(() => {
    if (user) {
      setFormData({
        fullName: user.fullName || "",
        email: user.email || "",
        phone: user.phone || "",
        password: "",
        role: user.role || "tenant",
        status: user.status || "active",
        isVerified: user.isVerified || false,
      });
    }
  }, [user]);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (onSubmit) {
      onSubmit(formData);
    }
  }

  return (
    <div className="user-form-overlay">

      <div className="user-form-modal">

        <div className="user-form-header">

          <h2>
            {user
              ? "Edit User"
              : "Add New User"}
          </h2>

          <button onClick={onClose}>
            <X size={22} />
          </button>

        </div>

        <form onSubmit={handleSubmit}>

          <div className="form-group">

            <label>Full Name</label>

            <input
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />

          </div>

          <div className="form-group">

            <label>Email</label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

          </div>

          <div className="form-group">

            <label>Phone</label>

            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />

          </div>

          {!user && (

            <div className="form-group">

              <label>Password</label>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />

            </div>

          )}

          <div className="form-row">

            <div className="form-group">

              <label>Role</label>

              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
              >

                <option value="tenant">
                  Tenant
                </option>

                <option value="landlord">
                  Landlord
                </option>

                <option value="agent">
                  Agent
                </option>

                <option value="admin">
                  Admin
                </option>

              </select>

            </div>

            <div className="form-group">

              <label>Status</label>

              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
              >

                <option value="active">
                  Active
                </option>

                <option value="inactive">
                  Inactive
                </option>

                <option value="suspended">
                  Suspended
                </option>

              </select>

            </div>

          </div>

          <label className="checkbox">

            <input
              type="checkbox"
              name="isVerified"
              checked={formData.isVerified}
              onChange={handleChange}
            />

            Verified Account

          </label>

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
              {user
                ? "Update User"
                : "Create User"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}