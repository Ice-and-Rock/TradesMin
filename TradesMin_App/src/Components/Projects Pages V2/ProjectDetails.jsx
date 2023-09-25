import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const ProjectDetails = () => {
  const { id } = useParams();
  const {
    data: project,
    error,
    isPending,
  } = useFetch(`http://localhost:8000/projects/` + id);
  const navigate = useNavigate();

  const handleDelete = () => {
    fetch("http://localhost:8000/projects/" + project.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/projectspage");
    });
  };

  return (
    <div className="flex flex-col items-center rounded bg-blue-200">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {project && (
        <article>
          <div className="flex flex-col bg-blue-300 m-6 p-4 rounded-xl min-h-[400px] shadow-xl">
            <h2 className="text-pink-600 text-2xl font-bold mb-2">
              {project.project_name}
            </h2>
            {/* <p className="text-gray-600">Written by {project.author}</p> */}
            <div className="text-white mb-2">{project.body}</div>
            {/* <div className="flex justify-between bg-blue-300 rounded p-2 my-2 text-white">
            <div>
            {project.materials[0].Name}
            </div>
            <div>
            {project.materials[0].quantity}
            </div>
            </div> */}

            {/* MAP THROUGH MATERIALS TO RENDER THEM ALL */}
            {project.materials.map((material, index) => (
              <div
                key={index}
                className="flex justify-between bg-blue-400 rounded p-2 my-2 text-white"
              >
                <p>{material.name}</p>
                <p>{material.quantity}</p>
              </div>
            ))}
            <button
              className="bg-red-500 text-white px-3 py-1 rounded-full mt-auto ml-auto max-w-[100px] shadow-md hover:bg-red-700"
              // Remove the next line and add a pop-up
              //   onClick={handleDelete}
              onClick={() => {
                const confirmDelete = window.confirm(
                  `Are you sure you want to delete ${project.project_name}?`
                );
                if (confirmDelete) {
                  handleDelete();
                }
              }}
            >
            <div className="flex direction-row align-center items-center justify-center">
            <div>
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
            <div className="ml-3">
              Delete
              </div>
              </div>
            </button>
          </div>
        </article>
      )}
    </div>
  );
};

export default ProjectDetails;
