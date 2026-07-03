import parse from "html-react-parser";
import { Link, useParams } from "react-router-dom";
import { portfolio } from "../../data";
import "./Portfolio.css";

function ProjectDetail() {
  const { id } = useParams();
  const project = portfolio.find((item) => item.id === Number(id));

  if (!project) {
    return (
      <div className="portfolio section">
        <h2 className="section-title">Project not found</h2>
        <Link to="/portfolio" className="button">
          Back to portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="portfolio section">
      <div className="project-detail container">
        <div className="project-detail-header">
          <h2 className="section-title">{project.title}</h2>
          <Link to="/portfolio" className="button">
            Back to portfolio
          </Link>
        </div>

        <div className="project-detail-content grid">
          <div className="project-detail-image">
            <img src={project.img} alt={project.title} />
          </div>

          <div className="project-detail-info">
            <div className="project-detail-box">
              <h3>Project Details</h3>
              <ul className="project-detail-list">
                {project.details.map(({ icon, title, desc }, index) => (
                  <li key={index}>
                    <span className="item-icon">{icon}</span>
                    <span>
                      <strong>{title}</strong>
                      {desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="project-detail-box">
              <h3>Description</h3>
              <div>{parse(project.description)}</div>
            </div>

            <div className="project-detail-box">
              <h3>Challenges</h3>
              <p>{project.challenges}</p>
            </div>

            <div className="project-detail-box">
              <h3>Future Plans</h3>
              <p>{project.futurePlans}</p>
            </div>

            <div className="project-detail-actions">
              {project.liveLink ? (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="button button-secondary"
                >
                  Live Project
                </a>
              ) : null}
              {project.githubLink ? (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="button button-secondary"
                >
                  GitHub Repo
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
