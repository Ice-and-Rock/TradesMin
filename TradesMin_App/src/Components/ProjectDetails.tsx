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
    <div className="bg-white p-4 rounded-xl shadow-md">
    <h2 className="text-2xl font-semibold">{project.ProjectName}</h2>
    <h3 className="text-l font-semibold">"Project address - here"</h3>
    <div className="grid grid-cols-2 gap-4 mt-4">
      <div>
        <h4 className="text-lg font-semibold">Products</h4>
        <ul>
          {project.products.map((product, productIndex) => (
            <li key={productIndex} className="mb-2">
              {product.product}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="flex align-center justify-center text-lg font-semibold">Quantity</h4>
        <ul>
          {project.products.map((product, productIndex) => (
            <li key={productIndex} className="flex align-center justify-center mb-2">
              {product.quantity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
  );
};

export default ProjectDetails;
