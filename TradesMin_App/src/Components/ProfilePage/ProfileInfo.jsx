// import { Button, Card } from "react-bootstrap";
import useFetchUserData from "../../hooks/useFetchUserData.js";
import UserData from "./UserData.jsx";

const ProfileInfo = ({ userId }) => {
  const { userData: fetchedUser, isPending, error } = useFetchUserData(userId);
  // console.log("fetchedUser OBJECT:", fetchedUser);
  // console.log("UserData PROPS:", userId);

  return (
    <div>
      {error && <div className="text-red-600"> {error} </div>}
      {isPending && (
        <div className="text-pink-500 font-bold m-2 p-2">
          Waiting for data...
        </div>
      )}
      {fetchedUser && (
        <div>
          <UserData fetchedUser={fetchedUser} />
          {/* <Card>
            <Card.Body>
              <Button variant="warning">Company information</Button>
            </Card.Body>
          </Card> */}
        </div>
      )}
    </div>
  );
};

export default ProfileInfo;
