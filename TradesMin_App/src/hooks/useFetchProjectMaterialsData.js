import { useState, useEffect } from "react";
import { supabase } from "../ContextSupabase/Client.jsx";

// Notes 
// This hook retrieves the project_materials table using projectId as props ✅
// using Supabase nested queries, it also returns materials with  

const useFetchProjectMaterialsData = ( projectId ) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

//   console.log("useFetchProjectMaterialData running 1", projectId);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      supabase
        .from('project_materials')
        .select(`
        project_id,
    material_id,
    quantity,
    notes,
    materials: materials(*) 
        `)
        .eq('project_id', projectId)
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
  }, [projectId]);

  return { data, isPending, error };
};

export default useFetchProjectMaterialsData; 
