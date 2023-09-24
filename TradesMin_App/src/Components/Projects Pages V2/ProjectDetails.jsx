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
          <div className="flex flex-col bg-blue-400 m-6 p-4 rounded-xl min-h-[400px]">
            <h2 className="text-white text-2xl font-bold mb-2">
              {project.project_name}
            </h2>
            {/* <p className="text-gray-600">Written by {project.author}</p> */}
            <div className="text-white mb-2">{project.body}</div>
            <div className="flex justify-between bg-blue-300 rounded p-2 my-2 text-white">
            <div>
            {project.materials[0].Name}
            </div>
            <div>
            {project.materials[0].quantity}
            </div>
            </div>
            <button
              className="bg-red-500 text-white px-3 py-1 rounded-full mt-auto hover:bg-red-700"
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
              Delete
            </button>
          </div>
        </article>
      )}
    </div>
  );
};

export default ProjectDetails;
