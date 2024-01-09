import React from "react";
import { FaArrowDown } from "react-icons/fa";

function Reusablebtn({ className, text, icon }) {
  return (
    <div>
      <button
        className={`bg-Secondary px-[26px] py-[10px] ${className} rounded-[20px]  text-white  mt-[20px] flex items-center gap-[10px]`}
      >
        {text}
        {icon}
      </button>
    </div>
  );
}

export default Reusablebtn;
