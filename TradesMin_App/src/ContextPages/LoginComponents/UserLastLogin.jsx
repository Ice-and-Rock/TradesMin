import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserLastLogin = ({ lastSignIn }) => {
  
  const signInDate = new Date(lastSignIn);
  
  const dateOptions = { year: "numeric", month: "long", day: "numeric" };
  const timeOptions = { hour: "numeric", minute: "numeric", second: "numeric" };

  const formattedDate = signInDate.toLocaleDateString(undefined, dateOptions);
  const formattedTime = signInDate.toLocaleTimeString(undefined, timeOptions);

  return (
    <div className="flex-column  justify-content-center align-items-center">
<div className="colored-box p-1 rounded text-center" style={{ backgroundColor: '#a0d3e8' }}>        <p className="mb-0">{formattedDate}</p>
        <p>At: {formattedTime}</p>
      </div>
      <Link to="/notfound">
      <div className="colored-box p-4 rounded text-center">
        <Button variant="warning">Not you? Please click here</Button>
      </div>
      </Link>
      
    </div>
  );
};

export default UserLastLogin;
