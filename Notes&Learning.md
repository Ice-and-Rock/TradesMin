# Notes & Learning

### Classic Nick - 
Forgot to import the CSS Tailwind styles into the ```main.tsx``` ...again. No wonder it took ages.
- Ran through the Tailwind Docs to find this issue and also compared to previous project ✅

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
## Write a ProjectsPage component ✅
    call useFetch
    render ProjectList
    render NewProject
## Write a useFetch component to retreive the data ✅
    States:
    - projectData
    - pending
    - error
## Write a ProjectsList component to render the list ✅
    props: fetchedProjects
    Issues:
        - DDMenuMobile had an error for Link. Fixed ✅
        - Component were changed to JSX due to HTML elements ✅
            - Caused by conditional rendering for ```error``` and ```isPending```
        - reverse the order of the list using ```.reverse()```, newest first ✅
## Write a ProjectDetails component to render a specific project ✅
    Issues:
        - Forgot to call ```useParams()``` and ```Navigate()``` to import the dynamic ```{ id }``` - silly me!
    - Must include Update/delete
        - handleDelete: onClick prompt to double check
        - pass dynamic value to the prompt using $ and `backticks` 
## Write a CreateProject component to add data to the data.json file ✅
    Include ```e.preventDefault()```
        - stops the DOM from re-rendering for every interaction 
    Fetch then POST using ```JSON.stringify```
    ```useNavigate()``` to re-direct user back to ProjectsPage 


### Well done, it works! Next phase...
# Make the data more complicated
## Add 'materials[{name + quantity}]' to the data object 
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

## Create a new database and table called 'projects' ✅
    Columns: 
    - id
    - project_name
    - body
    - materials (array in JSON)
    - author
## Make an initial API fetch using the supabase: URL and Key
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
<hr>

## CREATE
    Change the PUT request to an INSERT request using supabase (URL/key)
        - fetch the data from supabase
        - assign the new projectId to be the first part of the data array
            ```projectId = data[0].id```
        *Materials* ✅
            - assign materialLogs to .map through the materials array objects
                materialLogs = materials.map()
            - insert materialLogs into the ('materials') column
        - Set isPending/Navigate as before ✅

## READ (ProjectDetails)
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

## UPDATE
    Send an UPDATE request to supabase client using the ```project.id``` from state object (project: )
        - create the state in which to store the project data
        - fetch the data to populate the state(data)
    Create an async function **handleSubmit()**
        - preventDefault() to stop the page re-loading at each interaction
        - Create new variable object for updatedFields{}
            pass these to the input fields using **name=** to identify them
        - create a **try{ }** that awaits supabase to catch any errors 
            use **eq("id", id)** to match the id numbers for the update request
    Create **handleInputChange** function
        - This will update the setProjectSelection state
            - using a spread operator **'...project'** 
            - when the **[name]: value** for each input changes
    Create **handleMaterialChange** function
        - Similar to above, but it must:
            - take in an **event** and **index**
            - use [...spread operator] to set **updatedMaterials** state
            - set updatedMaterials **name: "quantity"** from the materials array to be an integer
        - setEditedMaterials to be (updatedMaterials) 
    Hand all of the values from the data into the **'input'** fields and allow the functions to update states

## DELETE 
    Send a DELETE request to supabase client using the ```project.id``` from state object (project: )
        - Create a function ```handleDelete``` from the delete button JSX ✅ 
        - Must be: async, console log the deletion and use navigate() once successful ✅

</hr>

**CRUD Changes !!!**
# The above CRUD requires change **
## To reduce the Supabase Client calls the following must happen:
- Pass { props } to ProjectDetails
    - Separate Async function: handleDelete()
- Pass { props } to EditProject
    - Separate Async function: handleSubmit() 



### .env.local file
# create a local env file
The API key and URL must start with VITE:
    <code>
    const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
    const supabase = createClient(supabaseUrl, supabaseKey)
    </code>
**Make sure you add the .env.local to the .gitignore file**
**Make sure you add the environment variables to your Netlify account**

## Netlify
**Lessons learned**
- change directory to /dist
    - This is where the typescript compiler will put the new files
- add a netlify.toml file
    - this allows netlify to locate the file on the server side
    - in mine, I've directed '/*' to be the 'index.html' root** 
- npm run build
    - compiles the typescript and code
- push to repo
- deeploy ✅ 

## Once useAuth is complete 🚀 
So, useAuth is complete, which means there is a seperate Navbar that allows users to navigate to the components in the <AuthRoute/> element 
- add the ProjectsPage(s) to the AuthRoutes ✅
- add conditional rendering to the DD menu ✅
    - import useAuth and {auth} ✅
    - have the menu items render on {auth} 
        - Login -> Projects, Home -> User Homepage 
    ❗️  *** THE ABOVE IS NOW REDUNDANT *** ❗️
    - Using <b>Bootstrap</b> components is easier at this stage.
        - My custom DD menu doesn't transition 
        - the DD menu also stays when a user makes a selection
    - Shame to have spent so many hours buidling the DD menu, but hey ho!

## Enable row access policies for the database
Write a policy to allow access to rows using email address ✅
    - READ policy accepts 'authenticated'

Hard parts: 
- Enable update auth: Need to include email address 

## Migrate the API and interations to a server 


# Eventually...
- Fix the 'visability' bug relating to the Navbar when a user selects a Link
- remove the GoTrueClient erors
    - only call supabase createClient once to access the data