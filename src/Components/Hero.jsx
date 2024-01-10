import React from "react";
import Rojitdai from "../Assests/Image/Rojit.JPG";
import { IoIosMail, IoIosCall } from "react-icons/io";
import { IoLocationSharp, IoCloudDownload,IoSnowOutline } from "react-icons/io5";
import { FaFacebookF, FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import Reusablebtn from "./Reusablebtn";

function Hero(text, icon) {
  return (
    <div className="font-[500]  sm:px-[50px] sm:py-[30px] ">
      <div className="  items-center sm:flex sm:flex-row-reverse gap-[50px]   text-Primary sm:mt-[50px]">
        <div className="">
          
          <div className=" bg-[#e9e9e9] w-fit rounded-full p-[14px] m-auto">
            <img
              src={Rojitdai}
              className=" object-cover  border-[10px] rounded-full border-[#e2e1e1] w-[350px] h-[350px] "
            />
          </div>
        </div>
        <div className=" flex flex-col items-center justify-center sm:items-start">
          <div>
            <Reusablebtn text={`Hello I'm`} className={"round  mt-[40px] "} />
            {/* <button className="bg-Secondary px-[26px] py-[12px] round text-white  mt-[20px]">
            {" "}
            Hello I'm
          </button> */}
          </div>
          <div className=" flex flex-col items-center    mt-[14px] ">
            <h1 className="text-[40px]  font-[700] mt-[8px] sm:mt-0">Rojit Dhakal</h1>
          </div>
          <div className="pt-[10px] ">
            {items.map((menu) => (
              <div className="flex items-center gap-[20px] mt-[14px] ">
                <div className="text-[20px] sm:text-[20px]">{menu.icon}</div>
                <div className="font-[400] text-[16px] ">{menu.Text}</div>
              </div>
            ))}
          </div>
          {/* icons section */}
          <div className="flex items-center justify-center gap-[24px]  mt-[22px] ">
            {icons.map((shape) => (
              <div className="text-[20px] ">
                <a href={shape.link}>{shape.icon}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

const items = [
  {
    icon: <IoIosMail />,
    Text: "rojitdhakal40@gmail.com",
  },
  {
    icon: <IoIosCall />,
    Text: "+977-9840040828",
  },
  {
    icon: <IoLocationSharp />,
    Text: "Bharatpur-10, chitwan, Nepal",
  },
];
const icons = [
  {
    icon: <FaFacebookF />,
    link: "https://www.facebook.com/profile.php?id=100009293393739",
  },
  {
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/rojit-dhakal-4766961b9/",
  },
  {
    icon: <FaGithub />,
    link: "https://github.com/Rojit-1999",
  },
  {
    icon: <FaTwitter />,
    link: "https://twitter.com/Rojit41223969",
  },
];
