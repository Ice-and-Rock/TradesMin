import { useState } from "react";
import { useNavigate } from 'react-router-dom'

const CreateProject = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
//   const [author, setAuthor] = useState("Nick");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Add author and other fields to vairable below ***
    const project = { title, body };

    setIsPending(true);

    fetch("http://localhost:8000/projects", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(project),
    }).then(() => {
      console.log("new project added");
      setIsPending(false);
      // history.go(-1)
      navigate('/projectspage')
    });

  };

  return (
    <div className="create">
      <h2>Create a new project...</h2>
      <form onSubmit={handleSubmit}>
        <label>project name :</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>project body :</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        {/* <label>project author :</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Nick">Nick</option>
          <option value="Becs">Becs</option>
          <option value="Chris">Chris</option>
        </select> */}
        { !isPending && <button>Add project!</button> }
        { isPending && <button disabled>Adding project...</button> }
      </form>
      <p>{title}</p>
      <p>{body}</p>
      {/* <p>{author}</p> */}
    </div>
  );
};

export default CreateProject;
