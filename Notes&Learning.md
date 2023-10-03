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
# Write a useFetch component to retreive the data ✅
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
        - reverse the order of the list using ```.reverse()```, newest first ✅
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


### Well done, it works! Next phase...
## Make the data more complicated
# add 'materials[{name + quantity}]' to the data object 
    At the moment both title and body are saved in state
    - Change the state to ```{ project_name, body, materials[] }``` ❌ ...didnt work
    - Add another input field with: ```type, name, value and onChange``` ❌...didnt work
*createProject Page* 
    fix all of the layout and design
        - add bin icon to the delete button ✅
        - laout of the materials, quantity and delete <div/> ✅

*projectDetails page*
    Use .map() to display all of the materials => name + quantity ✅
        ERROR: ❌
            - Can't map through data without ```"materials[]"``` in object. 
            - Needs to be made conditional to see if any 'materials' exist 
        FALSE ALARM ✅
            - The previous phase data was missing the materials and author value pairs 


## OK, now the hard part...
### Integrate the SupaBase Backend...
Notes:
- initially hold the URL and key in each component to simplify things
- 

# Create a new database and table called 'projects' ✅
Columns: 
- id
- project_name
- body
- materials (array in JSON)
- author
# Make an initial API fetch using the supabase: URL and Key
Done initially to render state in ProjectsPage
    - useFetch ✅
        <code>
        supabase
        .from(projects)
        .select() - ALL
        .then setData(data)
        </code>
    - Pass state down to ProjectList as props with title ✅
        render fetchedProjects as before using .map() and :id
# CREATE
Change the PUT request to an INSERT request using supabase (URL/key)
    - fetch the data from supabase
    - assign the new projectId to be the first part of the data array
        ```projectId = data[0].id```
    *Materials* ✅
        - assign materialLogs to .map through the materials array objects
            materialLogs = materials.map()
        - insert materialLogs into the ('materials') column
    - Set isPending/Navigate as before ✅

# READ (ProjectDetails)
Create a fetch request specific for the selected project's :id ❌
    - Didn't work!
**New approach** 
Create a State variable in the ProjectList <Link> tags
    - Pass this to the ProjectDetails component with ```useLocation()``` 
    - This will use the origional useFetch ✅
    - This will not require another server request using an ID
    - The entire ```project``` object selected in .map() will be passed as a prop ✅
Docs:
https://ui.dev/react-router-pass-props-to-link

# UPDATE


# DELETE 

