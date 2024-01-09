import React, { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { IoCloseOutline } from "react-icons/io5";

function NavBar() {
  const [change, setChange] = useState();
  function clickHandler() {
    setChange(!change);
  }
  return (
    <div className="px-[20px] ">
      <LuMenu className="sm:hidden block  text-[24px] ml-[5px] mt-[5px] hover:cursor-pointer " onClick={clickHandler} />
      {change && (
        <div className="bg-slate-300 w-screen h-screen absolute top-0 left-0">
          <IoCloseOutline className="text-[24px] float-right m-[5px] hover:cursor-pointer" onClick={clickHandler} />
          <div className="flex gap-[25px] font-[500] text-[#2a2a2a] text-center flex-col pt-[40px] ">
            {nav.map((Home) => (
              <div>{Home.name}</div>
            ))}
          </div>
        </div>
      )}

      <div className="sm:flex gap-[40px]  font-[500] text-[#2a2a2a] mt-[30px] items-center justify-center sm:block hidden ">
        {nav.map((Home) => (
          <div className="hover:text-Secondary hover:cursor-pointer">{Home.name}</div>
        ))}
      </div>

    </div>
  );
}

export default NavBar;

const nav = [
  {
    name: "Home",
  },
  {
    name: "About",
  },
  {
    name: "Skill",
  },
  {
    name: "Experience",
  },
  {
    name: "Portfolio",
  },
  {
    name: "Contact",
  },
];
