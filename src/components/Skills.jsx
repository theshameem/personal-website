import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { skills } from "../data";

function Skills() {
  return (
    <>
      {skills.map(({ title, percentage }, index) => {
        return (
          <div className="progress-box" key={index}>
            <div className="progress-circle">
              <CircularProgressbar
                strokeWidth={7.5}
                text={`${percentage}%`}
                value={percentage}
              />
            </div>
            <h3 className="skills-title">{title}</h3>
          </div>
        );
      })}
    </>
  );
}

export default Skills;
