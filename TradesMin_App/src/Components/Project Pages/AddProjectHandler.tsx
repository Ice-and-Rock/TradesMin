import NewProjectForm from "./NewProjectForm";
import data from "../../Data/DummyData";

type Project = {
  ProjectName: string;
  products: {
    SingleSocket: number;
    DoubleSocket: number;
    SingleSwitch: number;
    DoubleSwitch: number;
    FlexOutlet: number;
  };
};

const AddProjectHandler: React.FC = () => {
  // Define the logic for adding a new project here
  const handleAddProject = (newProject: Project) => {
    // Implement logic to add the new project here
    console.log("Adding project:", newProject);

    data.push(newProject);
  };

  return <NewProjectForm onAddProject={handleAddProject} />;
};

export default AddProjectHandler;
