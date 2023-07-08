import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__contact">
          <h3>Contact Us</h3>
          <p>123 Restaurant Street</p>
          <p>City, State 12345</p>
          <p>Phone: 123-456-7890</p>
          <p>Email: info@thakurrestro.com</p>
        </div>
        <div className="footer__smallwares">
          <h3>Smallwares</h3>
          <ul>
            <li>Utensils</li>
            <li>Cutlery</li>
            <li>Glassware</li>
            <li>Plates</li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} thakur's. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
