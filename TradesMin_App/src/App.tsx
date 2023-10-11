import "./index.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Home"
import Footer from "./Components/Footer";
import { ProjectsPage } from "./Components/ProjectsPagesV2/ProjectsPage";
import { CreateProject } from "./Components/ProjectsPagesV2/CreateProject";
import { ProjectDetails } from "./Components/ProjectsPagesV2/ProjectDetails";
import { NotFound } from "./Components/NotFound";
import { About } from "./Components/About";
import { Navbar } from "./Components/Navbar";
import { EditProject } from "./Components/ProjectsPagesV2/EditProject";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow bg-blue-200">
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
