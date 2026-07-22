import "./Footer.css";
import { NavLink } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-top">

          {/* Brand */}

          <div className="footer-brand">

            <h2>HouseHub</h2>

            <p>
              Nigeria's trusted PropTech platform connecting tenants,
              landlords, agents, and property investors through verified
              listings and transparent property discovery.
            </p>

            <div className="socials">

              <a href="#"><FaFacebookF size={18} /></a>

              <a href="#"><FaInstagram size={18} /></a>

              <a href="#"><FaXTwitter size={18} /></a>

              <a href="#"><FaLinkedinIn size={18} /></a>

            </div>

          </div>

          {/* Company */}

          <div>

            <h4>Company</h4>

            <ul>

              <li><NavLink to="/about">
  About
</NavLink></li>

              <li><a href="#">Our Mission</a></li>

              <li><a href="#">Careers</a></li>

              <li><a href="#">Press</a></li>

              <li><a href="#">Blog</a></li>

            </ul>

          </div>

          {/* Platform */}

          <div>

            <h4>Platform</h4>

            <ul>

              <li><a href="#">Browse Homes</a></li>

              <li><a href="#">Find Agents</a></li>

              <li><a href="#">For Landlords</a></li>

              <li><a href="#">Verification</a></li>

              <li><a href="#">Pricing</a></li>

            </ul>

          </div>

          {/* Resources */}

          <div>

            <h4>Resources</h4>

            <ul>

              <li><a href="#">Help Center</a></li>

              <li><a href="#">FAQs</a></li>

              <li><a href="#">Privacy Policy</a></li>

              <li><a href="#">Terms of Service</a></li>

              <li><a href="#">Cookie Policy</a></li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h4>Contact</h4>

            <ul className="contact-list">

              <li>
                <Mail size={17}/>
                support@househub.ng
              </li>

              <li>
                <Phone size={17}/>
                +234 XXX XXX XXXX
              </li>

              <li>
                <MapPin size={17}/>
                Abuja, Nigeria
              </li>

            </ul>

          </div>

        </div>

        {/* Newsletter */}

        <div className="newsletter">

          <div>

            <h3>Stay Updated</h3>

            <p>
              Subscribe for property tips,
              market insights,
              and HouseHub updates.
            </p>

          </div>

          <form>

            <input
              type="email"
              placeholder="Enter your email"
            />

            <button>

              Subscribe

              <ArrowRight size={18}/>

            </button>

          </form>

        </div>

        {/* Bottom */}

        <div className="footer-bottom">

          <p>

            © {new Date().getFullYear()} HouseHub.
            All Rights Reserved.

          </p>

          <span>

            Made in Nigeria

          </span>

        </div>

      </div>

    </footer>
  );
}