import "./ProfileSettings.css";

import { useEffect, useState } from "react";
import { Camera } from "lucide-react";
import toast from "react-hot-toast";

import { useAuth } from "../../../context/AuthContext";
import api from "../../../services/api";

export default function ProfileSettings() {
  const { user, refreshUser } = useAuth();
  const [profile, setProfile] = useState({
    avatar: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    bio: "",
  });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (user) {
      setProfile({
        avatar: user.avatar || "",
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
        phone: user.phone || "",
        address: user.address || "",
        bio: user.bio || "",
      });
    }
  }, [user]);

  function handleChange(e) {
    const { name, value } = e.target;

    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleAvatar(e) {
    const file = e.target.files[0];

    if (!file) return;

    const preview = URL.createObjectURL(file);
    setProfile((prev) => ({ ...prev, avatar: preview }));

    try {
      const formData = new FormData();
      formData.append("image", file);
      const { data } = await api.post("/upload/images", formData);
      const imageUrl = data.images?.[0]?.url;

      if (!imageUrl) throw new Error("Image upload failed.");

      await api.patch("/users/me", { avatar: imageUrl });
      await refreshUser();
      toast.success("Profile picture updated.");
    } catch {
      toast.error("Unable to upload profile picture.");
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setSaving(true);
      const payload = {
        firstName: profile.firstName,
        lastName: profile.lastName,
        email: profile.email,
        phone: profile.phone,
        address: profile.address,
        bio: profile.bio,
      };

      await api.patch("/users/me", payload);
      await refreshUser();
      toast.success("Profile updated successfully.");
    } catch (error) {
      toast.error(error.response?.data?.message || "Unable to save profile.");
    } finally {
      setSaving(false);
    }
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
                `${profile.firstName || ""} ${profile.lastName || ""}`.trim() || "User"
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

          <div className="form-grid">
            <div className="form-group">
              <label>First Name</label>
              <input
                name="firstName"
                value={profile.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                name="lastName"
                value={profile.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

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
        disabled={saving}
      >
        {saving ? "Saving..." : "Save Changes"}
      </button>

    </form>
  );
}