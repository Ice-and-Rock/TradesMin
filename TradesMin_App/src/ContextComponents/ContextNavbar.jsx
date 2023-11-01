import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthProvider";

const ContextNavBar = () => {
  const { auth, signOut } = useAuth();

  const handleLogout = async (e) => {
    e.preventDefault();
    console.log("logout running")
    try {
      const { error } = await signOut();
      console.log(error);
    } catch (error) {
      console.log(error);
    }
  };

  console.log("Navbar Auth Test", )

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>UserAuth</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        {/* <Navbar.Collapse id="responsive-navbar-nav"> */}
          <Nav className="sm-auto">
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
            {auth && (
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
            )}
          </Nav>
          <Nav>
            {auth && (
              <Nav.Link as={Button} onClick={handleLogout}>
                LogOut
              </Nav.Link>
            )}
          </Nav>
        {/* </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
};

export default ContextNavBar;