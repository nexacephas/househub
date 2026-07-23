import "./Terms.css";

import Navbar from "../../../components/layout/Navbar";

export default function Terms() {
  return (
    <>
      <Navbar />

      <main className="terms-page">

        <section className="legal-hero">

          <div className="container">

            <span className="section-tag">
              LEGAL
            </span>

            <h1>Terms & Conditions</h1>

            <p>
              Please read these Terms and Conditions carefully before
              using HouseHub. By accessing our platform, you agree to
              comply with these terms.
            </p>

            <small>
              Last Updated: July 2026
            </small>

          </div>

        </section>

        <section className="legal-content">

          <div className="container">

            <aside className="legal-sidebar">

              <h3>Contents</h3>

              <ul>

                <li><a href="#acceptance">Acceptance</a></li>
                <li><a href="#eligibility">Eligibility</a></li>
                <li><a href="#accounts">Accounts</a></li>
                <li><a href="#listings">Property Listings</a></li>
                <li><a href="#agents">Agent Responsibilities</a></li>
                <li><a href="#payments">Payments</a></li>
                <li><a href="#conduct">Prohibited Conduct</a></li>
                <li><a href="#liability">Liability</a></li>
                <li><a href="#privacy">Privacy</a></li>
                <li><a href="#contact">Contact</a></li>

              </ul>

            </aside>

            <div className="legal-body">

              <section id="acceptance">
                <h2>Acceptance of Terms</h2>

                <p>
                  By accessing HouseHub, you agree to comply with these
                  Terms and Conditions. If you do not agree, please stop
                  using the platform immediately.
                </p>

              </section>

              <section id="eligibility">

                <h2>Eligibility</h2>

                <p>
                  Users must be at least 18 years old and provide
                  accurate information when creating an account.
                </p>

              </section>

              <section id="accounts">

                <h2>User Accounts</h2>

                <p>
                  You are responsible for maintaining the security of
                  your account and password.
                </p>

              </section>

              <section id="listings">

                <h2>Property Listings</h2>

                <p>
                  Property owners and agents must ensure listings are
                  accurate, lawful, and up to date.
                </p>

              </section>

              <section id="agents">

                <h2>Agent Responsibilities</h2>

                <p>
                  Verified agents must provide truthful information,
                  maintain professional conduct, and comply with all
                  applicable laws.
                </p>

              </section>

              <section id="payments">

                <h2>Payments</h2>

                <p>
                  Premium services, featured listings, and advertising
                  may require payment. Fees are displayed before
                  purchase.
                </p>

              </section>

              <section id="conduct">

                <h2>Prohibited Conduct</h2>

                <ul>

                  <li>Fraudulent listings</li>

                  <li>Identity theft</li>

                  <li>Spam</li>

                  <li>Harassment</li>

                  <li>Illegal activities</li>

                </ul>

              </section>

              <section id="liability">

                <h2>Limitation of Liability</h2>

                <p>
                  HouseHub provides a marketplace platform and is not a
                  party to property transactions between users.
                </p>

              </section>

              <section id="privacy">

                <h2>Privacy</h2>

                <p>
                  Please review our Privacy Policy to understand how
                  your information is collected and used.
                </p>

              </section>

              <section id="contact">

                <h2>Contact Us</h2>

                <p>
                  Email: support@househub.com
                </p>

                <p>
                  Phone: +234 XXX XXX XXXX
                </p>

              </section>

            </div>

          </div>

        </section>

      </main>


    </>
  );
}