import { FiEdit2 } from "react-icons/fi";
import "./ProfileCard.css";

export default function ProfileCard({
  name,
  role,
  email,
  avatar,
  onEdit,
}) {
  return (
    <div className="profile-card">
<div className="profile-header">
  {avatar ? (
    <img
      src={avatar}
      alt={name}
      className="profile-avatar"
    />
  ) : (
    <div className="profile-avatar profile-avatar-placeholder">
      {name.charAt(0).toUpperCase()}
    </div>
  )}

  <div className="profile-info">
    <h3>{name}</h3>
    <p>{role}</p>
    <span>{email}</span>
  </div>
</div>

      <button
        className="profile-btn"
        onClick={onEdit}
      >
        <FiEdit2 />
        Edit Profile
      </button>
    </div>
  );
}