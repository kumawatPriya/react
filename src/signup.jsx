import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup(){
    // const signup = ()=>{
    //     toast.success("You have been sign-up successfully.....")
    // }

    const location = useNavigate();

const [email, setEmail] = useState("")

   const changeemail = (p)=>{
    setEmail(p.target.value)
   }

    const signup = (p)=>{
        p.preventDefault();
        if(email === "priya@gmail.com"){
            toast.success("Your i'd has been successfully login....");
           setTimeout(()=>{
             location("/home",{state:{email:email}})
           }, 2000)
            
        }
        else{
            toast.error("Please enter a valid email....")
        }
    }

    


    return(
        <>

            <ToastContainer position="top-right"/>
            <input onChange={changeemail} type="email" placeholder="Enter Your Email" />
            <button onClick={signup}>Sign-Up</button>
        
        </>
    )
}
export{ Signup }