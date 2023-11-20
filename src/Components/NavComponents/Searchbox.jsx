// import React from "react";
// import { useState,useEffect } from "react";

// function Searchbox(){
    

//     async function Search(){
//         const response = await fetch("https://fakestoreapi.com/products")
//         const getdata =  await response.json()
//         setSearch(getdata)
//     }

//     const Searchitems = (e)=>{
//         const getitem = e.target.value;
//         const updateitems = search.filter((items)=>items.title.toLowerCase().startsWith(getitem))
    
//     if(getitem){
//         setSearch(updateitems)
//     }
//     else{
//         setSearch(filterr)
//     }
// }
//     return(
//         <>
//         <input type="search" name="search" placeholder="Search Products Here" onChange={Searchitems} />


//         </>
//     )
// }

// export { Searchbox }