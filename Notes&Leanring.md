# Notes & Leanring

### Classic Nick - 
Forgot to import the CSS Tailwind styles into the ```main.tsx``` ...again. No wonder it took ages.
- Ran through the Tailwind Docs to find this issue and also compared to previous project

## Use an interface plus array (variable) to create the Navbar


## Use standard method to create the footer (no array/interface)


## Retrieve Project Data in the ProjectsPage and render the specific data of a selected project
- Ok, so this took time. ⌛️
- Rather than learn a new and conmplex method (context / state management library)
    - Simple conditionally render the selected project with it's data on the page from a TSX component.
    - Don't use a <Link/> tag, because you have to pass props and data through it ❌ 


### CHANGE OF PLAN
Where I went wrong...
- I was going to write a 'simple' data.js file to save new projects to. Nah ❌
- It's better to just write CRUD methods and save stringified data to a JSON file ✅
Why? ...because I know how to do this, and it's still going to take TIME ⌛️

# Note for JSON Server
You can have one json server running ONLY.
so, close down any other project your working on! ❌

```npx json-server --watch data/db.json --port 8000```

TO DO: add this command to the dev scripts when you can 👍

## Store the data in a .json file rather than a .js file => Local NPX JSON-server
# Components:
    ProjectsPage - useFetch - ProjectList - ProjectDetails(Edit/Delete)
    ProjectsPage - CreateProject 
# Write a ProjectsPage component ✅
    call useFetch
    render ProjectList
    render NewProject
# Write a useFetch component to retreive the data
    States:
    - projectData
    - pending
    - error
# Write a ProjectsList component to render the list ✅
    props: fetchedProjects
    Issues:
        - DDMenuMobile had an error for Link. Fixed ✅
        - Component were changed to JSX due to HTML elements ✅
            - Caused by conditional rendering for ```error``` and ```isPending```
# Write a ProjectDetails component to render a specific project ✅
    Issues:
        - Forgot to call ```useParams()``` and ```Navigate()``` to import the dynamic ```{ id }``` - silly me!
    - Must include Update/delete
        - handleDelete: onClick prompt to double check
        - pass dynamic value to the prompt using $ and `backticks` 
# Write a CreateProject component to add data to the data.json file ✅
    Include ```e.preventDefault()```
        - stops the DOM from re-rendering for every interaction 
    Fetch then POST using ```JSON.stringify```
    ```useNavigate()``` to re-direct user back to ProjectsPage 

