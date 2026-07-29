import "./NotificationSettings.css";

import { useState } from "react";
import { Bell } from "lucide-react";
import toast from "react-hot-toast";

export default function NotificationSettings() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,

    rentPayments: true,
    maintenanceRequests: true,
    newMessages: true,
    leaseReminders: true,

    weeklyReports: false,
    monthlyReports: true,
    marketingEmails: false,
  });

  function handleToggle(e) {
    const { name, checked } = e.target;

    setSettings((prev) => ({
      ...prev,
      [name]: checked,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Future
    // await settingsService.updateNotifications(settings)

    toast.success(
      "Notification preferences updated."
    );
  }

  return (
    <form
      className="notification-settings"
      onSubmit={handleSubmit}
    >
      <div className="notification-header">

        <Bell size={55} />

        <div>

          <h2>Notification Preferences</h2>

          <p>
            Choose how HouseHub should notify
            you.
          </p>

        </div>

      </div>

      <div className="notification-section">

        <h3>Notification Channels</h3>

        <Toggle
          label="Email Notifications"
          name="emailNotifications"
          checked={settings.emailNotifications}
          onChange={handleToggle}
        />

        <Toggle
          label="SMS Notifications"
          name="smsNotifications"
          checked={settings.smsNotifications}
          onChange={handleToggle}
        />

        <Toggle
          label="Push Notifications"
          name="pushNotifications"
          checked={settings.pushNotifications}
          onChange={handleToggle}
        />

      </div>

      <div className="notification-section">

        <h3>Property Activities</h3>

        <Toggle
          label="Rent Payment Alerts"
          name="rentPayments"
          checked={settings.rentPayments}
          onChange={handleToggle}
        />

        <Toggle
          label="Maintenance Requests"
          name="maintenanceRequests"
          checked={settings.maintenanceRequests}
          onChange={handleToggle}
        />

        <Toggle
          label="New Messages"
          name="newMessages"
          checked={settings.newMessages}
          onChange={handleToggle}
        />

        <Toggle
          label="Lease Renewal Reminders"
          name="leaseReminders"
          checked={settings.leaseReminders}
          onChange={handleToggle}
        />

      </div>

      <div className="notification-section">

        <h3>Reports</h3>

        <Toggle
          label="Weekly Reports"
          name="weeklyReports"
          checked={settings.weeklyReports}
          onChange={handleToggle}
        />

        <Toggle
          label="Monthly Reports"
          name="monthlyReports"
          checked={settings.monthlyReports}
          onChange={handleToggle}
        />

      </div>

      <div className="notification-section">

        <h3>Marketing</h3>

        <Toggle
          label="Product Updates & Promotions"
          name="marketingEmails"
          checked={settings.marketingEmails}
          onChange={handleToggle}
        />

      </div>

      <button
        className="save-btn"
        type="submit"
      >
        Save Notification Settings
      </button>

    </form>
  );
}

function Toggle({
  label,
  name,
  checked,
  onChange,
}) {
  return (
    <label className="toggle-row">

      <span>{label}</span>

      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
      />

    </label>
  );
}