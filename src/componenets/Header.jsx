// import React from 'react'
import { useContext, useEffect, useState } from "react";
import logo from "./../assets/Images/logo.png";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { HiMoon } from "react-icons/hi2";
import { HiMiniSun } from "react-icons/hi2";
import { ThemeContext } from "../Context/ThemeContext";

function Header() {
  const [toggle, setToggle] = useState(true);
  const {theme, setTheme} = useContext(ThemeContext)

  useEffect( ()=> {
    console.log("Theme", theme);
  })
  return (
    <div className="flex items-center p-4">
      <img src={logo} width={70} height={70} />
      <div className="flex bg-slate-200 p-2 w-full items-center mx-4 rounded-full">
        <HiOutlineMagnifyingGlass />
        <input
          type="text"
          placeholder="Search Games"
          className="bg-transparent outline-none px-2"
        />
      </div>
      <div>
        {theme== 'light' ? (
          <HiMoon
            onClick={() => {setTheme('dark'); localStorage.setItem('theme', 'dark')}}
            className="text-[37px] bg-slate-200 text-black rounded-full p-2 cursor-pointer"
          />
        ) : (
          <HiMiniSun
            onClick={() => {setTheme('light'); localStorage.setItem('theme', 'light')}}
            className="text-[37px] bg-slate-200 text-black rounded-full p-2 cursor-pointer"
          />
        )}
      </div>
    </div>
  );
}

export default Header;
