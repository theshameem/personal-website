import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { skills } from "../data";

function Skills() {
  return (
    <>
      {skills.map((group, groupIndex) => (
        <div className="skills-group" key={groupIndex}>
          <h3 className="skills-group-title">{group.category}</h3>
          <div className="skills-group-grid">
            {group.items.map(({ title, percentage }, index) => (
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
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default Skills;
