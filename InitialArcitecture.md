# Initial folder arcitecture

## Src_
### Database_
includes CRUD elements to directly interact with the database using mySQL
- linked to AWS free account (initially)

### API_
includes the fetch requests from the React components in the front end
- handles requests from the components
- performs necessary operations using the database layer
- returns data to the components

### React components_
*Should not have direct access to the Database elecements for security*
Includes the different components of the front end to render the data fetched in the app
- examples include ```inventoryList.tsx``` and ```userList.tsx``` 


