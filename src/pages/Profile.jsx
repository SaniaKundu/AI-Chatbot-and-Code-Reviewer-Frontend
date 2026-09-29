import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="profile-page">
      <div className="profile-shell">
        <div className="profile-heading">
          <p className="page-kicker">ACCOUNT</p>
          <h1>Your workspace profile</h1>
          <p>Manage your identity and return to the tools whenever you are ready.</p>
        </div>

        <div className="profile-card">

        <div className="profile-avatar">
          {user?.name?.charAt(0)?.toUpperCase() || "U"}
        </div>

        <h2>{user?.name || "User"}</h2>

        <p>{user?.email || "No Email"}</p>

          <div className="profile-meta"><span className="status-dot green" /> Workspace active</div>

          <button
            className="logout-btn"
            onClick={handleLogout}
          >
            Sign out <span>→</span>
          </button>
        </div>

      </div>
    </div>
  );
}

export default Profile;