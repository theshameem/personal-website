import { FaDownload } from "react-icons/fa";
import CV from "../../assets/Resume_Shameem_Alam.pdf";
import Info from "../../components/Info";
import ResumeItem from "../../components/ResumeItem";
import Skills from "../../components/Skills";
import Stats from "../../components/Stats";
import { resume } from "../../data";
import "./About.css";

function About() {
  const experience = resume.filter((val) => val.category === "experience");
  const education = resume.filter((val) => val.category === "education");
  const educationLeft = education.filter((val) =>
    val.title.includes("Bachelor"),
  );
  const educationRight = education.filter(
    (val) => !val.title.includes("Bachelor"),
  );

  return (
    <main className="section container">
      {/* About section  */}
      <section className="about">
        <h2 className="section-title">
          About <span>Me</span>
        </h2>

        <div className="about-description">
          <p>
            I started my software development journey building responsive user
            interfaces and gradually expanded into full-stack systems with
            ASP.NET Core APIs. I enjoy turning complex requirements into clean
            user experiences, working closely with designers, product owners,
            and backend teams.
          </p>
          <p>
            Outside of work, I love solving algorithmic problems, mentoring
            junior developers, and exploring new frontend patterns. When I am
            not coding, I enjoy reading, chess, and staying active through
            sports.
          </p>
        </div>

        <div className="about-container grid">
          <div className="about-info">
            <h3 className="section-subtitle">Personal Infos</h3>

            <ul className="info-list grid">
              <Info />
            </ul>

            <a href={CV} download="" className="button">
              Resume
              <span className="button-icon">
                <FaDownload />
              </span>
            </a>
          </div>

          <div className="stats grid">
            <Stats />
          </div>
        </div>
      </section>

      <div className="separator" />

      <section className="skills">
        <h3 className="section-subtitle subtitle-center">My Skills</h3>

        <div className="skills-container grid">
          <Skills />
        </div>
      </section>

      <div className="separator" />

      {/* Experience section  */}
      <section className="resume">
        <h3 className="section-subtitle subtitle-center">Experience</h3>

        <div className="resume-container grid">
          <div className="resume-data">
            {experience.slice(0, 2).map((val) => (
              <ResumeItem key={val.id} {...val} />
            ))}
          </div>
          <div className="resume-data">
            {experience.slice(2).map((val) => (
              <ResumeItem key={val.id} {...val} />
            ))}
          </div>
        </div>
      </section>

      <div className="separator" />

      {/* Education section  */}
      <section className="resume">
        <h3 className="section-subtitle subtitle-center">Education</h3>

        <div className="resume-container grid">
          <div className="resume-data">
            {educationLeft.map((val) => (
              <ResumeItem key={val.id} {...val} />
            ))}
          </div>
          <div className="resume-data">
            {educationRight.map((val) => (
              <ResumeItem key={val.id} {...val} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
