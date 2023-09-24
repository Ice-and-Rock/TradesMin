import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateProject = () => {
  const [project_name, setProject_name] = useState("");
  const [body, setBody] = useState("");
  //   const [author, setAuthor] = useState("Nick");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add author and other fields to vairable below ***
    const project = { project_name, body };

    setIsPending(true);

    fetch("http://localhost:8000/projects", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(project),
    }).then(() => {
      console.log("new project added");
      setIsPending(false);
      // history.go(-1)
      navigate("/projectspage");
    });
  };

  return (
    <div className="bg-blue-100 min-h-screen flex items-center justify-center">
      <div className="bg-blue-200 p-8 rounded-md shadow-md w-full max-w-md">
        <div className="create">
          <h2 className="text-2xl text-pink-600 mb-4">
            Create a new project...
          </h2>
          <form onSubmit={handleSubmit}>
            <label className="text-gray-800">project name :</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring focus:border-pink-600"
              required
              value={project_name}
              onChange={(e) => setProject_name(e.target.value)}
            />
            <label className="text-gray-800">project body :</label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring focus:border-pink-600"
              required
              value={body}
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
            {/* <label>project author :</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Nick">Nick</option>
          <option value="Becs">Becs</option>
          <option value="Chris">Chris</option>
        </select> */}
            {!isPending && (
              <button className="bg-pink-600 text-white px-4 py-2 rounded-md cursor-not-allowed">
                Add project!
              </button>
            )}
            {isPending && (
              <button
                className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700"
                type="submit"
                disabled
              >
                Adding project...
              </button>
            )}
          </form>
          {/* <p>{title}</p>
      <p>{body}</p> */}
          {/* <p>{author}</p> */}
        </div>
      </div>
    </div>
  );
};

export default CreateProject;
