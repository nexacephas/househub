import "./ResetPassword.css";

import { Lock, Eye, EyeOff } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";
import { resetPassword } from "../../../services/auth.service";
import useDebounce from "../../../hooks/useDebounce";
import { validateResetPasswordData } from "../../../utils/validators";

export default function ResetPassword() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const debouncedForm = useDebounce(
    { password, confirmPassword: confirm },
    300
  );

  useEffect(() => {
    setErrors(validateResetPasswordData({
      password: debouncedForm.password,
      confirmPassword: debouncedForm.confirmPassword,
    }));
  }, [debouncedForm]);

  async function handleReset() {
    const token = searchParams.get("token");

    if (!token) {
      toast.error("Reset token is missing.");
      return;
    }

    const validationErrors = validateResetPasswordData({
      password,
      confirmPassword: confirm,
    });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error(Object.values(validationErrors)[0]);
      return;
    }

    try {
      setLoading(true);
      await resetPassword({ token, password });
      toast.success("Password reset successfully.");
      navigate("/login");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Unable to reset password."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="forgot-card">
      <h2>Create New Password</h2>
      <p>Your new password must be different from your previous one.</p>

      <div className={`input-wrapper ${errors.password ? "input-invalid" : ""}`}>
        <Lock size={20} />
        <input
          type={show ? "text" : "password"}
          placeholder="New Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            if (errors.password) {
              setErrors((prev) => ({ ...prev, password: undefined }));
            }
          }}
          aria-invalid={!!errors.password}
          aria-describedby={errors.password ? "reset-password-error" : undefined}
        />
        <button
          className="password-toggle"
          type="button"
          onClick={() => setShow(!show)}
        >
          {show ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
      {errors.password && (
        <p id="reset-password-error" className="input-error">
          {errors.password}
        </p>
      )}

      <div className={`input-wrapper ${errors.confirmPassword ? "input-invalid" : ""}`}>
        <Lock size={20} />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirm}
          onChange={(e) => {
            setConfirm(e.target.value);
            if (errors.confirmPassword) {
              setErrors((prev) => ({ ...prev, confirmPassword: undefined }));
            }
          }}
          aria-invalid={!!errors.confirmPassword}
          aria-describedby={errors.confirmPassword ? "reset-confirm-error" : undefined}
        />
      </div>
      {errors.confirmPassword && (
        <p id="reset-confirm-error" className="input-error">
          {errors.confirmPassword}
        </p>
      )}

      <button
        className="login-btn"
        type="button"
        onClick={handleReset}
        disabled={loading || Object.keys(errors).length > 0}
      >
        {loading ? "Resetting..." : "Reset Password"}
      </button>

      <Link to="/login" className="back-link">
        Back to Login
      </Link>
    </div>
  );
}
