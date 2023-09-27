import React from "react";
import { Link } from "react-router-dom";

const ProjectsList = ({ fetchedProjects, title }) => {
  // console.log(fetchedProjects);

  return (
    <div className="projects-list">
      <h2 className="text-2xl text-pink-600 font-bold mb-4">{title}</h2>
      {fetchedProjects.map(( project ) => (
        <div
          className=".p-2 md:p-4 my-5 border-b border-gray-300 hover:shadow-md text-pink-600 hover:text-pink-500"
          key={project.id}
        >
        <div className="rounded-xl p-3 m-1 bg-blue-300 shadow-md hover:shadow-2xl ">
          <Link to={`/projects/${project.id}`}>
            <h2 className="text-2xl text-pink-600 mb-2">{project.project_name}</h2>
            <p className="text-gray-800 text-sm">{project.body}</p>
          </Link>
          </div>
        </div>
      ))
      // REVERSE the order of the data ✅
      .reverse()
      }
    </div>
  );
};

export default ProjectsList;
