import React from "react";

const UserLastLogin = ({ lastSignIn }) => {
  // Convert the string to a Date object
  const signInDate = new Date(lastSignIn);

  // Get the date and time components
  const dateOptions = { year: "numeric", month: "long", day: "numeric" };
  const timeOptions = { hour: "numeric", minute: "numeric", second: "numeric" };

  const formattedDate = signInDate.toLocaleDateString(undefined, dateOptions);
  const formattedTime = signInDate.toLocaleTimeString(undefined, timeOptions);

  return (
    <div>
      <p>{formattedDate}</p>
      <p>At : {formattedTime}</p>
    </div>
  );
};

export default UserLastLogin
