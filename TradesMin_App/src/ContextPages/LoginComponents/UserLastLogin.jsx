import React from "react";
import { useAuth } from "../../Context/AuthProvider";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserLastLogin = ({ lastSignIn }) => {
  
  const signInDate = new Date(lastSignIn);
  
  const dateOptions = { year: "numeric", month: "long", day: "numeric" };
  const timeOptions = { hour: "numeric", minute: "numeric", second: "numeric" };
  
  const formattedDate = signInDate.toLocaleDateString(undefined, dateOptions);
  const formattedTime = signInDate.toLocaleTimeString(undefined, timeOptions);
  
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
  return (
    <div className="flex-column  justify-content-center align-items-center">
<div className="colored-box p-1 rounded text-center" style={{ backgroundColor: '#a0d3e8' }}>        <p className="mb-0">{formattedDate}</p>
        <p>At: {formattedTime}</p>
      </div>
      <div className="colored-box p-4 rounded text-center">
      <Link to="/notfound">
        <Button variant="warning" onClick={handleLogout}>Not you? Click here</Button>
      </Link>
      </div>
      
    </div>
  );
};

export default UserLastLogin;
