import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import CV from "../../assets/Resume_Shameem_Alam.pdf";
import ProfileImage from "../../assets/shameem_alam.png";
import ProfileImageMobile from "../../assets/shameem_alam_mobile.png";
import "./Home.css";

function Home() {
  return (
    <section className="home section grid">
      <img src={ProfileImage} alt="profile-image" className="h-img" />
      <img
        src={ProfileImageMobile}
        alt="profile-image-mobile"
        className="h-img-mobile"
      />

      <div className="h-content">
        <div className="h-data">
          <h1 className="h-title">
            <span>I'm Shameem Alam.</span> Software Engineer
          </h1>

          <p className="h-description">
            I'm a dedicated full-stack software engineer with a passion for
            learning and staying up-to-date with new technologies. With a focus
            on creating beautiful and user-friendly websites, and back-end
            development, where I have a strong foundation in C# and the .NET
            framework. I strive to continuously enhance my skills and explore
            innovative approaches to deliver exceptional digital experiences.
          </p>

          <div className="h-buttons">
            <Link to="/about" className="button">
              More About Me
              <span className="button-icon">
                <FaArrowRight />
              </span>
            </Link>
            <a href={CV} download className="button button-secondary">
              Download Resume
            </a>
          </div>
        </div>
      </div>

      <div className="color-block"></div>
    </section>
  );
}

export default Home;
