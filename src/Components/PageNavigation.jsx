import React, { useState } from "react";
// import { itemdata } from "./ItemsData";
import { products } from "./Productdata";
import { useParams } from "react-router-dom";
import image1 from "../images/img11.jpg"
import image2 from "../images/img12.jpg"
import image3 from "../images/img13.jpg"
import image4 from "../images/img14.jpg"

function PageNavigation() {

    const images = [
        {
            
            img1: `${image1}`,
        },
        {
            img1: `${image2}`,
        },
        {
            img1: `${image3}`,
        },
        {
            img1: `${image4}`,
        },

    ]

    const { itemsss } = useParams()
    // console.log(detailsId)

    const productsdataa = products.find(item => item.id === itemsss)
    return (
        <>
            <div className="details-main">
                <div className="details-imgs">
                    <div className="img-hover" >{
                        images.map((imgs) => {
                            return (
                                <> 
                                    <img className="details-img-dynamic" src={imgs.img1} alt="" />
                                </>
                            )
                        })
                    }

                    </div>
                    <div>
                        <img src={productsdataa.img} alt="" />
                    </div>
                </div>
                <div>
                    <h4>{productsdataa.name}</h4>
                    <p>{productsdataa.type}</p></div>
            </div>
        </>
    )
}

export {PageNavigation }