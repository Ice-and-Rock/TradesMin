import React, { useState } from "react";
import projectsData from "../../Data/DummyData";
import ProjectDetails from "./ProjectDetails";

// TYPES
type Project = {
  ProjectName: string;
  products: Product[];
};
type Product = {
  product: string;
  quantity: number;
};

// Import data from an exernal database
// Use useEffect to retrieve the data from an external database
// use a fetch request and await the response
// store it in the variable 'projectsData'
// This should work with the current code ✅

const ProjectsPage: React.FC = () => {
  const [selectedProjectData, setSelectedProjectData] =
    useState<Project | null>(null);

  const handleProjectSelection = (project: Project) => {
    setSelectedProjectData(project);
  };
  const handleBackToProjects = () => {
    setSelectedProjectData(null);
  };
  const handleDeleteProject = () => {
    console.log("This hasn't been built!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-200 to-blue-400 text-gray-800">
      <h1 className="text-2xl font-bold mb-4">Projects Page</h1>

      {/* Project List */}
      {selectedProjectData ? (
        <ProjectDetails project={selectedProjectData} />
      ) : (
        <ul>
          <a
            href="/newproject"
            className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-blue-40 "
          >
            <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-100 group-hover:bg-white">
              <svg
                className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="flex items-center">
              <a className="font-semibold text-gray-900">New Project</a>
            </div>
          </a>
          {projectsData.map((project: Project) => (
            <li
              key={project.ProjectName}
              className="bg-blue-200 p-3 m-4 rounded-xl shadow flex items-center"
              onClick={() => handleProjectSelection(project)}
              style={{ cursor: "pointer" }}
            >
              <span className="flex-grow">{project.ProjectName}</span>
              <button
                onClick={() => handleDeleteProject()}
                className="text-red-500 hover:text-red-700"
              >
                <div className="flex h-11 w-11 m-2 flex-none items-center justify-center rounded-lg bg-gray-100 group-hover:bg-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </div>
              </button>

              {/* Get rid of the code below - CHEKCING DATA RENDERS */}
              {/* <ul className="bg-blue-300 rounded-xl">
              {project.products.map((product, productIndex) => (
                <li key={productIndex}>
                  {product.product}: {product.quantity}
                </li>
              ))}
            </ul> */}
            </li>
          ))}
        </ul>
      )}
      {selectedProjectData && (
        <button
          onClick={handleBackToProjects}
          className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 m-4 rounded-full"
        >
          Back
        </button>
      )}
    </div>
  );
};

export default ProjectsPage;
