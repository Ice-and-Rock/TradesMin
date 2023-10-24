import "./index.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import Footer from "./Components/Footer";
// import { ProjectsPage } from "./Components/ProjectsPagesV2/ProjectsPage";
// import { CreateProject } from "./Components/ProjectsPagesV2/CreateProject";
// import { ProjectDetails } from "./Components/ProjectsPagesV2/ProjectDetails";
// import { EditProject } from "./Components/ProjectsPagesV2/EditProject";
import { NotFound } from "./Components/NotFound";
import { About } from "./Components/About";
import { Navbar } from "./Components/Navigation/Navbar";
import Register from "./ContextPages/Register";
import AuthRoute from "./Context/AuthProvider";
import { Container } from "react-bootstrap";
import HomeLoggedIn from "./ContextPages/HomeLoggedIn";
import Login from "./ContextPages/Login";

const App: React.FC = () => {
  return (
    <Container>
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow bg-blue-200">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* The following line is for AuthProvider */}
            <Route path="/register" element={<Register />} />
            <Route element={<AuthRoute />}>
              <Route path="/" element={<HomeLoggedIn />} />
              <Route path="/homeloggedin" element={<HomeLoggedIn />} />
            </Route>
            <Route path="/login" element={<Login />} />

            {/* <Route path="/" element={<Home />} />
            <Route path="/projectspage" element={<ProjectsPage />} />
            <Route path="/createproject" element={<CreateProject />} />
            <Route path="editproject/:id" element={<EditProject />} />
            <Route path="/projects/:id" element={<ProjectDetails />} /> */}



            <Route path="/notfound" element={<NotFound />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
    </Container>
  );
};

export default App;

// <div className="">
//   <div className="">TradesMin App</div>
//   <div className="">Please enter Password to continue...</div>
//   <textarea placeholder='Password goes here...'></textarea>

// </div>
