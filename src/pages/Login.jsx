import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { loginUser } from "../sevices/authApi";

function Login() {

  const navigate = useNavigate();

  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

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

      const data = await loginUser(formData);

      login(data.token, data.user);

      alert("Login Successful");

      navigate("/profile");

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Login Failed"
      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="auth-page">
      <div className="auth-layout">
        <div className="auth-intro">
          <span className="auth-ornament">✦</span>
          <p className="auth-kicker">WELCOME BACK</p>
          <h2>Pick up where your best work left off.</h2>
          <p>Review ideas, solve the hard parts, and keep your momentum in one focused workspace.</p>
          <div className="auth-note"><span className="status-dot" /> Your AI workspace is ready.</div>
        </div>

        <div className="auth-card">

        <h1>Welcome back.</h1>

        <p>Login to continue</p>

        <form onSubmit={handleSubmit}>

          <div className="input-group">

            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

          </div>

          <div className="input-group">

            <label>Password</label>

            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              required
            />

          </div>

          <button
            className="auth-btn"
            disabled={loading}
          >
            {loading ? "Logging In..." : "Login"}
          </button>

        </form>

        <div className="auth-footer">

          Don't have an account?

          <Link to="/register">
            Register
          </Link>

        </div>

        </div>
      </div>

    </div>

  );

}

export default Login;