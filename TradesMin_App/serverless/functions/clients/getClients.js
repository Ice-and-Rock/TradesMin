import { supabase } from "../../../src/ContextSupabase/Client.jsx";

const getClients = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('clients')
      .select('*');

    if (error) {
      throw error;
    }

    res.status(200).json(data);
  } catch (error) {
    console.error('Error getting clients:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = getClients;
