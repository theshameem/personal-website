import { Link } from "react-router-dom";

const PortfolioItem = ({
  id,
  img,
  title,
  details,
  description,
  liveLink,
  githubLink,
  challenges,
  futurePlans,
}) => {
  return (
    <div className="portfolio-item">
      <img src={img} alt="portfolio-img" className="portfolio-img" />

      <div className="portfolio-hover">
        <div className="portfolio-hover-content">
          <h3 className="portfolio-title">{title}</h3>
          <Link to={`/portfolio/${id}`} className="portfolio-view-more">
            View more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
