import React from "react";
import { useState,useEffect } from "react";
import { Navbar } from "../navbar";
import { useLocation } from "react-router-dom";


function Products(){
  
    const [api, setApi] = useState([])

    const [filterr, setFilter] = useState([])
    const [search, setSearch] = useState([])
    
    
    
    async function Data(){
        const response = await fetch("https://fakestoreapi.com/products")
        const getdata =  await response.json()
        setFilter(getdata)
        setApi(getdata);
        setSearch(getdata)
        console.log(response)
        console.log(getdata)
    }
    const Searchitems = (e)=>{
        const getitem = e.target.value;
        const updateitems = api.filter((items)=>items.title.toLowerCase().startsWith(getitem))
    
    if(getitem){
        setSearch(updateitems)
    }
    else{
        setSearch(filterr)
    }
}
    function Allproducts(){
        setFilter(api)
    }

    function Filteritems(){
        const getprice = api.filter(data=>data.price<100)
        setFilter(getprice)
 }
    function Rating(){
        const toprating = api.filter(data=>data.rating.rate>3)
        setFilter(toprating)
    }
    function MenCategory(r){
        const fetchmenProducts = api.filter(data=>data.category === r)
        setFilter(fetchmenProducts)
    }
    function WomensCategory(){
        const fetchmenProducts = api.filter(womenproducts=>womenproducts.category==="women's clothing")
        setFilter(fetchmenProducts)
    }

    useEffect(()=>{
        Data();
    },[])
    
    return(
        <>
        
        <div className="navbar">
        <Navbar/>
        </div>
        
        <div className="searchbox">
        <input type="search"  placeholder="Search Products Here"  />
        </div>

         <div className="sorted-btn">
        <p>Sort Products By -</p>
        <div className="fetch-btn">
        <button onClick={Allproducts}>All Products</button>
        <button onClick={()=>{Filteritems()}}>
        Products below 100Rs.</button>
        <button onClick={()=>{MenCategory("men's clothing")}}>Men's Category</button>
        <button onClick={WomensCategory}>Women's Clothing</button>
        <button onClick={Rating}>Top Rated</button></div>
        </div>

        
        <h4 className="products-length"> Products Count - {filterr.length} </h4>
        <div className="products-content">
        {
            
            filterr.map((products)=>{
                return(
                    <>
                    <div  className="products-fetched">

                    <img className="fetched-img" src={products.image} alt="" />
                    <div className="fetched-products-content">
                    <h4>{products.title}</h4>
                    {/* <h6>{products.description}</h6> */}
                    <p>{products.category}</p>
                    <p>${products.price}</p>
                    <p>Rating: {products.rating.rate}</p></div>

                    </div>

                    </>
                )
            })
        }
        </div>
        </>
    )
}

export { Products }