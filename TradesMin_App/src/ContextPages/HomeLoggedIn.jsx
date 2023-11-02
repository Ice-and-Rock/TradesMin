import React from "react";
import { Card } from "react-bootstrap";
import { useAuth } from "../Context/AuthProvider";

const HomeLoggedIn = () => {
  const { user } = useAuth();
  console.log("Home Logged in. Check ✅")

  return (
  <Card className="m-4">
    <Card.Body>
    You are logged in and your email address is {user.email}
    </Card.Body>
  </Card>
  
)
};

export default HomeLoggedIn;