import { supabase } from "../../../src/ContextSupabase/Client.jsx";

const deleteClient = async (req, res) => {
  try {
    const { id } = req.body;

    const { data, error } = await supabase
      .from('companies')
      .delete()
      .match({ id });

    if (error) {
      throw error;
    }

    res.status(200).json(data);
  } catch (error) {
    console.error('Error deleting company:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = deleteCompany;
