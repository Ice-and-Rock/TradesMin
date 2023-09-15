import React from "react";


type Project = {
  ProjectName: string;
  products: Product[];
};

type Product = {
  product: string;
  quantity: number;
};

const ProjectDetails: React.FC <{ project: Project }> = ({ project }) => {

  if (!project) {
    // Error, if I haven't done it properly 
    return <div>Project not found</div>;
  }

  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h2>Project Details</h2>
      <h3>Project Name: {project.ProjectName}</h3>
      <h3>Products: 
        <ul>
          {project.products.map((product, productIndex) => (
            <li key={productIndex}>
              {product.product}: {product.quantity}
            </li>
          ))}
        </ul>
      </h3>
      
    </div>
  );
};

export default ProjectDetails;
