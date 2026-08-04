import { useState } from "react";
import toast from "react-hot-toast";
import "./RequestForm.css";

import {
  Wrench,
  Flag,
  Calendar,
  Upload,
  Send,
} from "lucide-react";

import maintenanceService from "../../../services/maintenance.service";

export default function RequestForm() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    priority: "Medium",
    description: "",
    preferredDate: "",
  });

  const [images, setImages] = useState([]);
  const [submitting, setSubmitting] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleImages(e) {
    setImages([...e.target.files]);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!formData.title.trim() || !formData.description.trim()) {
      return toast.error("Please add a title and description for the request.");
    }

    try {
      setSubmitting(true);

      await maintenanceService.createRequest({
        title: formData.title.trim(),
        description: formData.description.trim(),
        category: formData.category,
        priority: formData.priority.toLowerCase(),
        preferredDate: formData.preferredDate || undefined,
        images: images.map((file) => file.name),
      });

      toast.success("Maintenance request submitted.");
      setFormData({
        title: "",
        category: "",
        priority: "Medium",
        description: "",
        preferredDate: "",
      });
      setImages([]);
    } catch (error) {
      toast.error(error.response?.data?.message || "Unable to submit maintenance request.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="request-form">

      <div className="form-header">

        <h2>Create Maintenance Request</h2>

        <p>
          Report any maintenance issue in your
          apartment.
        </p>

      </div>

      <form onSubmit={handleSubmit}>

        <div className="form-group">

          <label>Issue Title</label>

          <input
            type="text"
            name="title"
            placeholder="Kitchen sink leaking..."
            value={formData.title}
            onChange={handleChange}
          />

        </div>

        <div className="form-group">

          <label>

            <Wrench size={16} />

            Category

          </label>

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
          >

            <option value="">
              Select Category
            </option>

            <option>Plumbing</option>

            <option>Electrical</option>

            <option>HVAC</option>

            <option>Painting</option>

            <option>Roof</option>

            <option>Doors & Windows</option>

            <option>Cleaning</option>

            <option>Security</option>

            <option>Others</option>

          </select>

        </div>

        <div className="form-group">

          <label>

            <Flag size={16} />

            Priority

          </label>

          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
          >

            <option>Low</option>

            <option>Medium</option>

            <option>High</option>

            <option>Emergency</option>

          </select>

        </div>

        <div className="form-group">

          <label>Description</label>

          <textarea
            rows="5"
            name="description"
            placeholder="Describe the issue..."
            value={formData.description}
            onChange={handleChange}
          />

        </div>

        <div className="form-group">

          <label>

            <Calendar size={16} />

            Preferred Inspection Date

          </label>

          <input
            type="date"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleChange}
          />

        </div>

        <div className="form-group">

          <label>

            <Upload size={16} />

            Upload Photos

          </label>

          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImages}
          />

          {images.length > 0 && (

            <small>
              {images.length} file(s) selected
            </small>

          )}

        </div>

        <button
          className="submit-request-btn"
          type="submit"
          disabled={submitting}
        >

          <Send size={18} />

          {submitting ? "Submitting..." : "Submit Request"}

        </button>

      </form>

    </section>
  );
}