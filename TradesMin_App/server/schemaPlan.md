### SERVER
Create database schema
Set up nodeJS server
    - install express
define API Routes 
    - this handles CRUD operations
Write SQL queries
    - includes: select, insert, update and delete
API Controllers
    - 
Connect Front end - back end
    - using existing ```fetch``` requests


## Schema Plan

- id is the primary key for identifying each project.
- project_name is the name of the project and is required (NOT NULL).
- body is a textual description of the project.
- author is the author's name.
- materials is an array of JSONB objects that store the materials for each project. JSONB is a binary JSON format that allows you to store structured data.