import React, { useState } from "react";
import { AiFillHeart } from "react-icons/ai";

function Wishlist() {
    const [iconcolor, setIconcolor] = useState(false)

    const handleIcon = () => {
        setIconcolor(true);
    }
    const ChangeColor = () => {
        setIconcolor(false)
    }
    return(
        <>
           <AiFillHeart className={`${iconcolor === true ? "icon-hide" : "icon-show"}`} onClick={handleIcon} />
            <AiFillHeart className={`${iconcolor === false ? "icon2-hide" : "icon2-show"}`} onClick={ChangeColor} />
        </>
    )
}

export { Wishlist }