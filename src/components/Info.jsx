import React from "react";
import { personalInfo } from "../data";

function Info() {
  return (
    <>
      {personalInfo.map(({ title, description }, index) => {
        return (
          <li className="info-item" key={index}>
            <span className="info-title">{title}</span>
            <span className="info-description">{description}</span>
          </li>
        );
      })}
    </>
  );
}
export default Info;
