import "./ProfileSettings.css";

import { useState } from "react";
import { Camera } from "lucide-react";
import toast from "react-hot-toast";

export default function ProfileSettings() {
  const [profile, setProfile] = useState({
    avatar: "",
    fullName: "John Doe",
    email: "john@example.com",
    phone: "+234 800 000 0000",
    address: "Lagos, Nigeria",
    bio: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleAvatar(e) {
    const file = e.target.files[0];

    if (!file) return;

    setProfile((prev) => ({
      ...prev,
      avatar: URL.createObjectURL(file),
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Later:
    // await settingsService.updateProfile(profile)

    toast.success("Profile updated successfully.");
  }

  return (
    <form
      className="profile-settings"
      onSubmit={handleSubmit}
    >
      <div className="avatar-section">

        <div className="avatar-wrapper">

          <img
            src={
              profile.avatar ||
              `https://ui-avatars.com/api/?name=${encodeURIComponent(
                profile.fullName
              )}`
            }
            alt="Profile"
          />

          <label>

            <Camera size={18} />

            <input
              type="file"
              hidden
              accept="image/*"
              onChange={handleAvatar}
            />

          </label>

        </div>

      </div>

      <div className="form-grid">

        <div className="form-group">

          <label>Full Name</label>

          <input
            name="fullName"
            value={profile.fullName}
            onChange={handleChange}
          />

        </div>

        <div className="form-group">

          <label>Email</label>

          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
          />

        </div>

        <div className="form-group">

          <label>Phone</label>

          <input
            name="phone"
            value={profile.phone}
            onChange={handleChange}
          />

        </div>

        <div className="form-group">

          <label>Address</label>

          <input
            name="address"
            value={profile.address}
            onChange={handleChange}
          />

        </div>

      </div>

      <div className="form-group">

        <label>Bio</label>

        <textarea
          rows="5"
          name="bio"
          placeholder="Tell tenants a little about yourself..."
          value={profile.bio}
          onChange={handleChange}
        />

      </div>

      <button
        type="submit"
        className="save-btn"
      >
        Save Changes
      </button>

    </form>
  );
}