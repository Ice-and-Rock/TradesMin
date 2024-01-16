import { Modal } from "react-bootstrap";
// import useFetchMaterialData from "../../hooks/useFetchMaterialData.js";



const MaterialsDetailsModal = ({ show, onHide, materialData }) => {
//     const {
//         data: fetchedMaterial,
//         // isPending,
//         // error,
//       } = useFetchMaterialData(materialId);

//       console.log("MaterialDetail data:", fetchedMaterial)
console.log("Modal Running ✅", materialData)

return (
  <div>
    <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        {materialData?.material}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
        <h5>{materialData?.notes}</h5>
      {/* More infooo */}
      </Modal.Body>
    </Modal>
  </div>
);
};

export default MaterialsDetailsModal
