import { ProjectCard } from "../ProjectCard";
import { Expandable } from "../Expandable";
import { projects } from "./lineateProjects";

export function LineateProjects() {
  console.log(projects);
  return (
    <Expandable>
      <div>
        {projects.map((project) => {
          return <ProjectCard key={project.id} {...project} />;
        })}
      </div>
    </Expandable>
  );
}
