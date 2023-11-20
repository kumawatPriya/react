// import React from "react";
// import { useState,useEffect } from "react";

// function Fetchapi(){
  
//     const [api, setApi] = useState([])
    
//     async function Data(){
//         const response = await fetch("https://fakestoreapi.com/products")
//         const getdata =  await response.json()
//         setApi(getdata);
//         console.log(response)
//         console.log(getdata)
//     }
//     useEffect(()=>{
//         Data();
//     },[])
//     return(
//         <>
//         <h1>This is Api</h1>
//         <h4>You have {api.length} products. </h4>
//         {
//             api.map((products)=>{
//                 return(
//                     <>
//                     <h4>{products.title}</h4>
//                     <p>{products.price}</p>
//                     </>
//                 )
//             })
//         }
//         </>
//     )
// }

// export { Fetchapi }