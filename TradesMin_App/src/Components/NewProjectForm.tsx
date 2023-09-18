import React, { useState } from "react";

type NewProjectFormProps = {
  onAddProject: (newProject: Project) => void;
};

type Project = {
  ProjectName: string;
  products: {
    SingleSocket: number;
    DoubleSocket: number;
    SingleSwitch: number;
    DoubleSwitch: number;
    FlexOutlet: number;
  };
};

// type Product = {
//   product: string;
//   quantity: number;
// };

const NewProjectForm: React.FC<NewProjectFormProps> = ({ onAddProject }) => {
  const [newProject, setNewProject] = useState<Project>({
    ProjectName: "",
    products: {
      SingleSocket: 0,
      DoubleSocket: 0,
      SingleSwitch: 0,
      DoubleSwitch: 0,
      FlexOutlet: 0,
  },
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target;

    // Ensure that the input value is a valid number
    const numericValue = parseInt(value);

    if (!isNaN(numericValue)) {
      setNewProject({
        ...newProject,
        products: {
          ...newProject.products,
          [name]: numericValue,
        },
      });
    }
  };

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    // I should add validation here to ensure the form is filled correctly.

    // Pass the newProject data to the parent component
    onAddProject(newProject);

    // Reset the form fields
    setNewProject({
      ProjectName: "",
      products: {
        SingleSocket: 0,
        DoubleSocket: 0,
        SingleSwitch: 0,
        DoubleSwitch: 0,
        FlexOutlet: 0,
      }, 
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 text-gray-800">
      <h1 className="text-2xl font-bold mb-4">Projects Page</h1>

    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="ProjectName" className=" text-gray-700">Project Name</label>
        <input
          type="text"
          id="ProjectName"
          name="ProjectName"
          value={newProject.ProjectName}
          onChange={handleInputChange}
          className="bg-white px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"

        />
     

     <div className="mb-4">
          <label htmlFor="SingleSocket" className="text-gray-700">
            Single Socket
          </label>
          <input
            type="number"
            id="SingleSocket"
            name="SingleSocket"
            value={newProject.products.SingleSocket}
            onChange={handleInputChange}
            className="bg-white px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>


<div className="mb-4">
  <label htmlFor="DoubleSocket" className=" text-gray-700">Double Socket</label>
  <input
    type="number"
    id="DoubleSocket"
    name="DoubleSocket"
    value={newProject.products.DoubleSocket}
    onChange={handleInputChange}
    className=" bg-white px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
  />
</div>
<div className="mb-4">
  <label htmlFor="SingleSwitch" className=" text-gray-700">Single Switch</label>
  <input
    type="number"
    id="SingleSwitch"
    name="SingleSwitch"
    value={newProject.products.SingleSwitch}
    onChange={handleInputChange}
    className=" bg-white px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
  />
</div>
<div className="mb-4">
  <label htmlFor="DoubleSwitch" className=" text-gray-700">Double Switch</label>
  <input
    type="number"
    id="DoubleSwitch"
    name="DoubleSwitch"
    value={newProject.products.DoubleSwitch}
    onChange={handleInputChange}
    className=" bg-white px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
  />
</div>
<div className="mb-4">
  <label htmlFor="FlexOutlet" className=" text-gray-700">Flex Outlet</label>
  <input
    type="number"
    id="FlexOutlet"
    name="FlexOutlet"
    value={newProject.products.FlexOutlet}
    onChange={handleInputChange}
    className=" bg-white px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
  />
</div>

</div>
      
      <button className="rounded-md bg-blue-400 p-2 text-white hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" type="submit">Add Project</button>
    </form>
    </div>
  );
};

export default NewProjectForm;
