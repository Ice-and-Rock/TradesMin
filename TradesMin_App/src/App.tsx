import "./index.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



import { Home } from "./components/Home";
import { Footer } from "./components/Footer";
import ProjectsPage from "./components/ProjectsPagesV2/ProjectsPage"
import CreateProject from "./components/ProjectsPagesV2/CreateProject";
import ProjectDetails from "./components/ProjectsPagesV2/ProjectDetails";
import NotFound from "./components/NotFound";
import About from "./components/About";
import { Navbar } from "./components/Navbar";
import EditProject from "./components/ProjectsPagesV2/EditProject";




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
            <Route path="editproject/:id" element={<EditProject />} />
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
