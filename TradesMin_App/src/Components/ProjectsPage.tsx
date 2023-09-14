import React from "react";
import { Link } from "react-router-dom";
import projects from "../Data/DummyData";

type Project = {
  ProjectName: string;
  products: Product[];
};

type Product = {
  product: string;
  quantity: number;
};

const ProjectsPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 text-gray-800">
      <h1 className="text-2xl font-bold mb-4">Projects Page</h1>

      {/* Project List */}
      <ul>
        {projects.map((project: Project, index: number) => (
          <li key={index} className="mb-4">
            <Link to={`/projects/${index + 1}`}>{project.ProjectName}</Link>
            
            {/* Get rid of the code below - CHEKCING DATA RENDERS */}
            <ul>
              {project.products.map((product, productIndex) => (
                <li key={productIndex}>
                  {product.product}: {product.quantity}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsPage;
