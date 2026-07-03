import { FaFacebookF, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer section">
      <div className="container footer-container">
        <p className="footer-copy">
          © {new Date().getFullYear()} Md. Shameem Alam. All rights reserved.
        </p>
        <div className="footer-socials">
          <a
            href="https://www.linkedin.com/in/theshameem/"
            target="_blank"
            rel="noreferrer"
            className="footer-social-link"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/theshameem"
            target="_blank"
            rel="noreferrer"
            className="footer-social-link"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com/shameem1362"
            target="_blank"
            rel="noreferrer"
            className="footer-social-link"
          >
            <FaTwitter />
          </a>
          <a
            href="https://facebook.com/theshameem.alam"
            target="_blank"
            rel="noreferrer"
            className="footer-social-link"
          >
            <FaFacebookF />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
