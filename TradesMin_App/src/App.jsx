import "./index.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import Footer from "./Components/Footer";
import { ProjectsPage } from "./Components/ProjectsPagesV2/ProjectsPage";
import { CreateProject } from "./Components/ProjectsPagesV2/CreateProject";
import { ProjectDetails } from "./Components/ProjectsPagesV2/ProjectDetails";
import { EditProject } from "./Components/ProjectsPagesV2/EditProject";
import { NotFound } from "./Components/NotFound";
import { About } from "./Components/About";
import { Navbar } from "./Components/Navigation/Navbar";
import Register from "./ContextPages/Register";
import AuthRoute from "./ContextComponents/AuthRoute";
import { Container } from "react-bootstrap";
import HomeLoggedIn from "./ContextPages/HomeLoggedIn";
import Login from "./ContextPages/Login";
import ContextNavBar from "./ContextComponents/ContextNavbar";
import PromptLogin from "./ContextPages/PromptLogin";
import HomeTemp from "./ContextPages/HomeTemp";

const App = () => {
  // :React.FC removed for jsx file
  return (
    <Container>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow bg-blue-200">
          <ContextNavBar />
          <Routes>
            {/* The following line is for AuthProvider */}
            <Route element={<AuthRoute />}>
              <Route path="/homeloggedin" element={<HomeLoggedIn />} />
              <Route path="/about" element={<About />} />

              <Route path="/projectspage" element={<ProjectsPage />} />
              <Route path="/createproject" element={<CreateProject />} />
              <Route path="editproject/:id" element={<EditProject />} />
              <Route path="/projects/:id" element={<ProjectDetails />} />
            </Route>
            <Route path="/" element={<Home />} />
            <Route path="/hometemp" element={<HomeTemp />} />

            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />

            <Route path="/promptlogin" element={<PromptLogin />} />
            <Route path="/notfound" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Container>
  );
};

export default App;

// <div className="">
//   <div className="">TradesMin App</div>
//   <div className="">Please enter Password to continue...</div>
//   <textarea placeholder='Password goes here...'></textarea>

// </div>
