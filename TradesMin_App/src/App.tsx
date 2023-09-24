import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./Components/Home";
import { Footer } from "./Components/Footer";
import ProjectsPage from "./Components/Projects Pages V2/ProjectsPage.jsx"
import CreateProject from "./Components/Projects Pages V2/CreateProject.jsx";
import ProjectDetails from "./Components/Projects Pages V2/ProjectDetails";
import NotFound from "./Components/NotFound";
import About from "./Components/About";
import { Navbar } from "./Components/Navbar";
// import projects from "./Data/DummyData";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-blue-200">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projectspage" element={<ProjectsPage />} />
            <Route path="/createproject" element={<CreateProject />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />

            <Route path="/notfound" element={<NotFound />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

// <div className="">
//   <div className="">TradesMin App</div>
//   <div className="">Please enter Password to continue...</div>
//   <textarea placeholder='Password goes here...'></textarea>

// </div>
