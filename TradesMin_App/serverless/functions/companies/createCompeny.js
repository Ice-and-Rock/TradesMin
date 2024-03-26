import { supabase } from "../../../src/ContextSupabase/Client.jsx";

const createCompany = async (req, res) => {
  try {
    const { name, address, industry } = req.body;

    const { data, error } = await supabase
      .from('companies')
      .insert([{ company_name, address, postcode, phone_number }]); // this is not correct

    if (error) {
      throw error;
    }

    res.status(200).json(data[0]);
  } catch (error) {
    console.error('Error creating company:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = createCompany;
