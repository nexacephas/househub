import "./Login.css";

import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "../../../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      return toast.error("Please fill in all fields.");
    }

    try {
      setLoading(true);

      const user = await login(formData);

      toast.success(`Welcome back, ${user.firstName}!`);

      switch (user.role) {
        case "landlord":
          navigate("/landlord/dashboard");
          break;

        case "tenant":
          navigate("/tenant/dashboard");
          break;

        case "agent":
          navigate("/agent/dashboard");
          break;

        case "admin":
          navigate("/admin/dashboard");
          break;

        default:
          navigate("/");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Login failed."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-card">
      <div className="login-header">
        <h2>Welcome Back 👋</h2>

        <p>
          Sign in to access verified properties,
          manage your listings and continue your
          HouseHub journey.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Email */}

        <div className="input-group">
          <label>Email Address</label>

          <div className="input-wrapper">
            <Mail size={20} />

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Password */}

        <div className="input-group">
          <label>Password</label>

          <div className="input-wrapper">
            <Lock size={20} />

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />

            <button
              type="button"
              className="password-toggle"
              onClick={() =>
                setShowPassword(!showPassword)
              }
            >
              {showPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>
          </div>
        </div>

        {/* Options */}

        <div className="login-options">
          <label className="remember">
            <input type="checkbox" />

            Remember me
          </label>

          <Link to="/forgot-password">
            Forgot Password?
          </Link>
        </div>

        {/* Login Button */}

        <button
          type="submit"
          className="login-btn"
          disabled={loading}
        >
          {loading ? "Signing In..." : "Login"}
        </button>
      </form>

      {/* Divider */}

      <div className="divider">
        <span>OR</span>
      </div>

      {/* Google */}

      <button className="google-btn">
        Continue with Google
      </button>

      {/* Footer */}

      <p className="register-link">
        Don't have an account?

        <Link to="/register">
          Create Account
        </Link>
      </p>
    </div>
  );
}