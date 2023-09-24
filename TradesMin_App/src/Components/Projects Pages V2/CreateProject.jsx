import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateProject = () => {
  const [projectName, setProjectName] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Nick");
  const [isPending, setIsPending] = useState(false);
  // initiate a new state for materials
    // add an additional state for the creating a new material array entry
    // new array entry must have two key pairs: name, quantity
  const [materials, setMaterials] = useState([]);
  const [newMaterial, setNewMaterial] = useState({
    name: "",
    quantity: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const project = {
      project_name: projectName,
      body,
      materials,
      author,
    };

    setIsPending(true);

    fetch("http://localhost:8000/projects", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(project),
    }).then(() => {
      console.log("new project added");
      setIsPending(false);
      navigate("/projectspage");
    });
  };

  const handleMaterialChange = (e) => {
    const { name, value } = e.target;
    setNewMaterial({
      ...newMaterial,
      [name]: name === "quantity" ? parseInt(value) : value,
    });
  };

  const addMaterial = () => {
    if (newMaterial.name && newMaterial.quantity > 0) {
      setMaterials([...materials, { ...newMaterial }]);
      setNewMaterial({ name: "", quantity: 0 });
    }
  };

  const removeMaterial = (index) => {
    const updatedMaterials = [...materials];
    updatedMaterials.splice(index, 1);
    setMaterials(updatedMaterials);
  };

  return (
    <div className="bg-blue-100 min-h-screen flex items-center justify-center">
      <div className="bg-blue-200 p-8 mx-2 rounded-md shadow-md w-full max-w-md">
        <div className="create">
          <h2 className="text-2xl text-pink-600 mb-4">
            Create a new project...
          </h2>
          <form onSubmit={handleSubmit}>
            <label className="text-gray-800">Project name:</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md mb-4 bg-gray-200 focus:outline-none focus:ring focus:border-pink-600"
              required
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
            <label className="text-gray-800">Project body:</label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded-md mb-4 bg-gray-200 focus:outline-none focus:ring focus:border-pink-600"
              required
              value={body}
              onChange={(e) => setBody(e.target.value)}
            ></textarea>

            <label className="text-gray-800">Materials:</label>
            {materials.map((material, index) => (
              <div key={index} className="flex">
                <p className="mr-2">{material.name}</p>
                <p className="mr-2">{material.quantity}</p>
                <button
                  type="button"
                  onClick={() => removeMaterial(index)}
                  className="bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="flex mb-4">
              <input
                type="text"
                name="name"
                placeholder="Material name"
                className="w-full min-w-[140px] p-2 border border-gray-300 rounded-md mb-2 mr-2 bg-gray-200 focus:outline-none focus:ring focus:border-pink-600"
                value={newMaterial.name}
                onChange={handleMaterialChange}
              />
              <input
                type="number"
                name="quantity"
                placeholder="Quantity"
                className="w-full p-2 border border-gray-300 rounded-md mb-2 mr-2 bg-gray-200 focus:outline-none focus:ring focus:border-pink-600"
                value={newMaterial.quantity}
                onChange={handleMaterialChange}
              />
              <button
                type="button"
                onClick={addMaterial}
                className="bg-blue-500 text-white px-3 mb-2 rounded-full hover:bg-blue-700"
              >
                Add
              </button>
            </div>
              <div className="mb-4">
            <label className="mb-4 text-black">Project author:</label>
            <select
            className="bg-gray-200 text-black w-full"
              name="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            >
              <option value="Nick">Nick</option>
              <option value="Becs">Becs</option>
              <option value="Chris">Chris</option>
            </select>
            </div>
<div>
            {!isPending && (
              <button className="bg-pink-500 text-white px-4 py-2 my-2 rounded-md cursor-not-allowed">
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
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProject;
