import { Link, useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";


 // API --------------------------------------------------------------------------------------------
 const supabaseUrl = "https://iwyynoynwztsnevhxxgt.supabase.co"
 const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml3eXlub3lud3p0c25ldmh4eGd0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU4MDkxNzYsImV4cCI6MjAxMTM4NTE3Nn0.nb2hssHye9NXWYzwszwzj0LgRlSHxXliN2dJYDKi-5A"
 

const ProjectDetails = (  ) => {
  const { id } = useParams();
  const {
    data: project,
    error,
    isPending,
  } = useFetch(supabaseUrl, supabaseKey, {
    single: true, 
    eq: id,       
  });
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
              <Link to={`/editproject/${project.id}`} className="flex bg-pink-500 text-white px-3 py-1 rounded-full mt-auto mr-auto max-w-[150px] shadow-md hover:bg-red-700">
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

              <button
                className="flex bg-red-500 text-white px-3 py-1 rounded-full mt-auto ml-auto max-w-[100px] shadow-md hover:bg-red-700"
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
                  <div className="ml-2">Delete</div>
                </div>
              </button>
            </div>
          </div>
        </article>
      )}
    </div>
  );
};

export default ProjectDetails;
