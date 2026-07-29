import { useState } from "react";
import "./SecuritySettings.css";

import {
  Shield,
  Eye,
  EyeOff,
} from "lucide-react";

export default function SecuritySettings() {
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const [security, setSecurity] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    twoFactor: false,
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setSecurity((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function togglePassword(field) {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(security);

    // PUT /api/v1/tenant/change-password
  }

  return (
    <section className="security-settings">

      <div className="settings-card-header">

        <div className="settings-icon">

          <Shield size={24} />

        </div>

        <div>

          <h2>Security</h2>

          <p>
            Protect your account and update your password.
          </p>

        </div>

      </div>

      <form onSubmit={handleSubmit}>

        <div className="form-group">

          <label>Current Password</label>

          <div className="password-field">

            <input
              type={
                showPassword.current
                  ? "text"
                  : "password"
              }
              name="currentPassword"
              value={security.currentPassword}
              onChange={handleChange}
            />

            <button
              type="button"
              onClick={() =>
                togglePassword("current")
              }
            >
              {showPassword.current ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>

          </div>

        </div>

        <div className="form-group">

          <label>New Password</label>

          <div className="password-field">

            <input
              type={
                showPassword.new
                  ? "text"
                  : "password"
              }
              name="newPassword"
              value={security.newPassword}
              onChange={handleChange}
            />

            <button
              type="button"
              onClick={() =>
                togglePassword("new")
              }
            >
              {showPassword.new ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>

          </div>

        </div>

        <div className="form-group">

          <label>Confirm Password</label>

          <div className="password-field">

            <input
              type={
                showPassword.confirm
                  ? "text"
                  : "password"
              }
              name="confirmPassword"
              value={security.confirmPassword}
              onChange={handleChange}
            />

            <button
              type="button"
              onClick={() =>
                togglePassword("confirm")
              }
            >
              {showPassword.confirm ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>

          </div>

        </div>

        <div className="two-factor">

          <div>

            <h4>
              Enable Two-Factor Authentication
            </h4>

            <p>
              Add an extra layer of security to your account.
            </p>

          </div>

          <label className="switch">

            <input
              type="checkbox"
              name="twoFactor"
              checked={security.twoFactor}
              onChange={handleChange}
            />

            <span className="slider"></span>

          </label>

        </div>

        <button
          className="save-btn"
          type="submit"
        >
          Update Security
        </button>

      </form>

    </section>
  );
}