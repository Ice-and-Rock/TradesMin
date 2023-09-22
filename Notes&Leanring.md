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
## Store the data in a .json file rather than a .js file => Local NPX JSON-server
# Components:
ProjectsPage - useFetch - ProjectList - ProjectDetails(Edit/Delete)
ProjectsPage - CreateProject 
# Write a ProjectsPage component
call useFetch
render ProjectList
# Write a useFetch component to retreive the data
States:
- projectData
- pending
- error
# Write a ProjectsList component to render the list
props: fetchedProjects
# Write a ProjectDetails component to render a specific project
- Must include Update/delete
# Write a create component to add data to the data.json file
# 