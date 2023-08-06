import parse from "html-react-parser";
import React from "react";

function ResumeItem({ icon, year, title, desc }) {
  return (
    <div className="resume-item">
      <div className="resume-icon">{icon}</div>

      <span className="resume-date">{year}</span>
      <h3 className="resume-subtitle">{parse(title)}</h3>
      <p className="resume-description">{parse(desc)}</p>
    </div>
  );
}

export default ResumeItem;
