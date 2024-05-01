import { useEffect, useState } from "react";

const useDetailData = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
        (async()=>{
            const response=await fetch('/estatedata.json');
            const data=await response.json();
            
            //  console.log(data);
            setData(data);
        })()
    },[])
    return {data}
};

export default useDetailData;