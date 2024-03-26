// Example of deleting an entry from project_materials
import { supabase } from "../../../src/ContextSupabase/Client.jsx";

const deleteProjectMaterial = async (req, res) => {
  try {
    const { id } = req.body; // Assuming an id for the specific project_material entry to delete

    const { data, error } = await supabase
      .from('materials')
      .delete()
      .match({ id });

    if (error) {
      throw error;
    }

    res.status(200).json(data);
  } catch (error) {
    console.error('Error deleting project material association:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = deleteProjectMaterial;
