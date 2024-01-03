import { Card } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import nick from "../assets/Nick.jpeg";

const AboutMe = () => {
  return (
    <div className="flex items-center justify-center m-2">
      <Card style={{ width: "20rem", padding: "10px" }}>
        <Card.Body>
          <Card.Title>I'm Nick Valente,</Card.Title>
          <Card.Text>
            I built this project using React, TypeScript, Tailwind CSS,
            Bootstrap, and various other open-source libraries.
          </Card.Text>
          <Card.Img src={nick} variant="Nick" style={{ width: "10rem" }} />
        </Card.Body>
        <Card.Body>
          <Card.Text>
            Check out my other projects and feel free to contact me below.
          </Card.Text>
          <Card.Text>Thanks! </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <a href="https://github.com/Ice-and-Rock">Github</a>{" "}
          </ListGroup.Item>
          <ListGroup.Item>
            <a href="https://github.com/Ice-and-Rock">LinkedIn</a>{" "}
          </ListGroup.Item>
          <ListGroup.Item>
            <a href="https://github.com/Ice-and-Rock">email</a>{" "}
          </ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="/">Welcome Page</Card.Link>
          <Card.Link href="/login">Sign in</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AboutMe;
