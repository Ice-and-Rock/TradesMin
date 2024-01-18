import { useState } from "react";
import { Accordion, Button } from "react-bootstrap";

import useFetchProjectMaterialsData from "../../hooks/useFetchProjectMaterialsData.js";
import MaterialsDetailsModal from "./MaterialsDetailsModal.jsx";

const ProjectMaterialsList = ({ projectId }) => {
  const [modalShow, setModalShow] = useState(false);
  const [selectedMaterial, setSelectedMaterial] = useState(null);

  const {
    data: fetchedProjectMaterials,
    isPending,
    error,
  } = useFetchProjectMaterialsData( projectId ) ;

  console.log("ProjectMaterialsList data:", fetchedProjectMaterials);

  const handleShowModal = (material) => {
    setSelectedMaterial(material);
    setModalShow(true);
  };

  return (
    <Accordion defaultActiveKey={["0"]} alwaysOpen>
      {error && <div className="text-red-600">{error}</div>}
      {isPending && (
        <div className="text-pink-500 font-bold m-2 p-2">
          Waiting for data...
        </div>
      )}
      {fetchedProjectMaterials && (
        <>
          {fetchedProjectMaterials.map((material, index) => (
            <Accordion.Item
              key={index}
              eventKey={index.toString()}

              // OLD STYLE className="flex justify-between bg-blue-400 rounded p-2 my-1 text-white"
            >
              <Accordion.Header>{material.materials.material}</Accordion.Header>
              <Accordion.Body style={{ visibility: "visible" }}>
                <div>
                  <div>Quantity: {material.quantity}</div>
                </div>
                <div>
                  <div className="text-gray-800">{material.notes}</div>
                </div>
                <div>
                <Button
                    variant="warning"
                    onClick={() => handleShowModal(material.materials)}
                  >
                    Item Info
                  </Button>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </>
      )}
      <MaterialsDetailsModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        materialData={selectedMaterial}
      />
    </Accordion>
  );
};

export default ProjectMaterialsList;
