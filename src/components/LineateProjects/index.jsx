import React from 'react';
import { ProjectCard } from '../ProjectCard';
import { Expandable } from '../Expandable';
import { projects } from './lineateProjects';

import './index.css';

export function LineateProjects() {
  return (
    <Expandable
      altForExpandButton="More about projects"
      altForCollapseButton="Collapse"
    >
      <div className="lineate-projects">
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
