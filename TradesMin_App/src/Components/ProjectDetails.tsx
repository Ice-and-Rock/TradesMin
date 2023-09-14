import React from "react";
import { useParams } from "react-router-dom";

type ProjectDetailsProps = {
  projects: Project[];
};

type Project = {
  ProjectName: string;
  products: Product[];
};

type Product = {
  product: string;
  quantity: number;
};

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ projects }) => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projects[parseInt(projectId || "1") - 1];

  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h2>Project Details</h2>
      
      
      {project && (
        <>
          <h3>Project Name: {project.ProjectName}</h3>
          {/* Display other project details here */}
        </>
      )}
    </div>
  );
};

export default ProjectDetails;
