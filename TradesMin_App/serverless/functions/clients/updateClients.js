import { supabase } from "../../../src/ContextSupabase/Client.jsx";

const updateCompany = async (req, res) => {
  try {
    const { id, client_name, address, postcode, phone_number, notes, project_id } = req.body;

    const { data, error } = await supabase
      .from('clients')
      .update({ client_name, address, postcode, phone_number, notes, project_id })
      .match({ id });

    if (error) {
      throw error;
    }

    res.status(200).json(data);
  } catch (error) {
    console.error('Error updating company:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = updateCompany;
