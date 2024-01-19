import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../ContextSupabase/Client";

// Create context then reassign it so that useAuth hook invokes the new authContext
const AuthContext = createContext({});
export const useAuth = () => useContext(AuthContext);

const login = (email, password) =>
  supabase.auth.signInWithPassword({ email, password });

const signOut = () => supabase.auth.signOut();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [auth, setAuth] = useState(false);

  // console.log("AuthProvider running")

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === "SIGNED_IN") {
        setUser(session.user);
        setAuth(true);
      } else if (event === "SIGNED_OUT") {
        setUser(null);
        setAuth(false);
      }
    });
    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

  // Check if there is a user + print email
  console.log("AuthProvider auth State:", auth)
  // if (user) {
  //   console.log("User:", user.email,
  //   "User status:", user.role )
  // }

  return (
    <AuthContext.Provider value={{ auth, user, login, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;