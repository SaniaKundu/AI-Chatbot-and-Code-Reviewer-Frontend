import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../sevices/authApi";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await registerUser(formData);

      alert("✅ Registration Successful");

      navigate("/login");

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Registration Failed"
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="auth-page">
      <div className="auth-layout">
        <div className="auth-intro register-intro">
          <span className="auth-ornament">+</span>
          <p className="auth-kicker">START BUILDING</p>
          <h2>A clearer path from question to solution.</h2>
          <p>Create your workspace and bring your code, questions, and ideas into one place.</p>
          <div className="auth-note"><span className="status-dot green" /> Built for curious builders.</div>
        </div>

        <div className="auth-card">

        <h1>Create your workspace.</h1>

        <p>
          Join AI Platform and start using AI tools
        </p>

        <form onSubmit={handleSubmit}>

          <div className="input-group">

            <label>Full Name</label>

            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />

          </div>

          <div className="input-group">

            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />

          </div>

          <div className="input-group">

            <label>Password</label>

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              required
            />

          </div>

          <div className="show-password">

            <input
              type="checkbox"
              onChange={() =>
                setShowPassword(!showPassword)
              }
            />

            <span>Show Password</span>

          </div>

          <button
            className="auth-btn"
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Register"}
          </button>

        </form>

        <div className="auth-footer">

          Already have an account?

          <Link to="/login">
            Login
          </Link>

        </div>

        </div>
      </div>

    </div>
  );
}

export default Register;