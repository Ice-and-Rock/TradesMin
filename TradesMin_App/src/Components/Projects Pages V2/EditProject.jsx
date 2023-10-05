import { createClient } from "@supabase/supabase-js";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

 // API --------------------------------------------------------------------------------------------
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabase = createClient(supabaseUrl, supabaseKey)
 

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

  // Fetch the data by the Id number !
  useEffect(() => {
    async function fetchProjectData() {
      try {
        const { data, error } = await supabase
          .from("projects")
          .select()
          .eq("id", id)
          .single()

          if (error) {
            throw error
          }
          setProject(data)
          setEditedMaterials(data.materials)
      } catch (error) {
        console.log("This si the Error:", error)
      }
    }
    fetchProjectData()
  }, [id]);


  const handleSubmit = async (e) => {
      e.preventDefault();
      setIsPending(true);
      
      const updatedFields = {
        project_name: project.project_name,
        body: project.body,
        materials: editedMaterials,
      };
      try {
        const { error } = await supabase
        .from("projects")
        .update(updatedFields).eq("id", id)

        if (error) {
          throw error
        }
        console.log("Project updated successfully");
        setIsPending(false);
        navigate('/projectspage'); 
      } catch (error) {
        console.error("This si the error:", error)
      }
    }
    
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
