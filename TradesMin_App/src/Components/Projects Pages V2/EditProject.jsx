import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditProject = () => {
  const { id } = useParams(); // Get the project ID from the URL
  const [project, setProject] = useState({
    project_name: "",
    body: "",
    materials: [],
    author: ""
  });
  // initiate a new empty array for editedMaterials
  const [editedMaterials, setEditedMaterials] = useState([])
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the project data by its ID when the component mounts
        // setProject and setEditedMaterials data 
    fetch(`http://localhost:8000/projects/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProject(data);
        setEditedMaterials(data.materials);
      })
      
      .catch((error) => console.error("Error fetching project:", error));
  }, [id]);

  
  const handleSubmit = (e) => {
      e.preventDefault();
      
      setIsPending(true);
      
      const updatedProject = { ...project, materials: editedMaterials }
      
      // Perform the update (PUT) request with the updated project data
      // Redirect to the project details page
      fetch(`http://localhost:8000/projects/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedProject),
        })
        .then(() => {
            console.log("Project updated successfully");
            setIsPending(false);
            navigate(`/projects/${id}`); 
        })
        .catch((error) => console.error("Error updating project:", error));
    };
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProject({
            ...project,
            [name]: value,
        });
    };
    const handleMaterialChange = (e, index) => {
        const { name, value } = e.target
        const updatedMaterials = [...editedMaterials]
        updatedMaterials[index][name] = name === "quantity" ? parseInt(value) : value 
        setEditedMaterials(updatedMaterials)
    }
    
    console.log(editedMaterials)
    
    return (
        <div className="bg-blue-100 min-h-screen flex items-center justify-center">
      <div className="bg-blue-200 text-black p-8 rounded-md shadow-md w-full max-w-md">
        <div className="create">
          <h2 className="text-2xl text-pink-600 mb-4">Edit Project</h2>
          <form onSubmit={handleSubmit}>
            {/* Render input fields for project_name, body, materials, and author */}
            <label className="text-gray-800">Project Name:</label>
            <input
              type="text"
              className="w-full p-2 border bg-gray-100 border-gray-300 rounded-md mb-4 focus:outline-none focus:ring focus:border-pink-600"
              required
              name="project_name"
              value={project.project_name}
              onChange={handleInputChange}
            />

            <label className="">Project Body:</label>
            <textarea 
            type="text"
            className="w-full p-2 border bg-gray-100 border-gray-300 rounded-md mb-4 focus:outline-none focus:ring focus:border-pink-600"
            required
            name="body"
            value={project.body}
            onChange={handleInputChange}
            />

            <label className="">Materials:</label>
            {editedMaterials.map((material, index) => (
            <div
              key={index}
              className="flex justify-between rounded py-1"
            >
              <input
              type="text"
              className="max-w-[200px] p-2 border bg-gray-100 border-gray-300 rounded-md focus:outline-none focus:ring focus:border-pink-600"
              required
              name="name"
              value={material.name}
              onChange={(e) => handleMaterialChange(e, index)}
              />
              <input 
               type="number"
              className="max-w-[50px] p-2 border bg-gray-100 border-gray-300 rounded-md text-center focus:outline-none focus:ring focus:border-pink-600"
              required
              name="quantity"
              value={material.quantity}
              onChange={(e) => handleMaterialChange(e, index)}
              />
              
            </div>
          ))}
          

          {/* MAP THROUGH MATERIALS TO RENDER THEM ALL */}
          {/* Must be conditional IF 'materials' exist */}
        
          <div className="mt-auto">
            <div className="text-pink-500 mb-3">
              Created by: {project.author}
            </div>
          </div>

            {!isPending && (
              <button className="bg-pink-600 text-white px-4 py-2 rounded-md cursor-not-allowed">
                Update Project
              </button>
            )}
            {isPending && (
              <button
                className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700"
                type="submit"
                disabled
              >
                Updating...
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProject;
