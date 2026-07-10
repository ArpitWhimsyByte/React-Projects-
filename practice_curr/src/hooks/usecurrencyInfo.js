import { useEffect,useState } from "react";

function usecurrencyinfo(fromCurrency){
    const [data,setData]=useState({})
    
    useEffect(()=>{
        async function fetchCurrency(){
            try {
                const url=`https://open.er-api.com/v6/latest/${fromCurrency}`
                const res= await fetch(url)
                const result= await res.json();
                setData(result.rates)
                
            } catch (error) {
                console.log(error)
            }

        }
        fetchCurrency()
    },[fromCurrency])

    return data;
}

export default usecurrencyinfo;