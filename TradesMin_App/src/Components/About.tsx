// import { Card } from "react-bootstrap";
// import { Link } from "react-router-dom";

// export const About = () => {
//   return (
//     <Card className="mx-auto my-8 p-8 w-96 bg-blue-100 shadow-md rounded-md">
//       <Card.Title className="text-2xl font-bold mb-4 text-pink-600">
//         Welcome new user!
//       </Card.Title>
//       <Card.Body>
//         <h2 className="text-xl font-semibold mb-4">My name is Nick,</h2>
//         <p className="text-gray-800 mb-4">
//           I built this project using React, TypeScript, Tailwind CSS, Bootstrap,
//           and various other open-source libraries.
//         </p>
//         <Link to="/">
//           <button

//             className="text-black hover:bg-pink-700 focus:outline-none focus:ring focus:border-pink-600"
//           >
//             Back to the homepage
//           </button>
//         </Link>
//       </Card.Body>
//     </Card>
//   );
// };
import { Card } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import logo from "../assets/tradesminLogo_v2.png";

export const About = () => {
  return (
    <div className="flex items-center justify-center h-">
      <Card style={{ width: "18rem", padding: "20px" }}>
        <Card.Img variant="top" src={logo} />
        <Card.Body>
          <Card.Title>Welcome new user!</Card.Title>
          <Card.Title>I'm Nick Valente</Card.Title>
          <Card.Text>
            I built this project using React, TypeScript, Tailwind CSS,
            Bootstrap, and various other open-source libraries.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <a href="https://github.com/Ice-and-Rock">My Github</a>{" "}
          </ListGroup.Item>
          <ListGroup.Item>
            <a href="https://github.com/Ice-and-Rock">My LinkedIn</a>{" "}
          </ListGroup.Item>
          <ListGroup.Item>
            <a href="https://github.com/Ice-and-Rock">My email</a>{" "}
          </ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="/">Home</Card.Link>
          <Card.Link href="/login">Sign in</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};
