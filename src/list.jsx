// import {React, useState} from "react";
// import { useCart } from "react-use-cart"
// import { Link } from "react-router-dom";
// // import { details } from "./data";
// import image1 from "./images/img1.jpg"
// import image2 from "./images/img2.jpg"
// import image3 from "./images/img3.jpg"
// import image4 from "./images/img4.jpg"
// import image5 from "./images/img5.jpg"
// import * as AiIcons from "react-icons/ai";
// import * as BsIcons from "react-icons/bs";

// function List(){
   
//     const { addItem,totalUniqueItems} = useCart()

//     const [products, setProducts] = useState(
//         [
//             {
//                 id: 1,
//                 head: "New",
//                 img: `${image1}`,
//                 name: "tea",
//                 about: "1K+ bought in past month",
//                 price: "25$"
//             },
//             {
//                 id: 2,
//                 head: "New",
//                 img: `${image2}`,
//                 name: "Tree Levender Mint Cream",
//                 about: "5k+ bought in past month",
               
//                 price: "20$"
//             },
//             {
//                 id: 3,
//                 head: "New",
//                 img: `${image3}`,
//                 name: "Paul Mitchell Clean Sclap Conditioner",
//                 about: "2K+ bought in past month",
               
//                 price: "65$"
//             },
//             {
//                 id: 4,
//                 head: "New",
//                 img: `${image4}`,
//                 name: "Intelligent Nutrients Conditioner",
//                 about: "8K+ bought in past month",
                
//                 price: "36$"
//             },
//             {
//                 id: 5,
//                 head: "New",
//                 img: `${image5}`,
//                 name: "Nutrafol Conditioner",
//                 about: "6K+ bought in past month",
               
//                 price: "44$"
//             },
//         ])

//         const [filteritem, setfilteritem] = useState([...products])

//         const changeitem=(e)=>{
//             const getvalue=e.target.value;
//             const updatevalue = filteritem.filter((items)=>items.name.toLowerCase().startsWith(getvalue))
//             if(getvalue){
//                 setfilteritem(updatevalue)
//             } else{
//                 setfilteritem(products)
//             }
//         }

//     return(
//         <>
//         <div className="search">
//             <input onChange={changeitem} type="text" placeholder="search your items...." />
//         </div>
//         <Link to="/cart">Cart</Link>
//         <h5>{totalUniqueItems}</h5>
//         <h2>You have {products.length} Products. </h2>
//         <div className="products-main">
//         {
//             products.length > 0 ? <>
//             {
//                 filteritem.map((data)=>{
//                     return(
//                         <>
//                         <div key={data.id} className="main">
//                             <p>{data.head}</p>
//                             <img src={data.img} alt="" />
//                         <h4>{data.name}</h4>
//                         <h3>{data.price}</h3>
//                         <p>{data.about}</p>
//                         <p className="item-icon">{data.icon}{data.icon}{data.icon}{data.icon}{data.icon1}</p>
//                         <button onClick={()=>{addItem(data)}}>Add to Cart</button>
//                         </div>
//                         </>
//                     )
//                 })
//             }
//             </> :
//             <>
//               <h1>Loading.....</h1>
//             </>
//         }
//         </div>
//         </>
//     )
// }

// export { List }