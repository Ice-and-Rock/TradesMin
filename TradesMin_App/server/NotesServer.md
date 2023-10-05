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

