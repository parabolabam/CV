import PropTypes from "prop-types";
import { Link } from "../Link";
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
      <p>{projectName}</p>
      <p>{projectDescription}</p>
      <div className="project-card__period">
        <span>{startDate}</span> - <span>{endDate}</span>
      </div>
      {technologies.map((tech) => (
        <Link key={tech.id} href={tech.link}>
          {tech.name}
        </Link>
      ))}
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
