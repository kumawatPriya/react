import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function IndexApi(){

    const [dataa , setData] = useState([])

   async function IndexData(){
         const response = await fetch("http://localhost:4500/header")
         const indexdata = await response.json()
         setData(indexdata)
    }

    useEffect(()=>{
       IndexData()
    },[])

    return(
        <>
        <h4>Header</h4>
        <ul>
        {
            dataa.map((head)=>{
                return(
                    <>
                    
                        <li>
                            <Link to={head.path}>{head.name}</Link>
                        </li>
                    
                    </>
                )
            })
        }
        </ul>
        </>
    )
}

export { IndexApi }