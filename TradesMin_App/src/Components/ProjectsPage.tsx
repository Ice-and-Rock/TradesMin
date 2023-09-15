import React, { useState } from "react";
import projectsData from "../Data/DummyData";
import ProjectDetails from "./ProjectDetails";

type Project = {
  ProjectName: string;
  products: Product[];
};

// type Product = {
//   product: string;
//   quantity: number;
// };

// Import data from an exernal database
  // Use useEffect to retrieve the data from an external database
  // use a fetch request and await the response
  // store it in the variable 'projectsData'
    // This should work with the current code ✅ 



const ProjectsPage: React.FC = () => {

  const [selectedProjectData, setSelectedProjectData] = useState<Project | null> (null)

  const handleProjectSelection = (project: Project) => {
    setSelectedProjectData(project)
  }
  const handleBackToProjects = () => {
    setSelectedProjectData(null)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 text-gray-800">
      <h1 className="text-2xl font-bold mb-4">Projects Page</h1>

      {/* Project List */}
      {selectedProjectData ? (
      <ProjectDetails project={selectedProjectData} />
      ) : (
      <ul>
        {projectsData.map((project: Project) => (
          <li 
          key={project.ProjectName} 
          className="bg-blue-200 p-4 m-4 rounded-xl shadow" 
          onClick={() => handleProjectSelection(project)} 
          style={{ cursor: "pointer"}}>
            {project.ProjectName}
           

            {/* Get rid of the code below - CHEKCING DATA RENDERS */}
            {/* <ul className="bg-blue-300 rounded-xl">
              {project.products.map((product, productIndex) => (
                <li key={productIndex}>
                  {product.product}: {product.quantity}
                </li>
              ))}
            </ul> */}
          </li>
        ))}
      </ul>
      )}
      {selectedProjectData && <button onClick={handleBackToProjects} className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 m-4 rounded-full">Back</button>}
    </div>
  );
};

export default ProjectsPage;
