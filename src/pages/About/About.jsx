import React from "react";
import { FaDownload } from "react-icons/fa";
import CV from "../../assets/Resume_Shameem_Alam.pdf";
import Info from "../../components/Info";
import Stats from "../../components/Stats";
import "./About.css";

function About() {
  return (
    <main className="section container">
      <section className="about">
        <h2 className="section-title">
          About <span>Me</span>
        </h2>

        <div className="about-container grid">
          <div className="about-info">
            <h3 className="section-subtitle">Personal Infos</h3>

            <ul className="info-list grid">
              <Info />
            </ul>

            <a href={CV} download="" className="button">
              Download CV
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
    </main>
  );
}

export default About;
