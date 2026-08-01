import "./UserDetails.css";

import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Shield,
  User,
  BadgeCheck,
} from "lucide-react";

export default function UserDetails({ user }) {
  if (!user) return null;

  return (
    <div className="user-details-card">

      <div className="user-profile">

        <img
          src={
            user.avatar ||
            `https://ui-avatars.com/api/?name=${encodeURIComponent(
              user.fullName
            )}&background=2563eb&color=fff`
          }
          alt={user.fullName}
        />

        <h2>{user.fullName}</h2>

        <p>{user.role}</p>

      </div>

      <div className="user-details-info">

        <div className="detail-item">
          <Mail size={18} />
          <span>{user.email}</span>
        </div>

        <div className="detail-item">
          <Phone size={18} />
          <span>{user.phone || "No phone"}</span>
        </div>

        <div className="detail-item">
          <MapPin size={18} />
          <span>{user.address || "No address"}</span>
        </div>

        <div className="detail-item">
          <Calendar size={18} />
          <span>
            {user.createdAt
              ? new Date(
                  user.createdAt
                ).toLocaleDateString()
              : "-"}
          </span>
        </div>

        <div className="detail-item">
          <Shield size={18} />
          <span>{user.status}</span>
        </div>

        <div className="detail-item">
          <BadgeCheck size={18} />
          <span>
            {user.isVerified
              ? "Verified"
              : "Pending Verification"}
          </span>
        </div>

      </div>

      <div className="user-role-box">

        <User size={18} />

        <div>

          <h4>Account Role</h4>

          <p>{user.role}</p>

        </div>

      </div>

    </div>
  );
}