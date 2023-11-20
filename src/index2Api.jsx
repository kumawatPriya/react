import React, { useEffect, useState } from "react";

function Index2Api(){
    const [indexapi, setIndexapi] = useState([])
    async function Product(){
        const resp = await fetch("http://localhost:4500/products")
        const product1 = await resp.json()
        setIndexapi(product1)
    }

    useEffect(()=>{
        Product()
    },[])

    return(
        <>
        {
            indexapi.map((txt)=>{
                return(
                    <>
                    <div>
                    <img className="fetchimg" src={txt.image} alt="imgs" />
                    <h4>{txt.productName}</h4>
                    <p>{txt.productType}</p>
                    <h4>{txt.category}</h4>
                    <h6>{txt.brandname}</h6>
                    <h5>{txt.price}Rs.</h5>
                    <p>{txt.about}</p>
                    </div>
                    </>
                )
             
            })
        }
        </>
    )
}
export { Index2Api }