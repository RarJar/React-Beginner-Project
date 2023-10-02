import { useState,useEffect } from "react";

function useDataFetch(url){
    let [data,setData] = useState(null);

    let addData = (data) =>{
        setData((prevState) => [data,...prevState]);
    }

    let deleteData = (id) =>{
        setData((prevState) => prevState.filter((data) => data.id !== id))
    }

    useEffect(() => {
        fetch(url)
        .then(res=>res.json())
        .then(json=>{
            setData(json);
        })
    }, [url]);

    return {data,deleteData,addData};
}

export default useDataFetch;