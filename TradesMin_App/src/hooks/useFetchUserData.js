import { useState, useEffect } from "react";
import { supabase } from '../ContextSupabase/Client.jsx'

const useFetchUserData = () => {

  const [userData, setUserData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  console.log("useFetchProjectData running 1");

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
     supabase
        .from('users')
        .select(users)
        .then(({ data, error }) => {
            if (error) {
                setError(error.message)
                setIsPending(false)
                return
            }
            setUserData(data)
            setIsPending(false)
            setError(null)
        })
        .catch((err) => {
            if (err.name === 'abortError') {
                console.log('fetch aborted - something went wrong!')
            } else {
                setIsPending(false)
                setError(err.message)
                console.error('Error:', err.message)
            }
        })
    }, 500);

    return () => abortCont.abort();
  }, []);

  return { userData, isPending, error };
};

export default useFetchUserData;
