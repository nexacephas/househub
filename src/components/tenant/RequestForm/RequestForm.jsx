import { useState } from "react";
import "./RequestForm.css";

import {
  Wrench,
  Flag,
  Calendar,
  Upload,
  Send,
} from "lucide-react";

export default function RequestForm() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    priority: "Medium",
    description: "",
    preferredDate: "",
  });

  const [images, setImages] = useState([]);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleImages(e) {
    setImages([...e.target.files]);
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(formData);
    console.log(images);

    // Backend integration goes here
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
        >

          <Send size={18} />

          Submit Request

        </button>

      </form>

    </section>
  );
}