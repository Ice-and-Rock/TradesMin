import React from "react";
import { Card, Container } from "react-bootstrap";
import { useAuth } from "../Context/AuthProvider";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserLastLogin from "./LoginComponents/UserLastLogin";

const HomeLoggedIn = () => {
  console.log("Home Logged in. Check ✅");

  const { user, signOut } = useAuth();
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

  return (
    <Container>
      <Card className="m-4">
        <Card.Header>Welcome to V2 of TradesMin!</Card.Header>
        <Card.Body>
          <Card.Text>{user.email}</Card.Text>
          <Card.Text>You are LOGGED IN and you were last here on:</Card.Text>
        </Card.Body>
        <Card.Body>
          <UserLastLogin lastSignIn={user.last_sign_in_at} />
          <div className="colored-box p-4 rounded text-center">
            <Link to="/notfound">
              <Button variant="warning" onClick={handleLogout}>
                Not you? Click here
              </Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default HomeLoggedIn;
