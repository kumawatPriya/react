import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function State(){
    const [click, setClick] = useState(1)
    const [price, setPrice] = useState(50)
      
    const increase = ()=>{
        if(click=== 10){
            
            toast.warn("You have reached your maximum limit....")
        }
        else{
            setClick(click+1)
            setPrice(price + 50)
        }
    }

    
    const decrease = ()=>{
        if(click===0){
            return 0 /
            toast("Your cart is empty....")
        }
        else{
            setClick(click-1)
        }
    }
    // const increase = ()=>{
    //     if(price===50 ){
            
    //         setPrice(price * 2 )
    //     }
    //     else{
           
    //         setPrice(price*2)
            
    //     }
    // }

    
    // const decrease = ()=>{
    //     if(price===50){
    //         return 50
    //     }
    //     else{
           
    //         setPrice(price / 2)
    //     }
    // }
    return(
        <>
        <ToastContainer position="top-right"/>
        <ToastContainer position="top-right"/>
        <h1>{click}</h1>
        <p >{price}</p>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>

        </>
    )
}
export {State}