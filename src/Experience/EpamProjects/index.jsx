import React from 'react';
import { ProjectCard } from '../../components/ProjectCard';
import { Expandable } from '../../components/Expandable';
import { projects } from './epamProjects';

import './index.css';

export function EpamProjects() {
  return (
    <Expandable
      altForExpandButton="More about projects"
      altForCollapseButton="Collapse"
    >
      <div className="epam-projects">
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
  );
}
