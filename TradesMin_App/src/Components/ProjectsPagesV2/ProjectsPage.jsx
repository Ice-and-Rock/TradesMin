import useFetchProjectData from "../../hooks/useFetchProjectData.js";
import ProjectList from "./ProjectList";
import { Link } from "react-router-dom";
// import { useAuth } from "../../Context/AuthProvider";



export const ProjectsPage = () => {

  // const { user } = useAuth();
  const {
    data: fetchedProjects,
    isPending,
    error,
  } = useFetchProjectData();


  return (
    <div className="flex h-full bg-gradient-to-b from-blue-100 to-blue-300">
      <div className="bg-blue-200 m-8 sm:p-8 shadow m-8 rounded-xl flex flex-col">
        {error && <div className="text-red-600"> {error} </div>}
        {isPending && <div className="text-pink-500 font-bold m-2 p-2"> Waiting for data... </div>}
        {fetchedProjects && (
          <div>
            <div className="flex flex-col p-2 min-w-auto">
              <Link
                to="/createproject"
                className="flex flex-row bg-gradient-to-t from-pink-500 to-pink-400 text-white py-2 px-4 m-4 rounded-full shadow-xl hover:bg-pink-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-7 h-6 pr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
