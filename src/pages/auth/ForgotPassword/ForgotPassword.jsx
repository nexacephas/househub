import "./ForgotPassword.css";

import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { forgotPassword } from "../../../services/auth.service";
import useDebounce from "../../../hooks/useDebounce";
import { validateForgotPasswordData } from "../../../utils/validators";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const debouncedEmail = useDebounce(email, 300);

  useEffect(() => {
    setErrors(validateForgotPasswordData({ email: debouncedEmail }));
  }, [debouncedEmail]);

  async function handleSubmit() {
    const validationErrors = validateForgotPasswordData({ email });
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error(Object.values(validationErrors)[0]);
      return;
    }

    try {
      setLoading(true);
      await forgotPassword(email.trim());
      setSent(true);
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Unable to send reset link."
      );
    } finally {
      setLoading(false);
    }
  }

  if (sent) {
    return (
      <div className="forgot-card">
        <h2>Check Your Email</h2>
        <p>
          If an account exists for <strong>{email}</strong>, you'll receive a password reset link shortly.
        </p>
        <Link to="/login">Back to Login</Link>
      </div>
    );
  }

  return (
    <div className="forgot-card">
      <h2>Forgot Password?</h2>
      <p>
        Enter your email address and we'll send you a reset link.
      </p>

      <div className={`input-wrapper ${errors.email ? "input-invalid" : ""}`}>
        <Mail size={20} />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (errors.email) {
              setErrors((prev) => ({ ...prev, email: undefined }));
            }
          }}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "forgot-email-error" : undefined}
        />
      </div>
      {errors.email && (
        <p id="forgot-email-error" className="input-error">
          {errors.email}
        </p>
      )}

      <button
        className="login-btn"
        onClick={handleSubmit}
        disabled={loading || !!errors.email}
      >
        {loading ? "Sending..." : "Send Reset Link"}
      </button>

      <Link to="/login" className="back-link">
        Back to Login
      </Link>
    </div>
  );
}
