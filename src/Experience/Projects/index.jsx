import React from 'react';

import { ProjectCard } from '../../components/ProjectCard';
import { Expandable } from '../../components/Expandable';

import './index.css';

export default function Projects({ projects }) {
  return (
    <React.StrictMode>
      <Expandable
        altForExpandButton="More about projects"
        altForCollapseButton="Collapse"
      >
        <div className="projects">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              projectName={project.projectName}
              projectDescription={project.projectDescription}
              startDate={project.startDate}
              endDate={project.endDate}
              technologies={project.technologies}
            />
          ))}
        </div>
      </Expandable>
    </React.StrictMode>
  );
}
