import "./Register.css";

import { useState } from "react";

import {
  User,
 Building2,
 Briefcase,
 ArrowRight,
 Eye,
 EyeOff,
 Lock,
} from "lucide-react";

export default function Register() {
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
});const roles = [
  {
    id: "tenant",
    icon: <User size={32} />,
    title: "Tenant",
    description: "Find verified apartments and houses.",
  },
  {
    id: "landlord",
    icon: <Building2 size={32} />,
    title: "Landlord",
    description: "List and manage your properties.",
  },
  {
    id: "agent",
    icon: <Briefcase size={32} />,
    title: "Agent",
    description: "Connect buyers, tenants and landlords.",
  },
];

return (
  <div className="register-card">

    {step === 1 && (
      <>
        <div className="register-header">
          <h2>Create Account</h2>

          <p>
            Choose the account type that best describes you.
          </p>
        </div>

        <div className="role-grid">

          {roles.map((item) => (
            <button
              type="button"
              key={item.id}
              onClick={() => setRole(item.id)}
              className={
                role === item.id
                  ? "role-card active"
                  : "role-card"
              }
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
          type="button"
          className="continue-btn"
          disabled={!role}
          onClick={() => setStep(2)}
        >
          Continue

          <ArrowRight size={18} />
        </button>
      </>
    )}

    {step === 2 && (
      <>
        <div className="register-header">

          <h2>Create Your Account</h2>

          <p>
            Step 2 of 4 • {role.charAt(0).toUpperCase() + role.slice(1)}
          </p>

        </div>

        <form>

          <div className="input-group">

            <label>Full Name</label>

            <input
              type="text"
              placeholder="John Doe"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  fullName: e.target.value,
                })
              }
            />

          </div>

          <div className="input-group">

            <label>Email Address</label>

            <input
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
            />

          </div>

          <div className="input-group">

            <label>Phone Number</label>

            <input
              type="tel"
              placeholder="+234..."
              value={formData.phone}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  phone: e.target.value,
                })
              }
            />

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
              onClick={() => setStep(3)}
            >
              Continue
            </button>

          </div>

        </form>
      </>
    )}
    
{step === 3 && (
  <>
    <div className="register-header">

      <h2>Secure Your Account</h2>

      <p>
        Step 3 of 4 • Create a strong password
      </p>

    </div>

    <form>

      <div className="input-group">

        <label>Password</label>

        <div className="input-wrapper">

          <Lock size={20} />

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Create a password"
            value={formData.password}
            onChange={(e) =>
              setFormData({
                ...formData,
                password: e.target.value,
              })
            }
          />

          <button
            type="button"
            className="password-toggle"
            onClick={() =>
              setShowPassword(!showPassword)
            }
          >
            {showPassword ? (
              <EyeOff size={18} />
            ) : (
              <Eye size={18} />
            )}
          </button>

        </div>

      </div>

      <div className="strength-bar">

        <div
          className={
            formData.password.length >= 8
              ? "strength-fill strong"
              : "strength-fill"
          }
        />

      </div>

      <small className="password-tip">
        Use at least 8 characters including letters and numbers.
      </small>

      <div className="input-group">

        <label>Confirm Password</label>

        <div className="input-wrapper">

          <Lock size={20} />

          <input
            type={
              showConfirmPassword
                ? "text"
                : "password"
            }
            placeholder="Confirm password"
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData({
                ...formData,
                confirmPassword: e.target.value,
              })
            }
          />

          <button
            type="button"
            className="password-toggle"
            onClick={() =>
              setShowConfirmPassword(
                !showConfirmPassword
              )
            }
          >
            {showConfirmPassword ? (
              <EyeOff size={18} />
            ) : (
              <Eye size={18} />
            )}
          </button>

        </div>

      </div>

      <label className="terms">

        <input
          type="checkbox"
          checked={acceptTerms}
          onChange={(e) =>
            setAcceptTerms(e.target.checked)
          }
        />

        I agree to the Terms of Service and Privacy Policy.

      </label>

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
          disabled={
            !acceptTerms ||
            formData.password.length < 8 ||
            formData.password !==
              formData.confirmPassword
          }
          onClick={() => setStep(4)}
        >
          Create Account
        </button>

      </div>

    </form>
  </>
)}

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

We've sent a verification link to

<strong>{formData.email}</strong>

</p>

<Link
to="/login"
className="login-success-btn"
>

Go to Login

</Link>

</div>

)}

  </div>
);
}