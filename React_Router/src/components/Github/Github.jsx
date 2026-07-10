import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function GitHub(){
    const [data,setData]=useState([])
    useEffect(()=>{
        async function FetchFollowers() {
            try {
                const url=`https://api.github.com/users/ArpitWhimsyByte`
                const res= await fetch(url)
                const result= await res.json();
                setData(result)
            } catch (error) {
                console.error(error)
            }
        }
        FetchFollowers()
    },[])
    return (
        <div className="text-center m-4 bg-gray-600 text-white text-3xl p-4">Github Followers: {data.followers} </div>
    )

}
 export default GitHub