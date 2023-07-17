import React from "react";
import {
  FaEnvelopeOpen,
  FaFacebookF,
  FaGithub,
  FaLinkedin,
  FaPhoneSquareAlt,
  FaTwitter,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact section">
      <h2 className="section-title">
        Get In <span className="">Touch</span>{" "}
      </h2>

      <div className="contact-container container grid">
        <div className="contact-data">
          <h3 className="contact-title">Don't be Shy !</h3>

          <p className="contact-description">
            Feel free to get in tough with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>

          <div className="contact-info">
            <div className="info-item">
              <FaEnvelopeOpen className="info-icon" />

              <div>
                <span className="info-title">Mail me</span>
                <h4 className="info-desc">theshameem.alam@gmail.com</h4>
              </div>
            </div>

            <div className="info-item">
              <FaPhoneSquareAlt className="info-icon" />

              <div>
                <span className="info-title">Call me</span>
                <h4 className="info-desc">+88 01611377700</h4>
              </div>
            </div>
          </div>

          <div className="contact-socials">
            <a
              href="https://www.linkedin.com/in/shameem-alam/"
              className="contact-social-link"
              target="__blank"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://facebook.com/wl.reino"
              className="contact-social-link"
              target="__blank"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://twitter.com/shameem1362"
              className="contact-social-link"
              target="__blank"
            >
              <FaTwitter />
            </a>

            <a
              href="https://github.com/theshameem"
              className="contact-social-link"
              target="__blank"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        <div className="contact-form">
          <div className="form-input-group">
            <div className="form-input-div">
              <input
                type="text"
                placeholder="Your Name"
                className="form-control"
              />
            </div>

            <div className="form-input-div">
              <input
                type="email"
                placeholder="Your Email"
                className="form-control"
              />
            </div>

            <div className="form-input-div">
              <input
                type="text"
                placeholder="Your Subject"
                className="form-control"
              />
            </div>
          </div>

          <div className="form-input-div">
            <textarea
              placeholder="Your Message"
              className="form-control textarea"
            ></textarea>
          </div>

          <button className="button">
            Send Message
            <span className="button-icon contact-button-icon">
              <FiSend />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
