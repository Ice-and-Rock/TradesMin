import { Card } from "react-bootstrap";

const UserData = ({ fetchedUser }) => {
  // the Returned data for FetchedUser comes back as an ARRAY of objects => users with matching Id's
  // this needs to be changed to just return a single user ❌

  // console.log("fetchedUser DATA:", fetchedUser[0]); 

  return (
    <Card>
      <Card.Header>UserData Component:</Card.Header>
      <Card.Body>
        
          <div>Username:</div>
          <Card.Text className="font-bold">{fetchedUser[0].username}</Card.Text>
          <div>Role:</div>
          <Card.Text className="font-bold">{fetchedUser[0].role}</Card.Text>
          <div>(Code) Number</div>
          <Card.Text className="font-bold">
            {fetchedUser[0].country_code} . {fetchedUser[0].phone_number}
          </Card.Text>
        
      </Card.Body>
    </Card>
  );
};

export default UserData;
