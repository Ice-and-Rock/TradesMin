import { useState, useEffect } from "react";
import { supabase } from "../ContextSupabase/Client.jsx";

// Notes

const useFetchCompanyData = ( companyId ) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

//   console.log("useFetchCompanyData running 1");

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      supabase
        .from("companys")
        .select("*")
        .eq("id", companyId)
        .then(({ data, error }) => {
          if (error) {
            setError(error.message);
            setIsPending(false);
            return;
          }
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "abortError") {
            console.log("fetch aborted - something went wrong!");
          } else {
            setIsPending(false);
            setError(err.message);
            console.error("Error:", err.message);
          }
        }); 
    }, 500);

    return () => abortCont.abort();
  }, [companyId]);

  return { data, isPending, error };
};

export default useFetchCompanyData;