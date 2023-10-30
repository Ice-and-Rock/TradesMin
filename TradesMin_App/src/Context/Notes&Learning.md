# This folder + ContextPages + ContextSupabase 

- were created to build AuthProvider context around the app for a funcitonal login system

# Routing
BrowserRouter -> AuthProvider -> App -> Routes -> AuthRoute (setAuth: true = Logged In) ✅ 

Using useAuth()
At the moment the useAuth works when loggin in, however it doesn't allow you to keep the JsonWT and re-direct to the homeLoggedIn page. You can go to the normal hom epage, because it doens't have authProvider wrapped aorund it.