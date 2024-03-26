import { supabase } from "../../../src/ContextSupabase/Client.jsx";

const updateCompany = async (req, res) => {
  try {
    const { id, name, address, industry } = req.body;

    const { data, error } = await supabase
      .from('companies')
      .update({ company_name, address, postcode, phone_number })
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
