import { useLocation } from "react-router-dom";
import DeleteButton from "./EditButtons/DeleteButton.jsx";
import EditButton from "./EditButtons/EditButton.jsx";
import ProjectMaterialsList from "./ProjectMaterialsList.jsx";

export const ProjectDetails = () => {
  // the Error below was part of the handleDelete function
  // const [error, setError] = useState(null);
  const location = useLocation();
  const { project } = location.state;

  return (
    <div className="flex flex-col items-center rounded bg-blue-200">
      {/* {error && <div>{error}</div>} */}
      {project && (
        <article>
          <div className="flex flex-col bg-blue-300 m-6 p-4 rounded-xl min-h-[450px] min-w-[300px] shadow-xl">
            <h2 className="text-pink-500 text-2xl font-bold mb-2">
              {project.project_name}
            </h2>
            <div className="bg-blue-200 p-2 mb-2 rounded-lg">
              <div>Start date: {project.start_date}</div>
              <div>Estimate end: {project.expected_end_date}</div>
            </div>

            <div>Description:</div>
            <div className="text-white mb-8 p-1">{project.description}</div>

            <h4>Materials List:</h4>
            <ProjectMaterialsList projectId={project.id} />

            {/* MAP THROUGH MATERIALS TO RENDER THEM ALL */}
            {/* Must be conditional IF 'materials' exist */}
            {/* {project.materials.map((material, index) => (
              <div
                key={index}
                className="flex justify-between bg-blue-400 rounded p-2 my-1 text-white"
              >
                <p>{material.name}</p>
                <p>{material.quantity}</p>
              </div>
            ))} */}

            <div className="mt-auto">
              <div className="text-pink-700 m-4">
                Created by: {project.author}
              </div>
            </div>

            <div className="flex justify-between p-3">
              <EditButton project={project} />
              <DeleteButton />
            </div>
          </div>
        </article>
      )}
    </div>
  );
};
