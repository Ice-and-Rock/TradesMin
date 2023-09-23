import React from "react";
import { Link } from "react-router-dom";

const ProjectsList = ({ fetchedProjects, title, }) => {
  // console.log(fetchedProjects);

  return (
    <div className="projects-list">
      <h2>{title}</h2>
      {fetchedProjects.map((project) => (
        <div className="project-preview" key={project.id}>
        <Link to={`/projects/${project.id}`}>
          <h2>{project.project_name}</h2>
          <p>{project.body}</p>
        </Link>
          
        </div>
      ))}
    </div>
  );
};

export default ProjectsList;
