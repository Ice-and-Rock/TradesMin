import { supabase } from "../../../src/ContextSupabase/Client.jsx";

const getMaterialsByProjectId = async (req, res) => {
  try {
    const { projectId } = req.params;

    const { data, error } = await supabase
      .from('materials')
      .select(`
      material_name,
      notes,
      ordered,
      ordered_on,
      material_author,
      created_at
      `)
      .eq('project_id', projectId)

    if (error) {
      throw error;
    }

    res.status(200).json(data);
  } catch (error) {
    console.error('Error getting materials:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = getMaterialsByProjectId;
