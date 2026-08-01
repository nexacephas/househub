import { useEffect, useState } from "react";

import "./Users.css";

import userService from "../../../services/user.service";

import UserStats from "../../../components/admin/UserStats/UserStats";
import UserFilters from "../../../components/admin/UserFilters/UserFilters";
import UserTable from "../../../components/admin/UserTable/UserTable";
import UserDetails from "../../../components/admin/UserDetails/UserDetails";
import UserForm from "../../../components/admin/UserForm/UserForm";
import DeleteUserModal from "../../../components/admin/DeleteUserModal/DeleteUserModal";
import SuspendUserModal from "../../../components/admin/SuspendUserModal/SuspendUserModal";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedUser, setSelectedUser] = useState(null);

  const [showForm, setShowForm] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showSuspend, setShowSuspend] = useState(false);

  const [filters, setFilters] = useState({
    search: "",
    role: "",
    status: "",
    verified: "",
  });

  useEffect(() => {
    loadUsers();
  }, []);

  async function loadUsers() {
    try {
      setLoading(true);

      const { data } = await userService.getUsers(filters);

      setUsers(data.users || []);
    } catch (err) {
      console.log(err);
      setUsers([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="users-page">

      <div className="users-header">

        <div>
          <h1>Users</h1>
          <p>Manage landlords, tenants and agents.</p>
        </div>

        <button
          className="users-add-btn"
          onClick={() => setShowForm(true)}
        >
          + Add User
        </button>

      </div>

      <UserStats users={users} />

      <UserFilters
        filters={filters}
        setFilters={setFilters}
      />

      <div className="users-content">

        <div className="users-list">

          <UserTable
            users={users}
            loading={loading}
            onSelect={setSelectedUser}
          />

        </div>

        {selectedUser && (

          <div className="users-details">

            <UserDetails user={selectedUser} />

            <div className="users-actions">

              <button
                onClick={() => setShowSuspend(true)}
              >
                Suspend
              </button>

              <button
                className="danger"
                onClick={() => setShowDelete(true)}
              >
                Delete
              </button>

            </div>

          </div>

        )}

      </div>

      {showForm && (

        <UserForm
          onClose={() => setShowForm(false)}
        />

      )}

      {showDelete && (

        <DeleteUserModal
          user={selectedUser}
          onClose={() => setShowDelete(false)}
        />

      )}

      {showSuspend && (

        <SuspendUserModal
          user={selectedUser}
          onClose={() => setShowSuspend(false)}
        />

      )}

    </div>
  );
}