import {React, useState } from "react";
import { useCart } from "react-use-cart"
import { Link } from "react-router-dom";
import image1 from "../images/img1.jpg"
import image2 from "../images/img2.jpg"
import image3 from "../images/img3.jpg"
import image4 from "../images/img4.jpg"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiFillHeart } from "react-icons/ai";
import { FaSearchengin } from "react-icons/fa";
import { Wishlist } from "./wishlisticon";
import { AiOutlineSearch } from "react-icons/ai";
import { products } from "./Productdata";

   

function Productslist(){

    const {addItem,inCart } = useCart()

    // const [msg, setMsg] = useState(addItem)

    
    //     if(addItem===true){
    //         setMsg( toast.success("Your Product has been added to Cart...."))
    //     }
    
    // }
     
    
        
    

    const [products, setProducts] = useState(
     [
        {
            id: "1",
            head: "New",
            img: `${image1}`,
            name: "Tree Levender Mint Cream",
            type: "Conditioner",
            benefits: "Skin Moisturizing Soothing Calming Formula, Helps Reduce Acne & All Skin Types",
            about: "6K+ bought in past month",
            price: 2200,
            InStock: 4
        },
        {
            id: "2",
            head: "New",
            img: `${image2}`,
            name: "Tree Levender Mint Cream",
            type: "Shampoo",
            benefits: "Paraben free,Intensely hydrates dry hair, For Dry Hair, All hair types",
            about: "2K+ bought in past month",
            price: 2500,
            InStock: 8
        },
        {
            id: "3",
            head: "New",
            img: `${image3}`,
            name: "Paul Mitchell Hiar Serum",
            type: "Hair Serum",
            benefits: "Color Safe. Vegan. Sulfate-Free (without SLS, SLES, ALS). Paraben Free.",
            about: "5K+ bought in past month",
            price: 1800,
            InStock: 10
        },
        {
            id: "4",
            head: "New",
            img: `${image4}`,
            name: "Intelligent Nutrients Conditioner",
            type: "Conditioner",
            benefits: "Moisturizing Hair Treatment , Sulfate, Silicone & Paraben Free, 99% Natural Ingredients",
            about: "2K+ bought in past month",
            price: 2000,
            InStock: 4
        },
        
    ])
 
    const [filteritem, setfilteritem] = useState([...products])

    const changeitem =(e)=>{
       const getproduct = e.target.value;
       const updateproduct = filteritem.filter((items)=>items.name.toLowerCase().startsWith(getproduct))
    
    if(getproduct){
        setfilteritem(updateproduct)
    }
    else{
        setfilteritem(products)
    }
}

function Popup(){
    toast.success("product Added...")
}

const [iconcolor, setIconcolor] = useState(false)
 
const handleIcon = ()=>{
    setIconcolor(true);
}
const ChangeColor = ()=>{
    setIconcolor(false)
}

const fetchAllproducts = ()=>{
   setfilteritem(products)
}
function fetchbyprice(){
    const getprice = products.filter(data=>data.price<2000)
    setfilteritem(getprice)
}
const fetchbyCategory = ()=>{
    const category = products.filter(data=>data.type === "Conditioner")
    setfilteritem(category)
}
return(
        <>
               <ToastContainer position="top-center" />
               <div className="search-main">
       <span className="search-bar">  <input className="search-input" onChange={changeitem} type="text" placeholder="Search here"  />
       <FaSearchengin className="icon"/>
       </span>    
       </div>

        <div className="fetchbtns">
       <button onClick={fetchAllproducts}>All Products</button>
       <button onClick={fetchbyprice}>Below 2000</button>
       <button onClick={fetchbyCategory}>Conditioner</button>
       </div>

          <div className="products-main">
        {
            filteritem.map((data)=>{
                return(
                    <>
                    <div className="main">
                     <p className="main-head">{data.head}</p>
                   <Link to={`details/${data.id}`}>
                        <img src={data.img} alt="" />  </Link>
                        <h4>{data.name}</h4>
                        <p>{data.type}</p>
                        <h6>{data.benefits}</h6>
                        <h3>Rs.{data.price}</h3>
                        <p>{data.about}</p>
                        <p>{data.InStock}</p>
                        <div className="wish-list">
                        <button className="cart-btn"  onClick={()=>{addItem(data);Popup()}}>
                        <Link to={(inCart(data.id)? "/cart" :"/home")}> {inCart(data.id)? "Go to Cart✅" :"Add to cart"}</Link>
                        </button>
                        <Wishlist/>
                       <AiFillHeart className={`${iconcolor === true ? "icon-hide" : "icon-show"}`} onClick={handleIcon}/>
                       {/* <AiFillHeart className={`${iconcolor === false ? "icon2-hide" : "icon2-show"}`} onClick={ChangeColor}/> */}

                        </div>

                    </div>
                  
                    </>
                )
            })
        }
        </div>
        </>
    )
}

export { Productslist}