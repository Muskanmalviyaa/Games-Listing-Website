// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//    <div className='app'>

//    </div>

//     </>
//   )
// }

// export default App
// import { useState } from 'react';
import "./App.css";
import Home from "./pages/Home";
import Header from "./componenets/Header"; // Corrected path
import { useEffect, useState } from "react";
import { ThemeContext } from "./Context/ThemeContext";

function App() {
  const [theme, setTheme] = useState("light");
  useEffect( ()=> {
    setTheme(localStorage.getItem('theme') ? localStorage.getItem('theme') : ('dark'))
  }, [])

  const containerClasses = `${theme} ${theme === "dark" ? "bg-[#121212]" : null } min-h-[100vh]`;

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className={containerClasses}>
        <Header />
        <Home />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

