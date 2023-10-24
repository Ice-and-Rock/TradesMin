import React from "react";
import { useAuth } from "../Context/AuthProvider";

const HomeLoggedIn = () => {
  const { user } = useAuth();

  return <div>You are logged in and your email address is {user.email}</div>;
};

export default HomeLoggedIn;