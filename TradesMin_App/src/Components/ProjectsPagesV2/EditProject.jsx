import { useState, } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { supabase } from "../../ContextSupabase/Client";

export const EditProject = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { project } = location.state; 
  const { id } = useParams();

  const [isPending, setIsPending] = useState(false);
  const [projectSelected, setProjectSelected] = useState({
    project_name: project.project_name,
    body: project.body,
    materials: [],
    author: project.author,
  });
  // initiate a new empty array for editedMaterials
  const [editedMaterials, setEditedMaterials] = useState(project.materials);
  
  console.log("1 - project id:", id)
  // console.log("2 - project state:", project)
  // console.log("3 - materials array:", project.materials)
  console.log("4 - ProjectSelected:", projectSelected)


  // Fetch the data by the Id number !
  // Here, I am trying to remove the supabase call => use props for the state, instead
  // useEffect(() => {
  //   async function fetchProjectData() {
  //     try {
  //       const { data, error } = await supabase
  //         .from("projects")
  //         .select()
  //         .eq("id", project.id)
  //         .single()

  //         if (error) {
  //           throw error
  //         }
  //         setProjectSelected(data)
  //         setEditedMaterials(data.materials)
  //     } catch (error) {
  //       console.log("This si the Error:", error)
  //     }
  //   }
  //   fetchProjectData()
  // }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);

    const updatedFields = {
      project_name: projectSelected.project_name,
      body: projectSelected.body,
      materials: editedMaterials,
    };
    try {
      const { error } = await supabase
        .from("projects")
        .update(updatedFields)
        .eq("id", id)
        

      if (error) {
        throw error;
      }
      console.log("Project updated successfully");
      setIsPending(false);
      navigate("/projectspage");
    } catch (error) {
      console.error("Update project error:", error);
      console.error("Supabase error details:", error.details);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProjectSelected((prevProject) => ({
      ...prevProject,
      [name]: value,
    }));
  };
  const handleMaterialChange = (e, index) => {
    const { name, value } = e.target;
    const updatedMaterials = [...editedMaterials];
    updatedMaterials[index][name] =
      name === "quantity" ? parseInt(value) : value;
    setEditedMaterials(updatedMaterials);
  };

  console.log("edited materails:", editedMaterials);

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
              value={projectSelected.project_name}
              onChange={handleInputChange}
            />

            <label className="">Project Body:</label>
            <textarea
              type="text"
              className="w-full p-2 border bg-gray-100 border-gray-300 rounded-md mb-4 focus:outline-none focus:ring focus:border-pink-600"
              required
              name="body"
              value={projectSelected.body}
              onChange={handleInputChange}
            />

            <label className="">Materials:</label>
            {editedMaterials.map((material, index) => (
              <div key={index} className="flex justify-between rounded py-1">
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
                Created by: {projectSelected.author}
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
