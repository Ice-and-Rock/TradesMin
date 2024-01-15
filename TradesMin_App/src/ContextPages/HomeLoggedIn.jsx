import React from "react";
import { Card } from "react-bootstrap";
import { useAuth } from "../Context/AuthProvider";
import UserLastLogin from "./LoginComponents/UserLastLogin"

const HomeLoggedIn = () => {
  const { user } = useAuth();
  console.log("Home Logged in. Check ✅", user)
  

  return (
  <Card className="m-4">
    <Card.Body>
    Welcome to V2 of TradesMin {user.email}!
    </Card.Body>
    <Card.Body>
    You are LOGGED IN and you were last here on:
    </Card.Body>
    <Card.Body>
    <UserLastLogin lastSignIn={user.last_sign_in_at} /> 
    </Card.Body>
  </Card>
  
)
};

export default HomeLoggedIn;