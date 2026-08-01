import "./UserTable.css";

import {
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";

export default function UserTable({
  users = [],
  loading = false,
  onSelect,
}) {
  if (loading) {
    return (
      <div className="user-table-loading">
        Loading users...
      </div>
    );
  }

  if (!users.length) {
    return (
      <div className="user-table-loading">
        No users found.
      </div>
    );
  }

  return (
    <div className="user-table-wrapper">

      <table className="user-table">

        <thead>

          <tr>

            <th>User</th>

            <th>Role</th>

            <th>Status</th>

            <th>Verified</th>

            <th>Joined</th>

            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          {users.map((user) => (

            <tr key={user._id}>

              <td>

                <div className="user-info">

                  <img
                    src={
                      user.avatar ||
                      "https://ui-avatars.com/api/?name=" +
                        encodeURIComponent(
                          user.fullName
                        )
                    }
                    alt={user.fullName}
                  />

                  <div>

                    <h4>{user.fullName}</h4>

                    <p>{user.email}</p>

                  </div>

                </div>

              </td>

              <td>

                <span
                  className={`role-badge ${user.role}`}
                >
                  {user.role}
                </span>

              </td>

              <td>

                <span
                  className={`status-badge ${user.status}`}
                >
                  {user.status}
                </span>

              </td>

              <td>

                <span
                  className={
                    user.isVerified
                      ? "verified"
                      : "not-verified"
                  }
                >
                  {user.isVerified
                    ? "Verified"
                    : "Pending"}
                </span>

              </td>

              <td>

                {new Date(
                  user.createdAt
                ).toLocaleDateString()}

              </td>

              <td>

                <div className="table-actions">

                  <button
                    onClick={() =>
                      onSelect(user)
                    }
                  >
                    <Eye size={18} />
                  </button>

                  <button>
                    <Pencil size={18} />
                  </button>

                  <button className="delete">

                    <Trash2 size={18} />

                  </button>

                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}