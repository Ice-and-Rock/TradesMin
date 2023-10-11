import { useState, useEffect } from "react";

import { createClient } from '@supabase/supabase-js'


const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabase = createClient(supabaseUrl, supabaseKey)

const useFetch = () => {


  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  console.log("useFetch running 1");

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
     supabase
        .from('projects')
        .select()
        .then(({ data, error }) => {
            if (error) {
                setError(error.message)
                setIsPending(false)
                return
            }
            setData(data)
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
  }, [supabaseUrl, supabaseKey]);

  return { data, isPending, error };
};

export default useFetch;
