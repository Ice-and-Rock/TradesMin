import { supabase } from "../../../src/ContextSupabase/Client.jsx";

const createProject = async (req, res) => {
  try {
    const { projectName, body, materials, author } = req.body;

    // Create project in the database
    const { data, error } = await supabase
      .from('projects')
      .insert([{ project_name: projectName, body, materials, author }]);

    if (error) {
      throw error;
    }

    // Return the created project
    res.status(200).json(data[0]);
  } catch (error) {
    console.error('Error creating project:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = createProject;
