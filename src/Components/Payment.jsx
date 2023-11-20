import React, { useState } from "react";
import { QRCode } from 'react-qrcode-logo';
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart"


function Payment(){

    const {cartTotal} = useCart()
    const [money, setMoney] = useState(cartTotal)

    if(cartTotal>20000){
     return(
        <>
        <p>Your payment is cancelled</p>
       <h3>Your Total price is {cartTotal}</h3>
       <Link to="/cart">Check</Link>
        </>
     )
    }

    return(
        <>
    <h1>Scan qr code for secure payment</h1>   
    <QRCode value={`upi://pay?pa=9588972689@axl&pn=Intellemo&tn=cftrhwetaw4gta&am=${money}`}/>
    <Link to="/home">Home</Link>
   
        </>
    )
}

export { Payment }