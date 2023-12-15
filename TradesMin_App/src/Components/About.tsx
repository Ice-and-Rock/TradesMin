// import { Card } from "react-bootstrap";
// import { Link } from "react-router-dom";

// export const About = () => {
//   return (
//     <Card className="mx-auto  -8 p-8 w-96 bg-blue-100 shadow-md rounded-md">
//       <Card.Title className="text-2xl font-bold mb-4 text-pink-600">
//         Welcome new user!
//       </Card.Title>
//       <Card.Body>
//         <h2 className="text-xl font-semibold mb-4">  name is Nick,</h2>
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
      <Card style={{ width: "20rem", padding: "10px" }}>
        <Card.Img variant="top" src={logo} />
        <Card.Body>
          <Card.Text>
            This app is designed to offer a practical solution to managing a small company in the Electrical industry. 
          </Card.Text>
          <Card.Text>
            You can handle your Projects, Clients and Materials requirements using our secure databases and intuitive UI. 
          </Card.Text>
          <Card.Text>
            Please feel free to Login and leave us some feedback. We imporove our systems based on our customers reviews.
          </Card.Text>
          <Card.Title>My name is Nick,</Card.Title>
          <Card.Text>
            I built this project using React, TypeScript, Tailwind CSS,
            Bootstrap, and various other open-source libraries.
          </Card.Text>
        </Card.Body>
        <Card.Body>
          
          <Card.Text>Check out my other projects and feel free to contact me below. Thanks</Card.Text>
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
          <Card.Link href="/">Home</Card.Link>
          <Card.Link href="/login">Sign in</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};
