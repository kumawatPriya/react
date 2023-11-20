import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import {Login} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const navi = useNavigate();

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };



  const [email, setEmail] = useState("");

  

  const login = (e) => {
    e.preventDefault();
    
      setTimeout(() => {
        navi("/home",{state:{email:email}});
      }, 2000);
    
  };
  
  const [show, setShow] = useState(false)

  const handlePassword = ()=>{
    setShow(!show)
  }
  // const login=()=>{
  //     toast.success("Id has been successfully login....")
  // }

  return (
    <>
      <ToastContainer position="top-right" />

      <input onChange={changeEmail} type="email" placeholder="Enter E-mail" /><br />
      <input className="form-password" type={show?"text":"password"} placeholder="Enter Password"  /><br />
      <button onClick={handlePassword} className="eye-btn">{show ?<i class="fa-solid fa-eye"></i>:<i class="fa-solid fa-eye-slash"></i>}</button>
      <button onClick={login}>Login</button>
    </>
  );
}
export { Login };
