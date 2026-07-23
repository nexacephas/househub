import "./Privacy.css";

import Navbar from "../../../components/layout/Navbar";


export default function Privacy() {
  return (
    <>
      <Navbar />

      <main className="privacy-page">

        <section className="legal-hero">

          <div className="container">

            <span className="section-tag">
              PRIVACY
            </span>

            <h1>
              Privacy Policy
            </h1>

            <p>
              Your privacy matters to us. This Privacy Policy explains
              how HouseHub collects, uses, stores, and protects your
              personal information.
            </p>

            <small>
              Last Updated: July 2026
            </small>

          </div>

        </section>


        <section className="legal-content">

          <div className="container">


            <aside className="legal-sidebar">

              <h3>
                Contents
              </h3>

              <ul>

                <li>
                  <a href="#information">
                    Information We Collect
                  </a>
                </li>

                <li>
                  <a href="#usage">
                    How We Use Information
                  </a>
                </li>

                <li>
                  <a href="#sharing">
                    Information Sharing
                  </a>
                </li>

                <li>
                  <a href="#security">
                    Data Security
                  </a>
                </li>

                <li>
                  <a href="#cookies">
                    Cookies
                  </a>
                </li>

                <li>
                  <a href="#rights">
                    User Rights
                  </a>
                </li>

                <li>
                  <a href="#retention">
                    Data Retention
                  </a>
                </li>

                <li>
                  <a href="#contact">
                    Contact
                  </a>
                </li>

              </ul>

            </aside>



            <div className="legal-body">


              <section id="information">

                <h2>
                  Information We Collect
                </h2>

                <p>
                  HouseHub may collect personal information including:
                </p>

                <ul>

                  <li>
                    Name and contact details
                  </li>

                  <li>
                    Account information
                  </li>

                  <li>
                    Property preferences
                  </li>

                  <li>
                    Communication history
                  </li>

                  <li>
                    Device and usage information
                  </li>

                </ul>

              </section>



              <section id="usage">

                <h2>
                  How We Use Your Information
                </h2>

                <p>
                  We use collected information to:
                </p>

                <ul>

                  <li>
                    Provide property marketplace services
                  </li>

                  <li>
                    Improve user experience
                  </li>

                  <li>
                    Connect buyers with agents
                  </li>

                  <li>
                    Process transactions
                  </li>

                  <li>
                    Send important platform updates
                  </li>

                </ul>

              </section>



              <section id="sharing">

                <h2>
                  Information Sharing
                </h2>

                <p>
                  HouseHub does not sell personal information.
                  Information may only be shared with trusted partners,
                  service providers, or when required by law.
                </p>

              </section>



              <section id="security">

                <h2>
                  Data Security
                </h2>

                <p>
                  We use appropriate technical and organizational
                  measures to protect user information from unauthorized
                  access, loss, or misuse.
                </p>

              </section>



              <section id="cookies">

                <h2>
                  Cookies
                </h2>

                <p>
                  HouseHub uses cookies and similar technologies to
                  improve website functionality, analytics, and user
                  experience.
                </p>

              </section>



              <section id="rights">

                <h2>
                  Your Rights
                </h2>

                <p>
                  Users may request access, correction, or deletion of
                  their personal information where applicable.
                </p>

              </section>



              <section id="retention">

                <h2>
                  Data Retention
                </h2>

                <p>
                  We retain information only for as long as necessary
                  to provide services, comply with legal obligations,
                  and resolve disputes.
                </p>

              </section>



              <section id="contact">

                <h2>
                  Contact Us
                </h2>

                <p>
                  If you have questions about this Privacy Policy:
                </p>

                <p>
                  Email: privacy@househub.com
                </p>

              </section>


            </div>


          </div>

        </section>


      </main>




    </>
  );
}