import React from "react";
import { Link } from "react-router-dom";

const ProjectsList = ({ fetchedProjects, title }) => {
  // console.log(fetchedProjects);

  return (
    <div className="projects-list">
      <h2>{title}</h2>
      {fetchedProjects.map((project) => (
        <div
          className=".p-2 md:p-4 my-5 border-b border-gray-300 hover:shadow-md text-pink-600 hover:text-pink-500"
          key={project.id}
        >
          <Link to={`/projects/${project.id}`}>
            <h2 className="text-2xl text-pink-600 mb-2">{project.project_name}</h2>
            <p>{project.body}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProjectsList;
