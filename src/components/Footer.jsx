import { Link } from "react-router";
import "./Footer.css";
import { XIcon, FacebookIcon, InstagramIcon } from "./icons.jsx";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <div className="links">
          {/* Brand */}
          <div className="links_div">
            <div className="brand_div">
              <h3 className="h3">Stoneleaf Furnishings</h3>
            </div>
            <p className="p">
              Premium furniture for your modern lifestyle. Quality
              craftsmanship, timeless design.
            </p>
          </div>

          <div className="links_subdiv">
            {/* Customer Service */}
            <div className="links_div">
              <h3>Customer Service</h3>
              <a href="#">Shipping Information</a>
              <a href="#">Returns & Exchanges</a>
              <a href="#">Warranty</a>
              <a href="#">Assembly Services</a>
            </div>

            {/* Quick Links */}
            <div className="links_div">
              <h3>Quick Links</h3>
              <Link to="/shop">Shop All</Link>
              <Link to="/about">About Us</Link>
              <a href="#">Contact</a>
              <a href="#">FAQ</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="social_links">
          <p className="social_p">
            © 2026 Stoneleaf Furnishings. All rights reserved.
          </p>
          <div className="icons">
            <a className="icon" href="#">
              <FacebookIcon />
            </a>
            <a className="icon" href="#">
              <InstagramIcon />
            </a>
            <a className="icon" href="#">
              <XIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
