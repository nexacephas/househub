import "./AuthLayout.css";

import { Outlet } from "react-router-dom";

import { ShieldCheck } from "lucide-react";

export default function AuthLayout() {
  return (
    <section className="auth">

      <div className="auth-left">

        <div className="overlay" />

        <div className="auth-content">

          <div className="logo">

            <ShieldCheck size={34} />

            <span>HouseHub</span>

          </div>

          <h1>
            Find Verified Properties.
            <br />
            Build With Confidence.
          </h1>

          <p>
            HouseHub connects tenants, landlords, and agents through
            verified listings, trusted identities, and a safer
            property experience across Nigeria.
          </p>

          <div className="stats">

            <div>
              <h3>100%</h3>
              <span>Verified Listings</span>
            </div>

            <div>
              <h3>Secure</h3>
              <span>User Verification</span>
            </div>

            <div>
              <h3>24/7</h3>
              <span>Support</span>
            </div>

          </div>

        </div>

      </div>

      <div className="auth-right">

        <Outlet />

      </div>

    </section>
  );
}