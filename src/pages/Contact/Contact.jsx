import emailjs from "emailjs-com";
import {
  FaEnvelopeOpen,
  FaFacebookF,
  FaGithub,
  FaLinkedin,
  FaPhoneSquareAlt,
  FaTwitter,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { Form, Input, TextArea } from "semantic-ui-react";
import Swal from "sweetalert2";
import "./Contact.css";

const SERVICE_ID = "service_oonoivv";
const TEMPLATE_ID = "template_ya85x4h";
const PUBLIC_KEY = "rViE4E2jFiGYr1uzo";

function Contact() {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
      (result) => {
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
        e.target.reset();
      },
      (error) => {
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
        e.target.reset();
      }
    );
  };

  return (
    <section className="contact section">
      <h2 className="section-title">
        Get In <span className="">Touch</span>{" "}
      </h2>

      <div className="contact-container container grid">
        <div className="contact-data">
          <h3 className="contact-title">Don't be Shy !</h3>

          <p className="contact-description">
            Feel free to get in touch with me. I am always open to discussing
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
                <h4 className="info-desc">+880 16113 77700</h4>
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

        <Form className="contact-form" onSubmit={handleOnSubmit}>
          <div className="form-input-group">
            <div className="form-input-div">
              <Form.Field
                required
                control={Input}
                name="user_name"
                placeholder="Your Name"
                className="form-control"
              />
            </div>

            <div className="form-input-div">
              <Form.Field
                required
                control={Input}
                name="user_email"
                placeholder="Your Email"
                className="form-control"
              />
            </div>

            <div className="form-input-div">
              <Form.Field
                required
                control={Input}
                name="email_subject"
                placeholder="Your Subject"
                className="form-control"
              />
            </div>
          </div>

          <div className="form-input-div">
            <textarea
              required
              control={TextArea}
              name="message"
              placeholder="Your Message"
              className="form-control textarea"
            />
          </div>

          <button className="button" type="submit">
            Send Message
            <span className="button-icon contact-button-icon">
              <FiSend />
            </span>
          </button>
        </Form>
      </div>
    </section>
  );
}

export default Contact;
