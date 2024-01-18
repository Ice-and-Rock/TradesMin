import { useState, useEffect } from "react";
import { supabase } from "../ContextSupabase/Client.jsx";

// Notes

const useFetchCompanysUsersData = ( userId ) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

//   console.log("useFetchCompanyData running 1");

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      supabase
        .from("companys_users")
        .select('*')
        .eq("auth_user_id", userId)
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
  }, [userId]);

  return { data, isPending, error };
};

export default useFetchCompanysUsersData;
