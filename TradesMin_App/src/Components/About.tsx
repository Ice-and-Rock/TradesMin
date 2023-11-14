import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const About = () => {
    return ( 
        <Card className="m-4">
            <Card.Title>
            <h2>Welcome new user!</h2>
            </Card.Title>
            <Card.Body>
            <h2> My name is Nick,</h2>
            <p>I built this project using React,Typescript, Tailwind, Bootstrap and various other open source libraries</p>
            <Link to="/">Back to the homepage...</Link>
            </Card.Body>
        </Card>
     );
}
 