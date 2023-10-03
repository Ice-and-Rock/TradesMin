import { useState, useEffect } from "react";

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://iwyynoynwztsnevhxxgt.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml3eXlub3lud3p0c25ldmh4eGd0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU4MDkxNzYsImV4cCI6MjAxMTM4NTE3Nn0.nb2hssHye9NXWYzwszwzj0LgRlSHxXliN2dJYDKi-5A"
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
