import "./ProfileSettings.css";

import { useEffect, useRef, useState } from "react";
import { Camera } from "lucide-react";
import toast from "react-hot-toast";

import { useAuth } from "../../../context/AuthContext";
import api from "../../../services/api";
import useDebounce from "../../../hooks/useDebounce";
import { validateProfileData } from "../../../utils/validators";

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
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);
  const originalProfile = useRef(null);

  useEffect(() => {
    if (user) {
      const nextProfile = {
        avatar: user.avatar || "",
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
        phone: user.phone || "",
        address: user.address || "",
        bio: user.bio || "",
      };

      setProfile(nextProfile);
      originalProfile.current = nextProfile;
    }
  }, [user]);

  const debouncedProfile = useDebounce(profile, 300);

  useEffect(() => {
    setErrors(validateProfileData(debouncedProfile));
  }, [debouncedProfile]);

  function handleChange(e) {
    const { name, value } = e.target;

    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
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

    const nextErrors = validateProfileData(profile);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      toast.error(Object.values(nextErrors)[0]);
      return;
    }

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

  const hasChanges =
    originalProfile.current &&
    JSON.stringify(originalProfile.current) !== JSON.stringify(profile);
  const canSave = !saving && hasChanges && Object.keys(errors).length === 0;

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
            <div className={`form-group ${errors.firstName ? "input-invalid" : ""}`}>
              <label htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                name="firstName"
                value={profile.firstName}
                onChange={handleChange}
                aria-invalid={!!errors.firstName}
                aria-describedby={errors.firstName ? "firstName-error" : undefined}
              />
              {errors.firstName && (
                <p id="firstName-error" className="input-error">
                  {errors.firstName}
                </p>
              )}
            </div>
            <div className={`form-group ${errors.lastName ? "input-invalid" : ""}`}>
              <label htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                name="lastName"
                value={profile.lastName}
                onChange={handleChange}
                aria-invalid={!!errors.lastName}
                aria-describedby={errors.lastName ? "lastName-error" : undefined}
              />
              {errors.lastName && (
                <p id="lastName-error" className="input-error">
                  {errors.lastName}
                </p>
              )}
            </div>
          </div>

        </div>

        <div className={`form-group ${errors.email ? "input-invalid" : ""}`}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "profile-email-error" : undefined}
          />
          {errors.email && (
            <p id="profile-email-error" className="input-error">
              {errors.email}
            </p>
          )}
        </div>

        <div className={`form-group ${errors.phone ? "input-invalid" : ""}`}>
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "profile-phone-error" : undefined}
          />
          {errors.phone && (
            <p id="profile-phone-error" className="input-error">
              {errors.phone}
            </p>
          )}
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
        disabled={!canSave}
      >
        {saving ? "Saving..." : "Save Changes"}
      </button>

    </form>
  );
}