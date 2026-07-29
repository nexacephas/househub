import "./SecuritySettings.css";

import { useState } from "react";
import {
  Shield,
  Lock,
  Smartphone,
  LogOut,
} from "lucide-react";
import toast from "react-hot-toast";

export default function SecuritySettings() {
  const [security, setSecurity] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    twoFactor: false,
    loginAlerts: true,
  });

  function handleChange(e) {
    const {
      name,
      value,
      type,
      checked,
    } = e.target;

    setSecurity((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      security.newPassword !==
      security.confirmPassword
    ) {
      return toast.error(
        "Passwords do not match."
      );
    }

    // Future:
    // await settingsService.updatePassword(security);

    toast.success(
      "Security settings updated."
    );
  }

  function logoutEverywhere() {
    // Future:
    // await settingsService.logoutAllDevices();

    toast.success(
      "Logged out from all devices."
    );
  }

  return (
    <form
      className="security-settings"
      onSubmit={handleSubmit}
    >
      <div className="security-header">

        <Shield size={55} />

        <div>

          <h2>Security Settings</h2>

          <p>
            Protect your HouseHub account.
          </p>

        </div>

      </div>

      {/* Password */}

      <section className="security-card">

        <div className="card-title">

          <Lock size={20} />

          <h3>Change Password</h3>

        </div>

        <div className="form-group">

          <label>Current Password</label>

          <input
            type="password"
            name="currentPassword"
            value={
              security.currentPassword
            }
            onChange={handleChange}
          />

        </div>

        <div className="form-group">

          <label>New Password</label>

          <input
            type="password"
            name="newPassword"
            value={security.newPassword}
            onChange={handleChange}
          />

        </div>

        <div className="form-group">

          <label>Confirm Password</label>

          <input
            type="password"
            name="confirmPassword"
            value={
              security.confirmPassword
            }
            onChange={handleChange}
          />

        </div>

      </section>

      {/* 2FA */}

      <section className="security-card">

        <div className="card-title">

          <Smartphone size={20} />

          <h3>Two-Factor Authentication</h3>

        </div>

        <label className="toggle-row">

          <span>
            Enable Two-Factor Authentication
          </span>

          <input
            type="checkbox"
            name="twoFactor"
            checked={security.twoFactor}
            onChange={handleChange}
          />

        </label>

      </section>

      {/* Alerts */}

      <section className="security-card">

        <div className="card-title">

          <Shield size={20} />

          <h3>Security Alerts</h3>

        </div>

        <label className="toggle-row">

          <span>
            Notify me about new logins
          </span>

          <input
            type="checkbox"
            name="loginAlerts"
            checked={security.loginAlerts}
            onChange={handleChange}
          />

        </label>

      </section>

      {/* Logout */}

      <section className="security-card logout-card">

        <div className="card-title">

          <LogOut size={20} />

          <h3>Active Sessions</h3>

        </div>

        <p>
          Sign out from every device where
          your account is currently logged
          in.
        </p>

        <button
          type="button"
          className="logout-btn"
          onClick={logoutEverywhere}
        >
          Logout All Devices
        </button>

      </section>

      <button
        className="save-btn"
        type="submit"
      >
        Save Security Settings
      </button>

    </form>
  );
}