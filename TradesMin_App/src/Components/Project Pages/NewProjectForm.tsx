import React, { useState } from "react";
import ProjectForm from "./PracticeForm";

// TO DO
  // create a function called NewProjectForm
    // Set the initial state of the form => useState
    // initialize the state of each key pair to be null
  // create a function canlled handleInputChange
    // this will update the form as the user enters information
  // create a function called handleSubmit 
    // Check if all fields are either string or number
    // if all fields have values
      // call the function onAddProject with the new form data to add the new data to the end of the data file 'projectData'
    // console log the new project data with the message 'project added'



// Define the props for the NewProjectForm component
type NewProjectFormProps = {
  onAddProject: (newProject: Project) => void;
};

// Define the structure of a project
type Project = {
  ProjectName: string;
  products: {
    [key: string]: number; // Allow dynamic product names as keys
  };
};

const NewProjectForm: React.FC<NewProjectFormProps> = ({ onAddProject }) => {
  // Define the initial state for the new project
  const initialNewProject: Project = {
    ProjectName: "",
    products: {
      SingleSocket: 0,
      DoubleSocket: 0,
      SingleSwitch: 0,
      DoubleSwitch: 0,
      FlexOutlet: 0,
    },
  };

  // Use state to manage the new project's data
  const [newProject, setNewProject] = useState<Project>(initialNewProject);

  // Handle changes in form inputs
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;

    // Ensure that the input value is a valid number
    // const numericValue = parseInt(value);

    // if (!isNaN(numericValue)) {
    //   setNewProject({
    //     ...newProject,
    //     products: {
    //       ...newProject.products,
    //       [name]: numericValue,
    //     },
    //   });
    // }
  };

  // Handle form submission
  const handleAddProject = (event: React.FormEvent): void => {
    event.preventDefault();

    // Pass the newProject data to the parent component
    onAddProject(newProject);

    // Reset the form fields
    setNewProject(initialNewProject);

    console.log(newProject)
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-200 to-blue-400 text-gray-800">
      <ProjectForm />
      <h1 className="text-2xl font-bold mb-4">New Project</h1>
      <form>
        <div>
          <label htmlFor="ProjectName" className="text-gray-700">
            Project Name
          </label>
          <input
            type="text"
            name="ProjectName"
            value={newProject.ProjectName}
            className="bg-white px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Loop through product names */}
        {Object.keys(newProject.products).map((productName) => (
          <div className="mb-4" key={productName}>
            <label htmlFor={productName} className="text-gray-700">
              {productName}
            </label>
            <input
              type="number"
              name={productName}
              value={newProject.products[productName]}
              className="bg-white px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
        ))}

        <button
          onClick={handleAddProject}
          className="rounded-md bg-blue-400 p-2 text-white hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          type="submit"
        >
          Add Project
        </button>
      </form>
    </div>
  );
};

export default NewProjectForm;
