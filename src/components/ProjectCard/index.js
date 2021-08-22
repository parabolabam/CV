import PropTypes from "prop-types";
import { Link } from "../Link";
import { Heading } from "../Heading";
import "./index.css";

export function ProjectCard({
  projectName,
  projectDescription,
  startDate,
  endDate,
  technologies,
}) {
  return (
    <div className="project-card">
      <h3>
        <p className="project-card__project-name">{projectName}</p>
      </h3>
      <p>{projectDescription}</p>
      <div className="project-card__period">
        <span>{startDate}</span> - <span>{endDate}</span>
      </div>
      <div className="project-card__tech-stack">
        {technologies.map((tech) => (
          <Link key={tech.id} href={tech.link}>
            {tech.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  id: PropTypes.string,
  projectName: PropTypes.string,
  projectDescription: PropTypes.string,
  startDate: PropTypes.string, // date,
  endDate: PropTypes.string, // date
  technologies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      link: PropTypes.string,
      name: PropTypes.string,
      comment: PropTypes.string,
    })
  ),
};
