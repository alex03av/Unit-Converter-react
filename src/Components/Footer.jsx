import React from "react";
import { FaFacebookF, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <footer className="footer-distributed">
        <div className="footer-right">
          <a href="https://www.facebook.com/alexander.araujo.796">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com/Aalexanderjo">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/alexanderaraujo00/">
            <FaInstagram />
          </a>
          <a href="https://github.com/alex03av">
            <FaGithub />
          </a>
        </div>

        <div className="footer-left">
          <p>Company anonymous &copy; 2023</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
