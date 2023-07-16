import parse from "html-react-parser";
import React from "react";
import { stats } from "../data";

function Stats() {
  return (
    <>
      {stats.map(({ no, title }, index) => {
        return (
          <div className="stats-box" key={index}>
            <h3 className="stats-no">{no}</h3>
            <p className="stats-title">{parse(title)}</p>
          </div>
        );
      })}
    </>
  );
}

export default Stats;
