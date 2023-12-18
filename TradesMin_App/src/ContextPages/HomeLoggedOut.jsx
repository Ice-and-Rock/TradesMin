import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";


const HomeTemp = () => {
  
  return (
    <Card className="m-6">
    <Card.Body className="text-2xl">
      Welcome!
      </Card.Body>
      <Card.Body>
      Please <Link to='/login'>sign in</Link> to continue
    </Card.Body>
    </Card>
  )
};

export default HomeTemp
