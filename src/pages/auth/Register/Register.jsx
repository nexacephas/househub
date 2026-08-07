import "./Register.css";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import {
  User,
  Building2,
  Briefcase,
  ArrowRight,
  Eye,
  EyeOff,
  Lock,
} from "lucide-react";

import { register } from "../../../services/auth.service";
import useDebounce from "../../../hooks/useDebounce";
import {
  getPasswordStrength,
  getPasswordStrengthLabel,
  splitFullName,
  validateRegisterStep2,
  validateRegisterStep3,
} from "../../../utils/validators";

export default function Register() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [step, setStep] = useState(1);
  const [role, setRole] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const debouncedStep2 = useDebounce(
    {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
    },
    300
  );

  const debouncedStep3 = useDebounce(
    {
      password: formData.password,
      confirmPassword: formData.confirmPassword,
      acceptTerms,
    },
    300
  );

  useEffect(() => {
    if (step === 2) {
      setErrors(validateRegisterStep2(formData));
    } else if (step === 3) {
      setErrors(
        validateRegisterStep3({
          password: formData.password,
          confirmPassword: formData.confirmPassword,
          acceptTerms,
        })
      );
    }
  }, [debouncedStep2, debouncedStep3, step, acceptTerms]);

  const roles = [
    {
      id: "tenant",
      icon: <User size={32} />,
      title: "Tenant",
      description:
        "Find verified apartments and houses.",
    },
    {
      id: "landlord",
      icon: <Building2 size={32} />,
      title: "Landlord",
      description:
        "List and manage your properties.",
    },
    {
      id: "agent",
      icon: <Briefcase size={32} />,
      title: "Agent",
      description:
        "Connect buyers, tenants and landlords.",
    },
  ];

  const handleRegister = async () => {
    if (!role) {
      return toast.error("Please select your role.");
    }

    const step3Errors = validateRegisterStep3({
      password: formData.password,
      confirmPassword: formData.confirmPassword,
      acceptTerms,
    });

    if (Object.keys(step3Errors).length > 0) {
      setErrors(step3Errors);
      return toast.error(Object.values(step3Errors)[0]);
    }

    const { firstName, lastName } = splitFullName(formData.fullName);

    try {
      setLoading(true);

      await register({
        firstName,
        lastName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
        role,
      });

      toast.success("Account created successfully!");
      setStep(4);
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Registration failed."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleFieldChange = (e) => {
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

  const handleContinue = () => {
    const step2Errors = validateRegisterStep2(formData);
    if (Object.keys(step2Errors).length > 0) {
      setErrors(step2Errors);
      return;
    }
    setStep(3);
  };

  const step2Errors = validateRegisterStep2(formData);
  const step3Errors = validateRegisterStep3({
    password: formData.password,
    confirmPassword: formData.confirmPassword,
    acceptTerms,
  });

  const canContinue = Object.keys(step2Errors).length === 0;
  const canSubmit = Object.keys(step3Errors).length === 0;
  const passwordStrength = getPasswordStrength(formData.password);

  return (
    <div className="register-card">

      {/* STEP 1 */}

      {step === 1 && (
        <>
          <div className="register-header">
            <h2>Create Account</h2>

            <p>
              Choose the account type that best
              describes you.
            </p>
          </div>

          <div className="role-grid">
            {roles.map((item) => (
              <button
                key={item.id}
                type="button"
                className={
                  role === item.id
                    ? "role-card active"
                    : "role-card"
                }
                onClick={() => setRole(item.id)}
              >
                <div className="role-icon">
                  {item.icon}
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </button>
            ))}
          </div>

          <button
            className="continue-btn"
            disabled={!role}
            onClick={() => setStep(2)}
          >
            Continue

            <ArrowRight size={18} />
          </button>
        </>
      )}

      {/* STEP 2 */}

      {step === 2 && (
        <>
          <div className="register-header">
            <h2>Create Your Account</h2>

            <p>
              Step 2 of 4 •{" "}
              {role.charAt(0).toUpperCase() +
                role.slice(1)}
            </p>
          </div>

          <form>
            <div className={`input-group ${errors.fullName ? "input-invalid" : ""}`}>
              <label htmlFor="fullName">Full Name</label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="John Doe"
                value={formData.fullName}
                onChange={handleFieldChange}
                aria-invalid={!!errors.fullName}
                aria-describedby={errors.fullName ? "fullName-error" : undefined}
              />
              {errors.fullName && (
                <p id="fullName-error" className="input-error">
                  {errors.fullName}
                </p>
              )}
            </div>

            <div className={`input-group ${errors.email ? "input-invalid" : ""}`}>
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleFieldChange}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="input-error">
                  {errors.email}
                </p>
              )}
            </div>

            <div className={`input-group ${errors.phone ? "input-invalid" : ""}`}>
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+234..."
                value={formData.phone}
                onChange={handleFieldChange}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
              />
              {errors.phone && (
                <p id="phone-error" className="input-error">
                  {errors.phone}
                </p>
              )}
            </div>

            <div className="button-group">
              <button
                type="button"
                className="back-btn"
                onClick={() => setStep(1)}
              >
                Back
              </button>

              <button
                type="button"
                className="continue-btn"
                disabled={!canContinue}
                onClick={handleContinue}
              >
                Continue
              </button>
            </div>
          </form>
        </>
      )}

      {/* STEP 3 */}

      {step === 3 && (
        <>
          <div className="register-header">
            <h2>Secure Your Account</h2>

            <p>
              Step 3 of 4 • Create a strong
              password
            </p>
          </div>

          <form>
            <div className={`input-group ${errors.password ? "input-invalid" : ""}`}>
              <label htmlFor="password">Password</label>
              <div className="input-wrapper">
                <Lock size={20} />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleFieldChange}
                  aria-invalid={!!errors.password}
                  aria-describedby={errors.password ? "password-error" : "password-strength"}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              <div className="strength-bar">
                <div className={`strength-fill ${passwordStrength}`} />
              </div>
              <div className="input-status">
                <span id="password-strength" className="password-strength-text">
                  {getPasswordStrengthLabel(passwordStrength)}
                </span>
                <span>{formData.password.length} characters</span>
              </div>
              {errors.password && (
                <p id="password-error" className="input-error">
                  {errors.password}
                </p>
              )}
            </div>

            <div className={`input-group ${errors.confirmPassword ? "input-invalid" : ""}`}>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div className="input-wrapper">
                <Lock size={20} />
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleFieldChange}
                  aria-invalid={!!errors.confirmPassword}
                  aria-describedby={errors.confirmPassword ? "confirmPassword-error" : undefined}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.confirmPassword && (
                <p id="confirmPassword-error" className="input-error">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            <label className={`terms ${errors.acceptTerms ? "input-invalid" : ""}`}>
              <input
                type="checkbox"
                checked={acceptTerms}
                onChange={(e) => {
                  setAcceptTerms(e.target.checked);
                  if (errors.acceptTerms) {
                    setErrors((prev) => ({
                      ...prev,
                      acceptTerms: undefined,
                    }));
                  }
                }}
                aria-invalid={!!errors.acceptTerms}
                aria-describedby={errors.acceptTerms ? "terms-error" : undefined}
              />
              I agree to the Terms & Conditions.
            </label>
            {errors.acceptTerms && (
              <p id="terms-error" className="input-error">
                {errors.acceptTerms}
              </p>
            )}

            <div className="button-group">
              <button
                type="button"
                className="back-btn"
                onClick={() => setStep(2)}
              >
                Back
              </button>

              <button
                type="button"
                className="continue-btn"
                disabled={loading || !canSubmit}
                onClick={handleRegister}
              >
                {loading ? "Creating..." : "Create Account"}
              </button>
            </div>
          </form>
        </>
      )}

      {/* STEP 4 */}

      {step === 4 && (
        <div className="success-screen">
          <div className="success-icon">
            🎉
          </div>

          <h2>
            Account Created Successfully!
          </h2>

          <p>
            Welcome to HouseHub.
            <br />
            Your account has been created
            successfully.
          </p>

          <button
            className="login-success-btn"
            onClick={() =>
              navigate("/login")
            }
          >
            Go to Login
          </button>
        </div>
      )}
    </div>
  );
}