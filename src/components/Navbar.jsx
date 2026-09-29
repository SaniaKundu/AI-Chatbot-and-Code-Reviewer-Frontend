import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user } = useAuth();

  return (
    <nav className="navbar">

      <div className="logo">
        <div className="logo-icon">✦</div>

        <div>
          <h2>AI Platform</h2>
          <span>Developer intelligence, in flow</span>
        </div>
      </div>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>

        <NavLink to="/code-review">
          Code Review
        </NavLink>

        <NavLink to="/chatbot">
          AI Chatbot
        </NavLink>
      </div>

      <div className="nav-right">
        <NavLink to="/profile" className="profile">
          <span className="profile-mark">{user?.name?.charAt(0)?.toUpperCase() || "U"}</span>
          {user?.name || "Profile"}
       </NavLink>
     </div>

    </nav>
  );
};

export default Navbar;