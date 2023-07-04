import React from "react";
import ProjectItem from "./ProjectItem";



function ProjectList({ projects }) {
  console.log(projects);
  const ProjectItems = projects.map((project) => (
    <ProjectItem
      key={project.id}
      name={project.name}
      about={project.about}
      technologies={project.technologies}
      />
  ))
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{ProjectItems}</div>
    </div>
  );
}

export default ProjectList;

// projects: [
//   {
//     id: 1,
//     name: "Reciplease",
//     about: "A recipe tracking app",
//     technologies: ["Rails", "Bootstrap CSS"],
//   },
//   {
//     id: 2,
//     name: "Kibbles N Bitz",
//     about: "Tinder for dogs",
//     technologies: ["React", "Redux"],
//   },
//   {
//     id: 3,
//     name: "Alienwares",
//     about: "Etsy for aliens",
//     technologies: ["React", "Redux", "Rails"],
//   },
// ],
// };

// export default user;