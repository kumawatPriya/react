import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";

// import {Login} from "./login";
import { Home } from "./Components/home";
import { About } from "./about";
import { Error } from "./error";
import { Contact } from "./contacts";
// import { Signup } from "./signup";
import { CartProvider } from "react-use-cart";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Checkout } from "./Components/checkout";
import { Addtocart } from "./Components/Addtocart";
import { Payment } from "./Components/Payment";
import { Wishlist } from "./Components/Wishlist";
import { Products } from "./Components/NavComponents/Products";
import { Login } from "./login";
// import { ProductDetails } from "./Components/productDetails";
// import { CountDown } from "./Components/countDown";
import { PageNavigation } from "./Components/PageNavigation";
// import { Items } from "./Components/Items";
import { ProductDetails } from "./Components/productDetails";
import { Items } from "./Components/Items";

function App(){
  

  
  return( 
    <>
    <CartProvider>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Login/>}/>
    <Route excat path="/home" element={<Home/>}/>
    <Route excat path="/about" element={<About/>}/>
    <Route excat path="/contact" element={<Contact/>}/>
    <Route excat path="/error" element={<Error/>}/>
    <Route path="/cart" element={<Addtocart/>}/>
    <Route path="/payment" element={<Payment/>}/>
    <Route path="/wishlist" element={<Wishlist/>}/>
    <Route path="/checkout" element={<Checkout/>}/>
    <Route path="/products" element={<Products/>}/>
    <Route path="/home/details/:itemsss" element={<ProductDetails/>}/>
    </Routes>
   </BrowserRouter>
   </CartProvider>
   </>
  )
  }
export {App}
