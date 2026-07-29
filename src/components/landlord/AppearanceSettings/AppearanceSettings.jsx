import "./AppearanceSettings.css";

import { useState } from "react";
import { Palette } from "lucide-react";
import toast from "react-hot-toast";

const colors = [
  "#2563eb",
  "#16a34a",
  "#dc2626",
  "#9333ea",
  "#f59e0b",
  "#0f766e",
];

export default function AppearanceSettings() {
  const [settings, setSettings] = useState({
    theme: "System",
    accentColor: "#2563eb",
    fontSize: "Medium",
    layout: "Comfortable",
    animations: true,
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setSettings((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));
  }

  function handleColor(color) {
    setSettings((prev) => ({
      ...prev,
      accentColor: color,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Future
    // await settingsService.updateAppearance(settings)

    toast.success(
      "Appearance settings updated."
    );
  }

  return (
    <form
      className="appearance-settings"
      onSubmit={handleSubmit}
    >
      <div className="appearance-header">

        <Palette size={55} />

        <div>

          <h2>Appearance</h2>

          <p>
            Personalize your HouseHub dashboard.
          </p>

        </div>

      </div>

      <div className="form-group">

        <label>Theme</label>

        <select
          name="theme"
          value={settings.theme}
          onChange={handleChange}
        >
          <option>Light</option>
          <option>Dark</option>
          <option>System</option>
        </select>

      </div>

      <div className="form-group">

        <label>Accent Color</label>

        <div className="color-picker">

          {colors.map((color) => (

            <button
              key={color}
              type="button"
              className={`color-circle ${
                settings.accentColor === color
                  ? "active"
                  : ""
              }`}
              style={{
                background: color,
              }}
              onClick={() =>
                handleColor(color)
              }
            />

          ))}

        </div>

      </div>

      <div className="form-group">

        <label>Font Size</label>

        <select
          name="fontSize"
          value={settings.fontSize}
          onChange={handleChange}
        >
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
        </select>

      </div>

      <div className="form-group">

        <label>Layout Density</label>

        <select
          name="layout"
          value={settings.layout}
          onChange={handleChange}
        >
          <option>Compact</option>
          <option>Comfortable</option>
          <option>Spacious</option>
        </select>

      </div>

      <label className="toggle-row">

        <span>Enable Animations</span>

        <input
          type="checkbox"
          name="animations"
          checked={settings.animations}
          onChange={handleChange}
        />

      </label>

      <button
        className="save-btn"
        type="submit"
      >
        Save Appearance
      </button>

    </form>
  );
}