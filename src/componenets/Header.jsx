import React, { useContext, useState } from "react";
import logo from "./../assets/Images/logo.png";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { HiMoon, HiMiniSun, HiMiniBars3 } from "react-icons/hi2";
import { ThemeContext } from "../Context/ThemeContext";
import GenreList from "./GenreList";

function Header() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [isGenreListVisible, setIsGenreListVisible] = useState(false);

  const toggleGenreList = () => {
    setIsGenreListVisible(!isGenreListVisible);
  };

  return (
    <div className="relative flex items-center p-4 space-x-4">
      {/* Logo */}
      <img src={logo} width={50} height={50} className="shrink-0" />

      {/* Search Bar */}
      <div className="flex bg-slate-200 p-2 flex-grow items-center rounded-full min-w-0">
        <HiOutlineMagnifyingGlass className="shrink-0" />
        <input
          type="text"
          placeholder="Search Games"
          className="bg-transparent outline-none px-2 w-full truncate"
        />
      </div>

      {/* Theme Toggle and Menu */}
      <div className="flex items-center space-x-4 shrink-0">
        {theme === "light" ? (
          <HiMoon
            onClick={() => {
              setTheme("dark");
              localStorage.setItem("theme", "dark");
            }}
            className="text-[30px] bg-slate-200 text-black rounded-full p-1 cursor-pointer shrink-0"
          />
        ) : (
          <HiMiniSun
            onClick={() => {
              setTheme("light");
              localStorage.setItem("theme", "light");
            }}
            className="text-[30px] bg-slate-200 text-black rounded-full p-1 cursor-pointer shrink-0"
          />
        )}

        {/* Mobile Menu Icon */}
        <HiMiniBars3
          onClick={toggleGenreList}
          className="text-[30px] bg-slate-200 text-black rounded-full p-1 cursor-pointer lg:hidden md:hidden sm:block"
        />
      </div>

      {/* Genre List Popup */}
      <div
        className={`absolute top-14 left-0 w-full bg-black shadow-md rounded-lg p-4 z-50 transition-all duration-300 ease-in-out transform ${
          isGenreListVisible ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {isGenreListVisible && (
          <GenreList
            genreId={(id) => console.log(`Selected Genre ID: ${id}`)}
            selectedGenresName={(name) => console.log(`Selected Genre Name: ${name}`)}
          />
        )}
      </div>
    </div>
  );
}

export default Header;
