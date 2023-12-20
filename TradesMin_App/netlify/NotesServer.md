 ```
 fetch("http://localhost:8000/projects", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(project),
    }).then(() => {
      console.log("new project added");
      setIsPending(false);
      navigate("/projectspage");
    });
```

# Serverless design
### Folder sctructure
Create a functions folder
  - Break down each function into several files
    - GET 
    - POST
    - PUT
    - DELETE

## TODO
- Break the database tables into three
  - Projects / Materials / join 