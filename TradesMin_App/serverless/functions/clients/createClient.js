import { supabase } from "../../../src/ContextSupabase/Client.jsx";

const createClient = async (req, res) => {
  try {
    const { clientName, address, postcode, notes, projectId } = req.body;

    // Create client in the database
    const { data, error } = await supabase
      .from('clients')
      .insert([{ client_name: clientName, address, postcode, notes, project_id: projectId }]);

    if (error) {
      throw error;
    }

    // Return the created client
    res.status(200).json(data[0]);
  } catch (error) {
    console.error('Error creating client:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = createClient;
