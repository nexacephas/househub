import "./Contact.css";
import {
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Clock3,
} from "lucide-react";

export default function Contact() {
  return (
    <>
      {/* Hero */}

      <section className="contact-hero">

        <div className="container">

          <div className="breadcrumb">

            <span>Home</span>

            <ChevronRight size={16} />

            <span>Contact</span>

          </div>

          <span className="section-tag">
            CONTACT US
          </span>

          <h1>
            We'd Love to
            <span> Hear From You</span>
          </h1>

          <p>
            Whether you have questions about HouseHub, need support,
            want to partner with us, or simply want to say hello,
            we're here to help.
          </p>

        </div>

      </section>

      {/* Contact Info */}

      <section className="contact-info">

        <div className="container">

          <div className="contact-grid">

            <div className="contact-card">

              <div className="contact-icon">
                <Mail size={30}/>
              </div>

              <h3>Email</h3>

              <p>support@househub.ng</p>

            </div>

            <div className="contact-card">

              <div className="contact-icon">
                <Phone size={30}/>
              </div>

              <h3>Phone</h3>

              <p>+234 XXX XXX XXXX</p>

            </div>

            <div className="contact-card">

              <div className="contact-icon">
                <MapPin size={30}/>
              </div>

              <h3>Office</h3>

              <p>Abuja, Nigeria</p>

            </div>

            <div className="contact-card">

              <div className="contact-icon">
                <Clock3 size={30}/>
              </div>

              <h3>Business Hours</h3>

              <p>Mon – Fri · 8AM – 5PM</p>

            </div>

          </div>

        </div>

      </section>

      {/* Next Section */}

     <section className="contact-form-section">

  <div className="container">

    <div className="contact-wrapper">

      {/* Left Side */}

      <div className="contact-left">

        <span className="section-tag">
          LET'S TALK
        </span>

        <h2>
          Start a Conversation
        </h2>

        <p>
          Whether you're looking for a property, need help with
          verification, have a partnership proposal, or simply want
          to learn more about HouseHub, we'd love to hear from you.
        </p>

        <div className="contact-highlights">

          <div className="highlight">

            <div className="highlight-icon">
              ✓
            </div>

            <div>
              <h4>Fast Responses</h4>
              <p>We aim to reply within 24 hours.</p>
            </div>

          </div>

          <div className="highlight">

            <div className="highlight-icon">
              ✓
            </div>

            <div>
              <h4>Dedicated Support</h4>
              <p>Friendly assistance whenever you need it.</p>
            </div>

          </div>

          <div className="highlight">

            <div className="highlight-icon">
              ✓
            </div>

            <div>
              <h4>Partnership Opportunities</h4>
              <p>Let's build the future of real estate together.</p>
            </div>

          </div>

        </div>

      </div>

      {/* Right Side */}

      <div className="contact-form">

        <form>

          <div className="form-group">

            <label>Full Name</label>

            <input
              type="text"
              placeholder="Enter your full name"
            />

          </div>

          <div className="form-group">

            <label>Email Address</label>

            <input
              type="email"
              placeholder="you@example.com"
            />

          </div>

          <div className="form-group">

            <label>Phone Number</label>

            <input
              type="tel"
              placeholder="+234..."
            />

          </div>

          <div className="form-group">

            <label>Subject</label>

            <input
              type="text"
              placeholder="How can we help?"
            />

          </div>

          <div className="form-group">

            <label>Message</label>

            <textarea
              rows="6"
              placeholder="Tell us more..."
            />

          </div>

          <button
            type="submit"
            className="contact-btn"
          >
            Send Message
          </button>

        </form>

      </div>

    </div>

  </div>

</section>

<section className="contact-reasons">

  <div className="container">

    <span className="section-tag">
      WHY CONTACT US
    </span>

    <h2>
      We're Here to Help
    </h2>

    <p className="section-description">
      Whether you're a property seeker, landlord, agent, investor,
      or potential partner, our team is ready to assist.
    </p>

    <div className="reasons-grid">

      <div className="reason-card">

        <h3>Customer Support</h3>

        <p>
          Get assistance with your account, listings, verification,
          or general questions.
        </p>

      </div>

      <div className="reason-card">

        <h3>Partnerships</h3>

        <p>
          Interested in collaborating with HouseHub? We'd love
          to explore opportunities together.
        </p>

      </div>

      <div className="reason-card">

        <h3>Property Verification</h3>

        <p>
          Need help submitting documents or understanding our
          verification process? We're here for you.
        </p>

      </div>

    </div>

  </div>

</section>

<section className="office-hours">

  <div className="container">

    <span className="section-tag">
      BUSINESS HOURS
    </span>

    <h2>
      When We're Available
    </h2>

    <div className="hours-grid">

      <div className="hour-card">

        <h3>Monday – Friday</h3>

        <p>8:00 AM – 5:00 PM</p>

      </div>

      <div className="hour-card">

        <h3>Saturday</h3>

        <p>10:00 AM – 2:00 PM</p>

      </div>

      <div className="hour-card">

        <h3>Sunday</h3>

        <p>Closed</p>

      </div>

    </div>

  </div>

</section>


<section className="contact-cta">

  <div className="container">

    <h2>
      Ready to Experience Smarter Property Discovery?
    </h2>

    <p>
      Join HouseHub and become part of a trusted community where
      finding, listing, and verifying properties is simple,
      transparent, and secure.
    </p>

    <div className="cta-buttons">

      <button className="primary-btn">
        Join the Waitlist
      </button>

      <button className="secondary-btn">
        Browse Properties
      </button>

    </div>

  </div>

</section>


    </>
  );
}