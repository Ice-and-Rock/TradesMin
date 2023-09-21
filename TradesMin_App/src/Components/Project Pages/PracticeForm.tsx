// ProjectForm.tsx
import React, { useState } from "react";
import practiceProjectData from "../../Data/PracticeData.js"; 

interface Project {
  projectName: string;
  materials: string;
  cost: number;
}

const ProjectForm: React.FC = () => {
    const [formData, setFormData] = useState<Project>({
      projectName: "",
      materials: "",
      cost: 0,
    });
  
    const [practiceProjectDataList, setPracticeProjectDataList] = useState<Project[]>([]);
  
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      
      // Add the new project data to the projectsData array
      setPracticeProjectDataList([...practiceProjectDataList, formData]);
  
      // Reset the form fields
      setFormData({
        projectName: "reset",
        materials: "reset",
        cost: 0,
    });
    console.log("submitted!" + " " + formData.materials)
    console.log("form data " + formData)
    console.log(practiceProjectData)
    console.log(practiceProjectDataList)
  
      // You can save the data to localStorage or send it to a server here as well.
    };
  return (
    <div>
      <h1>Add a New Project</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="projectName">Project Name:</label>
          <input
            type="text"
            id="projectName"
            name="projectName"
            className="text-white"
            value={formData.projectName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="materials">Materials:</label>
          <input
            type="text"
            id="materials"
            name="materials"
            className="text-white"
            value={formData.materials}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="cost">Cost:</label>
          <input
            type="number"
            id="cost"
            name="cost"
            className="text-white"
            value={formData.cost}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Add Project</button>
      </form>
    </div>
  );
};

export default ProjectForm;
