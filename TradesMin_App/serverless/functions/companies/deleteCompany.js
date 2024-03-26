import { supabase } from "../../../src/ContextSupabase/Client.jsx";

const deleteCompany = async (req, res) => {
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
