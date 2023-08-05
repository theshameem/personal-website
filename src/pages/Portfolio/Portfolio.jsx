import React from "react";
import PortfolioItem from "../../components/PortfolioItem";
import { portfolio } from "../../data";
import "./Portfolio.css";

function Portfolio() {
  return (
    <div className="portfolio section">
      <h2 className="section-title">
        My <span>Portfolio</span>{" "}
      </h2>

      <div className="portfolio-container container grid">
        {portfolio.map((item) => {
          return <PortfolioItem key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
}

export default Portfolio;
