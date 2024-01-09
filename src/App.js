import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import {IoSnowOutline } from "react-icons/io5";
import { useState } from "react";

function App() {
  // const [black, setBlack] = useState({});
  // const [white, setWhite] = useState({});
  // function clickHandler() {
  //   if (
  //     black.backgroundColor === "White" &&
  //     black.color === "black" &&
  //     white.backgroundColor === "black" &&
  //     white.color === "white"
  //   ) {
  //     setBlack({ backgroundColor: "black", color: "white" });
  //     setWhite({ backgroundColor: "white", color: "black" });
  //   } else {
  //     setBlack({ backgroundColor: "white", color: "black" });
  //     setWhite({ backgroundColor: "black", color: "white" });
  //   }
  // }
  return (
    <div  className="App ">

      <div className="w-[56px] h-[40px] bg-[#FAFAFA] absolute left-0 top-[60px] rounded-[6px] justify-center  items-center flex shadow-md shadow-[#ededed] hover:cursor-pointer ">
        <IoSnowOutline className="text-[26px] animate-spin hover:animate-none  " />
      </div>
      <NavBar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
