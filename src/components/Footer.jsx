import React from "react";
import { amex, discover, maestro, paypal, visa } from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faShopLock, faRainbow } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-container-inner">
        <div className="footer-content">
          <div className="sign-up-box">
            <div className="sign-up-left">
              <h1>Sign Up To Our Newsletter.</h1>
              <p>Be the first to hear about the latest offers.</p>
            </div>
            <div className="sign-up-right">
              <input type="text" placeholder="Your Email" />
              <button>Subscribe</button>
            </div>
          </div>
          <div className="footer-links">
            <div className="information">
              <h3>Information</h3>
              <ul>
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">About Zip</a>
                </li>
                <li>
                  <a href="">Privacy Policy</a>
                </li>
                <li>
                  <a href="">Search</a>
                </li>
                <li>
                  <a href="">Terms</a>
                </li>
                <li>
                  <a href="">Orders and Returns</a>
                </li>
                <li>
                  <a href="">Contact Us</a>
                </li>
                <li>
                  <a href="">Advanced Search</a>
                </li>
                <li>
                  <a href="">Newsletter Subscription</a>
                </li>
              </ul>
            </div>
            <div className="pc-parks">
              <h3>PC Parts</h3>
              <ul>
                <li>
                  <a href="">Add On Cards</a>
                </li>
                <li>
                  <a href="">Hard Drives (internal)</a>
                </li>
                <li>
                  <a href="">Graphic Cards</a>
                </li>
                <li>
                  <a href="">Keyboards / Mice</a>
                </li>
                <li>
                  <a href="">Cases / Power Supplies / Cooling</a>
                </li>
                <li>
                  <a href="">RAM (Memory)</a>
                </li>
                <li>
                  <a href="">Software</a>
                </li>
                <li>
                  <a href="">Speakers / Headsets</a>
                </li>
                <li>
                  <a href="">Motherboards</a>
                </li>
              </ul>
            </div>
            <div className="desktop-pcs">
              <h3>Desktop PCs</h3>
              <ul>
                <li>
                  <a href="">Custom PCs</a>
                </li>
                <li>
                  <a href="">Servers</a>
                </li>
                <li>
                  <a href="">MSI All-In-One PCs</a>
                </li>
                <li>
                  <a href="">HP/Compaq PCs</a>
                </li>
                <li>
                  <a href="">ASUS PCs</a>
                </li>
                <li>
                  <a href="">Tecs PCs</a>
                </li>
              </ul>
            </div>
            <div className="laptops">
              <h3>Laptops</h3>
              <ul>
                <li>
                  <a href="">Everyday Use Notebooks</a>
                </li>
                <li>
                  <a href="">MSI Workstation Series</a>
                </li>
                <li>
                  <a href="">MSI Prestige Series</a>
                </li>
                <li>
                  <a href="">Tablets and Pads</a>
                </li>
                <li>
                  <a href="">Notebooks</a>
                </li>
                <li>
                  <a href="">Infinity Gaming Notebooks</a>
                </li>
              </ul>
            </div>
            <div className="address">
              <h3>Address</h3>
              <ul>
                <li>
                  <a href="">Address: 1234 Street Address City Address, 1234</a>
                </li>
                <li>
                  <a href="">
                    Phones: <span>(00) 1234 5678</span>
                  </a>
                </li>
                <li>
                  <a href="">We are open: Monday-Thursday: 9:00 AM - 5:30 PM</a>
                </li>
                <li>
                  <a href="">Friday: 9:00 AM - 6:00 PM</a>
                </li>
                <li>
                  <a href="">Saturday: 11:00 AM - 5:00 PM</a>
                </li>
                <li>
                  <a href="">
                    E-mail: <span>shop@email.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <hr />

          <div className="icon-box">
            <div className="fb-icon">
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faInstagram} />
            </div>
            <div className="img-card">
              <img src={paypal} alt="" />
              <img src={visa} alt="" />
              <img src={maestro} alt="" />
              <img src={discover} alt="" />
              <img src={amex} alt="" />
            </div>
            <div className="copyright">
              <p>Copyright © 2020 Pty. Ltd</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
