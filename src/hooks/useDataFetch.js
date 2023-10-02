import { useState,useEffect } from "react";

function useDataFetch(url){
    let [data,setData] = useState(null);
    let [loading,setLoading] = useState(false);

    let addData = (data) =>{
        setData((prevState) => [data,...prevState]);
    }

    let deleteData = (id) =>{
        setData((prevState) => prevState.filter((data) => data.id !== id))
    }

    useEffect(() => {
        setLoading(true);

        let abortController = AbortController();
        let signal = abortController.signal;

        fetch(url ,{signal})
        .then(res=>res.json())
        .then(json=>{
            setData(json);
            setLoading(false);
        })

        // Cleanup Function
        return () => {
            abortController.abort();
        }
    }, [url]);

    return {data,deleteData,addData,loading};
}

export default useDataFetch;