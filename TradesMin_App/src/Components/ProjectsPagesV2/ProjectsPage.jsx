import useFetchProjectData from "../../hooks/useFetchProjectData.js";
import ProjectList from "./ProjectList";
import CreateButton from "./EditButtons/CreateButton.jsx";

export const ProjectsPage = () => {

  const {
    data: fetchedProjects,
    isPending,
    error,
  } = useFetchProjectData();

  return (
    <div className="flex h-full bg-gradient-to-b from-blue-100 to-blue-300">
      <div className="bg-gray-200 m-4 sm:p-4 shadow m-4 rounded-xl flex flex-col">
        {error && <div className="text-red-600"> {error} </div>}
        {isPending && <div className="text-pink-500 font-bold m-2 p-2"> Waiting for data... </div>}
        {fetchedProjects && (
          <div>
            <div className="flex flex-col p-1 min-w-auto">
              
              <CreateButton />
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
