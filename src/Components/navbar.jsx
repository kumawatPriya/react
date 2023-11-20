import React from "react";
import { Link } from "react-router-dom"
import image from "../images/logo-img-removebg-preview.png"
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { useCart } from "react-use-cart"
import { useRef } from "react";

function Navbar() {
    
    const {totalUniqueItems} = useCart()

    

    const navlist = [
        {
            name: "Home",
            url: "/home"
        },
        {
            name: "Contacts",
            url: "/contact"
        },
        {
            name: "About Us",
            url: "/about"
        },
        {
            name: "Products",
            url: "/products"
        },
        {
            name: "Login",
            url: "/"
        },

    ]
    const navicons = [
        {
            icon: <FaShoppingCart />,
            path: "/cart"
        },
        {
            icon: <AiFillHeart />,
            path: "/wishlist"
        },
        {
            icon: <FaUser />,
        },
    ]
    return (
        <>
            <img src={image} alt="" />
            <ul className="nav-list-options">
                {

                    navlist.map((nav) => {
                        return (
                            <>
                                <li className="navbar-list">
                                    <Link to={nav.url}>
                                        {nav.name}
                                    </Link>
                                </li>
                            </>
                        )
                    })
                }
            </ul>
            <ul > 
            <h5 className="cart-items-quantity">{totalUniqueItems}</h5>
         {
            navicons.map((icons)=>{
                return(
                    <> <li className="nav-list-icons">
                     <Link className="nav-icons" to={icons.path}>
                     {icons.icon}
                     </Link> 
                       </li>
                   
                    </>
                )
            })
        }
          </ul>
        </>
    )
}
export { Navbar }