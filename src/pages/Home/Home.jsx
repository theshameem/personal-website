import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
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
            I'm a dedicated front-end software engineer with a passion for
            learning and staying up-to-date with new technologies. With a focus
            on creating beautiful and user-friendly websites, I strive to
            continuously enhance my skills and explore innovative approaches to
            deliver exceptional digital experiences.
          </p>

          <Link to="/about" className="button">
            More About Me{" "}
            <span className="button-icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color-block"></div>
    </section>
  );
}

export default Home;
