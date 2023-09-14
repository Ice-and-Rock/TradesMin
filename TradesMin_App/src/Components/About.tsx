import { Link } from "react-router-dom";

const About = () => {
    return ( 
        <div className="about">
            <h2>Hey, I'm Nick</h2>
            <p>I built this project using React,Typescript, Tailwind and variou sother open source libraries</p>
            <Link to="/">Back to the homepage...</Link>
        </div>
     );
}
 
export default About
