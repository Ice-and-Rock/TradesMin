import { Container, Card } from "react-bootstrap";
import { useAuth } from "../Context/AuthProvider";

const UserAccountPage = () => {
  const { user } = useAuth();

  return (
    <Container>
    <Card>
      <Card.Header>
        This is where the user's profile will go
      </Card.Header>
      <Card.Body>
        <p>{user.email}</p>
        <p>{user.phone}</p>
        
        
      </Card.Body>
    </Card>
    </Container>
  )
};

export default UserAccountPage
