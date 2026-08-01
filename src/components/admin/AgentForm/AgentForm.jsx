import { useEffect, useState } from "react";
import { X } from "lucide-react";
import "./AgentForm.css";

export default function AgentForm({
  agent,
  onClose,
  onSubmit,
}) {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    specialization: "",
    status: "active",
    bio: "",
  });

  useEffect(() => {
    if (agent) {
      setForm({
        fullName: agent.fullName || "",
        email: agent.email || "",
        phone: agent.phone || "",
        location: agent.location || "",
        specialization:
          agent.specialization || "",
        status: agent.status || "active",
        bio: agent.bio || "",
      });
    }
  }, [agent]);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    onSubmit?.(form);

    onClose();
  }

  return (
    <div className="agent-form-overlay">

      <div className="agent-form-modal">

        <button
          className="close-btn"
          onClick={onClose}
        >
          <X size={20} />
        </button>

        <h2>
          {agent ? "Edit Agent" : "Add Agent"}
        </h2>

        <form onSubmit={handleSubmit}>

          <div className="form-grid">

            <div>

              <label>Full Name</label>

              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                required
              />

            </div>

            <div>

              <label>Email</label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />

            </div>

            <div>

              <label>Phone</label>

              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
              />

            </div>

            <div>

              <label>Location</label>

              <input
                type="text"
                name="location"
                value={form.location}
                onChange={handleChange}
              />

            </div>

            <div>

              <label>Specialization</label>

              <select
                name="specialization"
                value={form.specialization}
                onChange={handleChange}
              >
                <option value="">
                  Select Specialization
                </option>

                <option value="Residential">
                  Residential
                </option>

                <option value="Commercial">
                  Commercial
                </option>

                <option value="Luxury">
                  Luxury
                </option>

                <option value="Shortlet">
                  Shortlet
                </option>

              </select>

            </div>

            <div>

              <label>Status</label>

              <select
                name="status"
                value={form.status}
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

          <label>Biography</label>

          <textarea
            rows="5"
            name="bio"
            value={form.bio}
            onChange={handleChange}
          />

          <div className="modal-actions">

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
              {agent ? "Update Agent" : "Create Agent"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}