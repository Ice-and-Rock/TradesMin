import { Card } from "react-bootstrap";

const UserData = ({ fetchedUser }) => {
  // the Returned data for FetchedUser comes back as an ARRAY of objects => users with matching Id's
  // this needs to be changed to just return a single user ❌

  // console.log("fetchedUser DATA:", fetchedUser[0]); 

  return (
    <Card>
      <Card.Header>UserData Component:</Card.Header>
      <Card.Body>
        <Card.Text>
          <div>Username:</div>
          <p className="font-bold">{fetchedUser[0].username}</p>
          <div>Role:</div>
          <p className="font-bold">{fetchedUser[0].role}</p>
          <div>(Code) Number</div>
          <p className="font-bold">
            {fetchedUser[0].country_code} . {fetchedUser[0].phone_number}
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default UserData;
