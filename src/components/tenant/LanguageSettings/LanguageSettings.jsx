import { useState } from "react";
import "./LanguageSettings.css";

import { Globe } from "lucide-react";

export default function LanguageSettings() {
  const [settings, setSettings] = useState({
    language: "English",
    region: "Nigeria",
    timezone: "Africa/Lagos",
    dateFormat: "DD/MM/YYYY",
    currency: "NGN (₦)",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setSettings((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(settings);

    // PUT /api/v1/tenant/preferences
  }

  return (
    <section className="language-settings">

      <div className="settings-card-header">

        <div className="settings-icon">
          <Globe size={24} />
        </div>

        <div>

          <h2>Language & Region</h2>

          <p>
            Configure language, regional and localization
            preferences.
          </p>

        </div>

      </div>

      <form onSubmit={handleSubmit}>

        <div className="form-group">

          <label>Language</label>

          <select
            name="language"
            value={settings.language}
            onChange={handleChange}
          >
            <option>English</option>
            <option>French</option>
            <option>Spanish</option>
            <option>Arabic</option>
          </select>

        </div>

        <div className="form-group">

          <label>Region</label>

          <select
            name="region"
            value={settings.region}
            onChange={handleChange}
          >
            <option>Nigeria</option>
            <option>Ghana</option>
            <option>Kenya</option>
            <option>South Africa</option>
            <option>United Kingdom</option>
            <option>United States</option>
          </select>

        </div>

        <div className="form-group">

          <label>Time Zone</label>

          <select
            name="timezone"
            value={settings.timezone}
            onChange={handleChange}
          >
            <option>Africa/Lagos</option>
            <option>Africa/Accra</option>
            <option>Africa/Nairobi</option>
            <option>Europe/London</option>
            <option>America/New_York</option>
          </select>

        </div>

        <div className="form-group">

          <label>Date Format</label>

          <select
            name="dateFormat"
            value={settings.dateFormat}
            onChange={handleChange}
          >
            <option>DD/MM/YYYY</option>
            <option>MM/DD/YYYY</option>
            <option>YYYY-MM-DD</option>
          </select>

        </div>

        <div className="form-group">

          <label>Currency</label>

          <select
            name="currency"
            value={settings.currency}
            onChange={handleChange}
          >
            <option>NGN (₦)</option>
            <option>USD ($)</option>
            <option>GBP (£)</option>
            <option>EUR (€)</option>
            <option>KES (KSh)</option>
            <option>GHS (GH₵)</option>
          </select>

        </div>

        <button
          className="save-btn"
          type="submit"
        >
          Save Preferences
        </button>

      </form>

    </section>
  );
}