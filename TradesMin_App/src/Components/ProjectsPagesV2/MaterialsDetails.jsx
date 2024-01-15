import useFetchMaterialData from "../../hooks/useFetchMaterialData.js";



const MaterialsDetails = ({materialId}) => {
    const {
        data: fetchedMaterial,
        // isPending,
        // error,
      } = useFetchMaterialData(materialId);

      console.log("MaterialDetail data:", fetchedMaterial)


  return (
    <div>
      {/* <p>{fetchedMaterial.material}</p> */}
      
    </div>
  )
};

export default MaterialsDetails
