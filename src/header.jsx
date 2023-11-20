import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaHome } from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as BiIcons from "react-icons/bi";

function Header() {
  const [menu, setmenu] = useState(false);

  const changemenu = () => {
    setmenu(true);
  };

  const changemenu2 = () => {
    setmenu(false);
  };
  console.log(menu);
  const listdata = [
    {
      icon: <FaHome />,
      text: "Home",
      url: "/home",
      // color: "rgb(199 203 255)",
      cName: "nav-text",
      
    },
    {
      icon: <IoIcons.IoMdContacts />,
      text: "About",
      url: "/about",
      // color: "rgb(199 203 255)",
      cName: "nav-text",

    },
    {
      icon: <IoIcons.IoMdContacts />,
      text: "Contact",
      url: "/contact",
      // color: "rgb(199 203 255)",
      
      cName: "nav-text",
    },
    {
      icon: <BiIcons.BiLogInCircle />,
      text: "Login",
      url: "/",
      // color: "rgb(199 203 255)",
      cName: "nav-text",
      
    },
  ];

  return (
    <>
      <FaBars
        className={`${menu === true ? "Hide" : "Show"}`}
        onClick={changemenu}
      />
      <AiIcons.AiOutlineClose
        className={`${menu === false ? "HideBtn" : "ShowBtn"}`}
        onClick={changemenu2}
      />

      <div className={`${menu === true ? "open" : "close"}`}>
        <ul>
          {
          listdata.map((item) => {
            return (
              <>
                <li className={item.cName}>
                  <Link
                    // style={{backgroundColor: `${item.color}` }}
                    
                    to={item.url}>
                    {item.icon}
                    <span>{item.text}</span>
                  </Link>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
}
export { Header };
