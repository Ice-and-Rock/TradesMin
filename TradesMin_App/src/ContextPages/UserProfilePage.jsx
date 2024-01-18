import { Container, Card } from "react-bootstrap";
import { useAuth } from "../Context/AuthProvider";
import UserPage from "../Components/UserProfilePage/UserPage.jsx";

const UserAccountPage = () => {
  const { user } = useAuth();

  // console.log("Auth user object", user);

  // Below rendres an emoji based on user.aud value { ? authenticated }
  const renderStatusEmoji = () => {
    return user.aud === "authenticated" ? "✅" : "❌";
  };

  return (
    <Container className="my-2">
      <Card>
        <Card.Header>UserAccountPage Component</Card.Header>
        <Card.Body>
          <Card.Text>
            <div>Auth profile:</div>
            <p> {user.email}</p>
            <div>Status:</div>
            <p>
              {user.aud} {renderStatusEmoji()}
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <UserPage userId={user.id} />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default UserAccountPage;
