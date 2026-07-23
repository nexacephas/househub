import "./Login.css";

import { Link } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

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

      <form>

        {/* Email */}

        <div className="input-group">

          <label>Email Address</label>

          <div className="input-wrapper">

            <Mail size={20} />

            <input
              type="email"
              placeholder="Enter your email"
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
              placeholder="Enter your password"
            />

            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
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

        {/* Button */}

        <button className="login-btn">

          Login

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