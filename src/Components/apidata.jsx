import React, { useEffect, useState } from "react";

 function ApiData(){

    const [api, setApi] = useState([])

    async function Data(){
                const response = await fetch("http://localhost:4400/api")
                const data =  await response.json()
                setApi(data);
    }
    useEffect(()=>{
                Data();
            },[])
    return(
        <>
        <h1>Hey</h1>
        {
            api.map((product)=>{
                return(
                    <>
                    <h1>{product.name}</h1>
                    </>
                )
            })
        }
        </>
    )
}

export {ApiData}