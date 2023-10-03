import { useState,useEffect } from "react";

function useDataFetch(url){
    let [data,setData] = useState(null);
    let [loading,setLoading] = useState(false);

    let addData = (data) =>{
        // add data to server side
        fetch('http://localhost:3001/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        // add data to client 
        setData((prevState) => [...prevState,data]);
    }

    let deleteData = (id) =>{
        setData((prevState) => prevState.filter((data) => data.id !== id))
    }

    useEffect(() => {
        setLoading(true);

        console.log('lol');

        let abortController = new AbortController();
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