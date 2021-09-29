import { ProjectCard } from "../ProjectCard";
import { Expandable } from "../Expandable";
import { projects } from "./lineateProjects";
import React from "react";

import "./index.css";

export function LineateProjects() {
  return (
    <Expandable
      altForExpandButton="More about projects"
      altForCollapseButton="Collapse"
    >
      <div className="lineate-projects">
        {projects.map((project) => {
          return <ProjectCard key={project.id} {...project} />;
        })}
      </div>
    </Expandable>
  );
}
