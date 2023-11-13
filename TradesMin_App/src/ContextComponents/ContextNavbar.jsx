// import { Button } from "react-bootstrap";
// line above removed from the Nav.Link button for logout 'as={button}'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthProvider";

const ContextNavBar = () => {
  const { auth, signOut } = useAuth();

  const handleLogout = async (e) => {
    e.preventDefault();
    console.log("logout running");
    try {
      const { error } = await signOut();

      console.log(error);
    } catch (error) {
      console.log(error);
    }
  };

  console.log("Navbar Auth Test:", auth); 

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand>TradesMin</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" style={{ visibility: "visible" }}>
          <Nav className="md-auto">

          {/* LOGGED OUT FROM HERE */}
            {!auth && (
              <Nav.Link as={Link} to="/hometemp">
                Home
              </Nav.Link>
            )}
            {!auth && (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
            {!auth && (
              <Nav.Link as={Link} to="/register">
                Register
              </Nav.Link>
            )}
            

            {/* LOGGED IN FROM HERE */}
            {auth && (
              <Nav.Link as={Link} to="/homeloggedin">
                User HomePage
              </Nav.Link>
            )}
            {auth && (
              <Nav.Link as={Link} to="/projectspage">
                Projects
              </Nav.Link>
            )}
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
          </Nav>
          <Nav>
            {auth && (
              <Nav.Link  onClick={handleLogout} href="/login">
                LogOut
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ContextNavBar;
