import PropTypes from 'prop-types';
import { Link } from '../Link';
import './index.css';

export function ProjectCard({
  id,
  projectName,
  projectDescription,
  startDate,
  endDate,
  technologies,
}) {
  return (
    <div key={id} className="project-card">
      <h3>
        <p className="project-card__project-name">{projectName}</p>
      </h3>
      <p>{projectDescription}</p>
      <div className="project-card__period">
        <span>{startDate}</span>
        -
        <span>{endDate}</span>
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
  id: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  projectDescription: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired, // date,
  endDate: PropTypes.string.isRequired, // date
  technologies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      link: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      comment: PropTypes.string,
    }),
  ),
};
