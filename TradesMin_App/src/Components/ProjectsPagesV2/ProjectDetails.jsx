import { Link, useLocation } from "react-router-dom";
import DeleteButton from "./EditButtons/DeleteButton";

 export const ProjectDetails = () => {
  
  // the Error below was part of the handleDelete function
  // const [error, setError] = useState(null);
  const location = useLocation()
  const { project } = location.state;
  
  console.log("selectedProject:", project)


  return (
    <div className="flex flex-col items-center rounded bg-blue-200">
      {/* {error && <div>{error}</div>} */}
      {project && (
        <article>
          <div className="flex flex-col bg-blue-300 m-6 p-4 rounded-xl min-h-[450px] min-w-[300px] shadow-xl">
            <h2 className="text-pink-500 text-2xl font-bold mb-2">
              {project.project_name}
            </h2>
            {/* <p className="text-gray-600">Written by {project.author}</p> */}
            <div className="text-white mb-8">{project.body}</div>
          

            {/* MAP THROUGH MATERIALS TO RENDER THEM ALL */}
            {/* Must be conditional IF 'materials' exist */}
            {project.materials.map((material, index) => (
              <div
                key={index}
                className="flex justify-between bg-blue-400 rounded p-2 my-1 text-white"
              >
                <p>{material.name}</p>
                <p>{material.quantity}</p>
              </div>
            ))}
            <div className="mt-auto">
              <div className="text-pink-500 m-4">
                Created by: {project.author}
              </div>
            </div>

            <div className="flex justify-between p-3">
              <Link to={`/editproject/${project.id}`} state={{ project: project }} className="flex bg-pink-500 text-white px-3 py-1 rounded-full mt-auto mr-auto max-w-[150px] shadow-md hover:bg-red-700">
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
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-2">Edit</div>
              </Link>
              <DeleteButton />
            </div>
          </div>
        </article>
      
      )}
    </div>
  );
};
