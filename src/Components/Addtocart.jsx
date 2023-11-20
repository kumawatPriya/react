import React from "react";
import { Link } from "react-router-dom"
import { useCart } from "react-use-cart"
import { CartImage } from "./CartImages";


// import { Productslist } from "./productslist";

function Addtocart(){
    const {items,removeItem,isEmpty,updateItemQuantity,emptyCart,cartTotal} = useCart()

   
    if(isEmpty){
        return(
            <>
            <p>Your Cart is Empty</p>
            <Link to="/home">Home</Link>

            </>
        )
    }
    return(
        <>
       <div className="main-cart">


       {/* <Link >Payment</Link> */}
        <h1>Totat Rs. : {cartTotal}</h1>
        

        {
            
            items.map((cartitems)=>{
                
                {
                    
                    if(cartitems.quantity>cartitems.InStock){
                        return(
                            <>
                            <div className="cart-box">
                            <div className="cart-box-image">
                            <img src={cartitems.img} alt="" />
                            </div>
                            <div className="cart-box-data">
                            <h2>{cartitems.name}</h2>
                            <p>{cartitems.benefits}</p>
                            <p>{cartitems.type}</p>
                            <h4>Rs. - {cartitems.price}</h4>
                           
                           <button className="cart-box-delete-icon" onClick={()=>{removeItem(cartitems.id)}}> <i class="fa-regular fa-trash-can"></i></button>
                            </div>
                            <p className="inCart-stock" >---------------------Out of Stock----------------------</p>
                           </div>
                            </>
                        )
                    }
                }
                
            
                return(
                    <>
                    <div className="cart-in" key={cartitems.id}>
                        <div>
                        <img src={cartitems.img} alt="" />
                        </div>
                        <div>
                      <h1>{cartitems.name}</h1>
                      <h5>{cartitems.benefits}</h5>
                      <p>Rs - {cartitems.price}</p>
                     {/* Products <br /> */}
                      <button className="decrease-btn" onClick={()=> updateItemQuantity(cartitems.id, cartitems.quantity-1)}>-</button>
                      {cartitems.quantity}
                      <button className="increase-btn" onClick={()=> updateItemQuantity(cartitems.id, cartitems.quantity+1)}>+</button>
                      <button className="remove-btn" onClick={()=>{removeItem(cartitems.id)}}>Remove</button>
                      </div>
                    </div>
                    </>
                )
            })
        }
        <div className="cart-delete-btn">
        <button className="dlt-btn" onClick={()=>{emptyCart()}}>Delete All</button>        </div>
        
          <div className="checkout-link">
        <Link  to="/checkout">Click Here for Furthur Process</Link></div>
       </div>
        </>
    )
}

export { Addtocart}