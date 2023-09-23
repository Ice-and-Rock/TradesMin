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
    <div className="home">
      {error && <div> <p>{error}</p> </div>}
      {isPending && <div> <p>Waiting for data...</p> </div>}
      {fetchedProjects && (
        <div>
          <div className="links">
            <Link to="/createproject">New Project</Link>
          </div>
          <ProjectList
            fetchedProjects={fetchedProjects}
            title="All Projects!"
          />
        </div>
      )}
    </div>
  );
};
export default ProjectsPage;
