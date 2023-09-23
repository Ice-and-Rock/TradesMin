import {useNavigate, useParams} from "react-router-dom"
import useFetch from "./useFetch";

const ProjectDetails = () => {
    const { id } = useParams; 
    const { data: project, error, isPending } = useFetch(`http://localhost:8000/projects/` + id)
    const navigate = useNavigate;
    
const handleClick = () => {
fetch('http://localhost:8000/projects/' + project.id, {
    method: 'DELETE'
}).then(() => {
    navigate('/');
})
}

    return ( 
        <div className='project-details'>
           
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            {project && (
                <article>
                    <h2> { project.title } </h2>
                    <p>Written by { project.author }</p>
                    <div>{ project.body }</div>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
        </div>
     );
}
 
export default ProjectDetails;