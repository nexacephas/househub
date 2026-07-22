import "./CTASection.css";
import appPreview from "../../../assets/images/hero/app-preview.png.png";
import {
  ArrowRight,
  ShieldCheck,
  Smartphone,
  Star,
} from "lucide-react";

export default function CallToAction() {
  return (
    <section className="cta">

      <div className="container">

        <div className="cta-content">

          {/* LEFT */}

          <div className="cta-left">

            <span className="section-tag">
              GET STARTED
            </span>

            <h2>
              Your Next Home Is Just One Verified Search Away.
            </h2>

            <p>
              Whether you're buying, renting, or listing a property,
              HouseHub helps you discover verified homes with
              confidence, security, and complete transparency.
            </p>

            <div className="trust-pill">

              <ShieldCheck size={18} />

              <span>
                Trusted Verification • Built for Nigeria
              </span>

            </div>

            <div className="store-buttons">

              <button className="store-btn">

                <Smartphone size={22} />

                <div>

                  <small>Coming Soon</small>

                  <strong>Google Play</strong>

                </div>

              </button>

              <button className="store-btn">

                <Smartphone size={22} />

                <div>

                  <small>Coming Soon</small>

                  <strong>App Store</strong>

                </div>

              </button>

            </div>

            <div className="waitlist">

              <button>

                Join the Waitlist

                <ArrowRight size={18} />

              </button>

            </div>

          </div>

          {/* RIGHT */}

          <div className="cta-right">

            <div className="phone">

            <img
  src={appPreview}
  alt="HouseHub Mobile App"
/>

            </div>

            {/* Floating Cards */}

            <div className="floating-card card-one">

              <ShieldCheck />

              <div>

                <strong>Verified Listing</strong>

                <small>100% Checked</small>

              </div>

            </div>

            <div className="floating-card card-two">

              <Star />

              <div>

                <strong>1,200+</strong>

                <small>Verified Homes</small>

              </div>

            </div>

            <div className="floating-card card-three">

              <ShieldCheck />

              <div>

                <strong>Trusted</strong>

                <small>Secure Platform</small>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}