import React from "react";
import {Link} from "react-router-dom";

function About(){
    return(
        <>
        <h1>Hey,Welcome to the page....</h1>
        <Link to="/home">Back</Link>
        </>
    )
}
export{About}