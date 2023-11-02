import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const About = () => {
    return ( 
        <Card className="m-4">
            <Card.Body>
            <h2>Welcome new user, I'm Nick!</h2>
            <p>I built this project using React,Typescript, Tailwind, Bootstrap and various other open source libraries</p>
            <Link to="/">Back to the homepage...</Link>
            </Card.Body>
        </Card>
     );
}
 