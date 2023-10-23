import { useState, useEffect } from 'react'
import { supabase } from './supabaseClient'
import Auth from './Auth.jsx'
import Account from './Account.jsx'

const LoginHome = () => {

    const [session, setSession] = useState(null)
    
      useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
          setSession(session)
        })

        supabase.auth.onAuthStateChange((_event, session) => {
         setSession(session)
        })
     }, [])
    
    return (
  
       <div className="container">
      {!session ? <Auth /> : <Account key={session.user.id} session={session} />}
    </div>
    
  )
};

export default LoginHome
