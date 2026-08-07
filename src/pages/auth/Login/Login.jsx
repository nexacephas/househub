import "./Login.css";

import { Link, useNavigate, useLocation } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "../../../context/AuthContext";
import useDebounce from "../../../hooks/useDebounce";
import { validateLoginData } from "../../../utils/validators";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const debouncedFormData = useDebounce(formData, 300);

  useEffect(() => {
    setErrors(validateLoginData(debouncedFormData));
  }, [debouncedFormData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateLoginData(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error(Object.values(validationErrors)[0]);
      return;
    }

    try {
      setLoading(true);

      const user = await login(formData);

      toast.success(`Welcome back, ${user.firstName}!`);

      const redirectTo =
        location.state?.from?.pathname || null;

      if (redirectTo) {
        navigate(redirectTo, { replace: true });
        return;
      }

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

  const isFormValid =
    Object.keys(errors).length === 0 &&
    formData.email.trim() !== "" &&
    formData.password !== "";

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

        <div className={`input-group ${errors.email ? "input-invalid" : ""}`}>
          <label htmlFor="login-email">Email Address</label>

          <div className="input-wrapper">
            <Mail size={20} />

            <input
              id="login-email"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "login-email-error" : undefined}
            />
          </div>
          {errors.email && (
            <p id="login-email-error" className="input-error">
              {errors.email}
            </p>
          )}
        </div>

        {/* Password */}

        <div className={`input-group ${errors.password ? "input-invalid" : ""}`}>
          <label htmlFor="login-password">Password</label>

          <div className="input-wrapper">
            <Lock size={20} />

            <input
              id="login-password"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              aria-invalid={!!errors.password}
              aria-describedby={
                errors.password ? "login-password-error" : undefined
              }
            />

            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          {errors.password && (
            <p id="login-password-error" className="input-error">
              {errors.password}
            </p>
          )}
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
          disabled={loading || !isFormValid}
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