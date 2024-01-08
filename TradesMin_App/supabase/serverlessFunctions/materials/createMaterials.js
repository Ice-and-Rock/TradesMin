import { supabase } from "../../../src/ContextSupabase/Client.jsx";

const createMaterial = async (req, res) => {
  try {
    const { materialName, notes, createdBy, ordered, orderedOn } = req.body;

    // Create material in the database
    const { data, error } = await supabase
      .from('materials')
      .insert([{ material_name: materialName, notes, created_by: createdBy, ordered, ordered_on: orderedOn }]);

    if (error) {
      throw error;
    }

    // Return the created material
    res.status(200).json(data[0]);
  } catch (error) {
    console.error('Error creating material:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = createMaterial;
