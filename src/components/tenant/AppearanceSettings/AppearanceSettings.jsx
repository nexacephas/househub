import { useState } from "react";
import "./AppearanceSettings.css";

import { Palette } from "lucide-react";

export default function AppearanceSettings() {
  const [appearance, setAppearance] = useState({
    theme: "system",
    accent: "#2563eb",
    fontSize: "medium",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setAppearance((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(appearance);

    // PUT /api/v1/tenant/appearance
  }

  const colors = [
    "#2563eb",
    "#10b981",
    "#f59e0b",
    "#ef4444",
    "#8b5cf6",
    "#0f172a",
  ];

  return (
    <section className="appearance-settings">

      <div className="settings-card-header">

        <div className="settings-icon">
          <Palette size={24} />
        </div>

        <div>
          <h2>Appearance</h2>
          <p>
            Customize how HouseHub looks on your device.
          </p>
        </div>

      </div>

      <form onSubmit={handleSubmit}>

        <div className="form-group">

          <label>Theme</label>

          <select
            name="theme"
            value={appearance.theme}
            onChange={handleChange}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="system">System Default</option>
          </select>

        </div>

        <div className="form-group">

          <label>Accent Color</label>

          <div className="color-picker">

            {colors.map((color) => (

              <button
                key={color}
                type="button"
                className={
                  appearance.accent === color
                    ? "color active"
                    : "color"
                }
                style={{ background: color }}
                onClick={() =>
                  setAppearance((prev) => ({
                    ...prev,
                    accent: color,
                  }))
                }
              />

            ))}

          </div>

        </div>

        <div className="form-group">

          <label>Font Size</label>

          <select
            name="fontSize"
            value={appearance.fontSize}
            onChange={handleChange}
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>

        </div>

        <button
          className="save-btn"
          type="submit"
        >
          Save Appearance
        </button>

      </form>

    </section>
  );
}