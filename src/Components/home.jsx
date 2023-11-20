import React from "react";

// import { Error } from "./error";
// import { List } from "../list";
// import { State } from "../Cart";
// import { Cards } from "../cards";
// import { Blocks } from "../cardslist";
// import pic from "../pexels-photo-3225528.jpeg"
// import image from "../pexels-photo-1296204.jpeg"
import { Navbar } from "./navbar";
// import { Form } from "./table";
// import  Table  from "../tablecomponents/table";
// import Search from "../Search";
import { Slider } from "./slider";
import { Productslist } from "./productslist";
// import { Fetchapi } from "./Fetchapi";
// import { useLocation } from "react-router-dom";
// import { UseReference } from "./reference";
// import { UseRefe } from "./useref";
import { Items } from "./Items";
// import { CountDown } from "./countDown";
import { Tab } from "./Class";
import { CLass } from "./class1";
import { MeMo } from "./UseMemo";
import PropDRilling from "./Propss/PropDRilling";
import { UseContexT } from "./Propss/useConText";
import { Parent } from "./uSEContext/Parent";
// import { Items } from "./Items";
import { ApiData } from "./apidata";
import { IndexApi } from "../index1Api";
import { Index2Api } from "../index2Api";
import { Header } from "../header";



function Home(){


    // const data=useLocation()
    // console.log(data)
    return(
        <>
      {/* <p>{data.state.email}</p> */}
        {/* <div className="home-search-bar">
           <div className="search-bar-container">
           <Search/>
           <div>Search Results</div>
           </div>
        </div> */}
        {/* <div className="navbar">
        <Navbar/>
        
        </div> */}
        {/* <ApiData/> */}


        {/* <List/> */}
         {/* <Slider/> */}
         {/* <Productslist/> */}
         {/* <Items/>  */}
         {/* <UseRefe/> */}
         {/* <UseReference/> */}
        {/* <CountDown/> */}
        {/* <Tab/> */}
        {/* <CLass/> */}
        {/* <Error text="This is error page...." css={{color:"red"}}/> */}
        {/* <Error text="This is error page...." css={{color:"blue"}}/> */}
        {/* <PropDRilling/> */}
        {/* <UseContexT/> */}
        {/* <State/> */}
        {/* <div className="main">
             <Cards heading="Cliff-Side Village" picture={pic}/>
             <Cards heading="Cliff-Side Village" picture={image}/>
             <Cards heading="Cliff-Side Village" picture={pic}/>
       </div>

       <div className="block">
       <Blocks/>
       </div> */}
       {/* <Form/> */}
       {/* <Table/> */}
       {/* <Fetchapi/> */}
       {/* <Items/> */}
       {/* <MeMo/> */}
       {/* <Parent/> */}
       {/* <Header/> */}
       <div className="index-header">
       <IndexApi/>
       </div>
       <div className="index-cards">
       <Index2Api/></div>
        </>
    )
}
export {Home}