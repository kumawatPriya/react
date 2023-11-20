import React from "react";
import { Link } from "react-router-dom"

function Error(props){
    return(
        <>
        <h1 style={props.css}>{props.text}</h1>
        <h2>You have click or enter wrong path<Link to="/home">Go Back</Link></h2>
        </>
    )
}
export {Error}