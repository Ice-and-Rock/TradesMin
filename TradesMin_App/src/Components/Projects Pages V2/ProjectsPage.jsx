import React from "react";
import useFetch from "./useFetch.jsx";
import ProjectList from "./ProjectList.jsx";
import { Link } from "react-router-dom";

// API --------------------------------------------------------------------------------------------
// const supabaseUrl = "https://iwyynoynwztsnevhxxgt.supabase.co"
// const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml3eXlub3lud3p0c25ldmh4eGd0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU4MDkxNzYsImV4cCI6MjAxMTM4NTE3Nn0.nb2hssHye9NXWYzwszwzj0LgRlSHxXliN2dJYDKi-5A"


  // FOR LATER... (sign in)
  // const supabase = createClient(supabaseUrl, supabaseKey)


const ProjectsPage = () => {

  const {
    data: fetchedProjects,
    isPending,
    error,
  } = useFetch();

  return (
    <div className="flex h-max bg-gradient-to-b from-blue-100 to-blue-300">
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
export default ProjectsPage;
