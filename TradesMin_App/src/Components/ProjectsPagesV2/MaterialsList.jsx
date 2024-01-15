import useFetchProjectMaterialsData from "../../hooks/useFetchProjectMaterialsData.js";
// import MaterialsDetails from "./MaterialsDetails.jsx";

const MaterialsList = ({projectId}) => {
    const {
        data: fetchedProjectMaterials,
        isPending,
        error,
      } = useFetchProjectMaterialsData(projectId);

   

      console.log("MaterialsList data:", fetchedProjectMaterials)

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
              <p>Materials List component</p>
              {fetchedProjectMaterials.map((material, index) => (
                <div
                  key={index}
                  className="flex justify-between bg-blue-400 rounded p-2 my-1 text-white"
                >
                  <p>{material.material_id}</p>
                  <p>{material.quantity}</p>
                  <p>{material.notes}</p>
                  {/* <MaterialsDetails materialId={material.material_id}/> */}
                </div>
              ))}
            </div>
          )}
        </div>
      );
      
};

export default MaterialsList
