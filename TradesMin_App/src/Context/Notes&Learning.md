# This folder + ContextPages + ContextSupabase 

- were created to build AuthProvider context around the app for a funcitonal login system

# Routing
BrowserRouter -> AuthProvider -> App -> Routes -> AuthRoute (setAuth: true = Logged In) ✅ 

Using useAuth()
At the moment the useAuth works when loggin in, however it doesn't allow you to keep the JsonWT and re-direct to the homeLoggedIn page. You can go to the normal hom epage, because it doens't have authProvider wrapped aorund it.
- complete the LogOut function
- conditionally render the login, register and other compoenents in the Navbar
    - IF the 'Auth' is true !
    - {!auth && ( component )} set to show if false 👎 


**useAuth() hook** allows you to wrap a part of the app in context to get variuous properties, instead of handing them down directly as props
- { user } = useAuth()
    - In a component, this will allow you to access the user object or property

## Mistakes - Hell yeah!
- Added async to the { data } onAuthStateChange function for the event and session 
- I didn't add Auth to the Navbar (for conditional rendering)
- I missed a bad import statement for the AuthRoute