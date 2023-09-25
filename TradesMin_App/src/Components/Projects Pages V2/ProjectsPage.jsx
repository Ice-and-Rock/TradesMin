import React from "react";
import useFetch from "./useFetch.jsx";
import ProjectList from "./ProjectList.jsx";
import { Link } from "react-router-dom";

const ProjectsPage = () => {
  const {
    data: fetchedProjects,
    isPending,
    error,
  } = useFetch("http://localhost:8000/projects");

  return (
    <div className="flex h-max bg-blue-100">
      <div className="bg-blue-200 m-8 sm:p-8 shadow m-8 rounded-xl flex flex-col">
        {error && <div className="text-red-600"> {error} </div>}
        {isPending && <div className="text-gray-600"> Waiting for data...</div>}
        {fetchedProjects && (
          <div>
            <div className="flex flex-col p-2 min-w-auto">
              <Link
                to="/createproject"
                className="flex flex-row bg-pink-500 text-white py-2 px-4 m-4 rounded-full hover:bg-pink-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 pr-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                <span>New Project</span>
              </Link>
              <ProjectList
                fetchedProjects={fetchedProjects}
                title="Projects list..."
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default ProjectsPage;