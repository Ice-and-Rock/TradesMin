// Example of updating an entry in project_materials
import { supabase } from "../../../src/ContextSupabase/Client.jsx";


//  notes
// the materials table and Project_materials tables should be seperated!! 
// - one is a simply list of materials 
// - the other sotred the numbers and quantities for each project 

const updateProjectMaterial = async (req, res) => {
  try {
    const {
      id,
      material_name,
      notes,
      ordered,
      ordered_on,
      material_author,
      created_at,
    } = req.body;

    const { data, error } = await supabase
      .from("project_materials")
      .update({
        material_name,
        notes,
        ordered,
        ordered_on,
        material_author,
        created_at,
      })
      .match({ id });

    if (error) {
      throw error;
    }

    res.status(200).json(data);
  } catch (error) {
    console.error("Error updating project material association:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = updateProjectMaterial;
