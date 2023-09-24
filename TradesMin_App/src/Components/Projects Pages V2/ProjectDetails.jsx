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

  const handleClick = () => {
    fetch("http://localhost:8000/projects/" + project.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/projectspage");
    });
  };

  return (
    <div className="flex flex-col items-center m-6 rounded bg-blue-300">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {project && (
        <article>
          <div className="flex flex-col bg-blue-400 m-6 p-4 rounded min-h-[400px]">
            <h2 className="text-white text-2xl font-bold mb-2">
              {project.project_name}
            </h2>
            {/* <p className="text-gray-600">Written by {project.author}</p> */}
            <div className="text-white mb-2">{project.body}</div>
            <button
              className="bg-red-500 text-white px-3 py-1 rounded-full mt-auto hover:bg-red-700"
              onClick={handleClick}
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
