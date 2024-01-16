import useFetchProjectMaterialsData from "../../hooks/useFetchProjectMaterialsData.js";
// import MaterialsDetails from "./MaterialsDetails.jsx";

const ProjectMaterialsList = ({ projectId }) => {
  const {
    data: fetchedProjectMaterials,
    isPending,
    error,
  } = useFetchProjectMaterialsData(projectId);

  console.log("ProjectMaterialsList data:", fetchedProjectMaterials);

  return (
    <div>
      {error && <div className="text-red-600">{error}</div>}
      {isPending && (
        <div className="text-pink-500 font-bold m-2 p-2">
          Waiting for data...
        </div>
      )}
      {fetchedProjectMaterials && (
        <div>
          
          {fetchedProjectMaterials.map((material, index) => (
            <div
              key={index}
              className="flex justify-between bg-blue-400 rounded p-2 my-1 text-white"
            >
              <div className="flex-col">
                <h5>{material.materials.material}</h5>
                <div className="text-gray-800">{material.notes}</div>
              </div>
              <div>
                <div>{material.quantity}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectMaterialsList;
