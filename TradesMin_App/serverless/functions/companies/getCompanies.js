import { supabase } from "../../../src/ContextSupabase/Client.jsx";

const getCompanies = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('companies')
      .select('*');

    if (error) {
      throw error;
    }

    res.status(200).json(data);
  } catch (error) {
    console.error('Error getting companies:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = getCompanies;
