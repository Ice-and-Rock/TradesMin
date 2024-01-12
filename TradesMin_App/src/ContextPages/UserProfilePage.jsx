import { Container, Card } from "react-bootstrap";
import { useAuth } from "../Context/AuthProvider";
import UserPage from "../Components/UserProfilePage/UserPage.jsx";

const UserAccountPage = () => {
  const { user } = useAuth();

  return (
    <Container>
      <Card>
        <Card.Header>This is where the user's profile will go</Card.Header>
        <Card.Body>
          <p>User profile: {user.email}</p>
          <UserPage />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default UserAccountPage;
