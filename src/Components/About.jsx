import React from "react";
import Aboutus from "../Assests/Image/about.jpg";
import Reusablebtn from "./Reusablebtn";
import { SiAffinitydesigner, SiVorondesign } from "react-icons/si";
import { MdDeveloperBoard } from "react-icons/md";
import ProgressBar from "@ramonak/react-progress-bar";
import { FaPlayCircle } from "react-icons/fa";
import { IoCloudDownload } from "react-icons/io5";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function About() {
  return (
    <div className="mx-[20px] py-[50px] sm:py-[60px] flex flex-col justify-center items-center">
      <div className="sm:flex ">
        <div>
          <img src={Aboutus} alt="" className="sm:h-[400px] sm:w-[950px]" />
        </div>
        <div>
          <h1 className="font-[700] text-[26px]  mt-[28px] text-center">
            About Me
          </h1>
          <p className=" text-[14px] mt-[14px] text-center px-[20px]">
            {" "}
            Hello this is me Rojit Dhakal. I am very passionate about my work
            and I believe that my intense designing, writing, and speaking
            skills and my education make me highly competitive. I hope these are
            qualities you look for in your work.
          </p>

          <div className="flex gap-[10px] flex-wrap  mt-[20px] items-center justify-center ">
            {ability.map((list) => (
              <div className="border-[1px] border-Secondary p-[8px] rounded-[10px]">
                {list.Text}
              </div>
            ))}
          </div>
          <Reusablebtn
            text={`Download CV`}
            icon={<IoCloudDownload />}
            className={"round font-[500] mx-auto "}
          />
        </div>
      </div>

      {/* What I Do Section  */}

      <div className="py-[50px]  flex  flex-col gap-[20px] items-center ">
        <div className="text-[28px] font-[600]">What I do</div>
        <div className=" flex flex-col flex-wrap gap-[28px] ">
          {skills.map((skill) => (
            <div className="shadow-lg p-[20px] border-[#f1f1f1] border-[1px]">
              <div className="text-[26px] text-indigo-500">{skill.icon}</div>
              <div className="font-[600] text-[24px] mt-[16px]">
                {skill.heading}
              </div>
              <div className="mt-[14px]">{skill.text}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="sm:flex  gap-[40px]">
        {/* Technical Skills Starts here */}

        <div className="py-[50px]  flex  flex-col gap-[20px] items-center">
          <h1 className="text-[28px] font-[600]">Technical Skills</h1>
          <div>
            <div className="flex flex-col gap-[20px] items-center">
              {progress.map((prog) => (
                <div>
                  <div>{prog.heading}</div>
                  <div className="mt-[4px] ">{prog.bar}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Professional Skills start here */}

        <div className="py-[50px]">
          <h1 className="font-[600] text-[36px] text-center text-Primary">
            Professional Skills
          </h1>
          <div>
            <div className=" grid grid-cols-2 items-center justify-center gap-[50px] mt-[30px]">
              {professional.map((profess) => (
                <div className="flex flex-col items-center justify-center ">
                  <div>{profess.bar}</div>
                  <div className="">{profess.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Education Portion Starts from here */}

      <div className="py-[50px]  flex  flex-col gap-[20px] items-center text-Primary">
        <h1 className="text-[28px] font-[600]">Education</h1>
        <div className="flex flex-col gap-[25px]">
          {education.map((edu) => (
            <div className="shadow-lg p-[20px] border-[#f1f1f1] border-[1px]">
              <div className="text-[20px] font-[600] text-Secondary">
                {edu.heading}
              </div>
              <div className="text-[16px] font-[500] mt-[8px] ">{edu.from}</div>
              <div className="mt-[6px] text-[14px] font-[500]">{edu.date}</div>
            </div>
          ))}
        </div>

        {/* work experience starts here */}

        <div className="py-[50px]">
          <h1 className="text-[28px] font-[600]">Work Experience</h1>
          <div className="mt-[20px] flex flex-col gap-[25px]">
            {experience.map((exp) => (
              <div className="shadow-lg p-[20px] border-[#f1f1f1] border-[1px]">
                <div className="font-[600] text-[24px]  text-Secondary">
                  {exp.heading}
                </div>
                <div className="font-[500] text-[18px] mt-[10px]">
                  {exp.from}
                </div>

                <div className="font-[500] text-[14px] mt-[10px]">
                  {exp.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Portfolio Section starts here */}

      {/* <div>
        <div>
          <h1 className="text-[28px] font-[600]">Recent portfolio</h1>
        </div>
      </div> */}

      {/* contact section starts here */}

      <div>
        <div className="">
          <form action="" method="post" className=" flex flex-col gap-[20px] ">
            <div className="">
              <input
                type="text"
                placeholder="First Name"
                className="border-[#ececec] border-[1px] w-screen h-[50px] pl-[10px] bg-[#f0f0f0] rounded-[14px] "
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Last Name"
                className="border-[#ececec] border-[1px] w-screen  h-[50px] pl-[10px] bg-[#f0f0f0] rounded-[14px] "
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Email"
                className="border-[#ececec] border-[1px] w-screen h-[50px]  pl-[10px] bg-[#f0f0f0] rounded-[14px]"
              />
            </div>
            <div>
              <textarea
                name=""
                id=""
                cols={40}
                rows={4}
                placeholder="Message"
                className="border-[#ececec] border-[1px] w-screen   pl-[10px] bg-[#f0f0f0] rounded-[14px] "
              ></textarea>
            </div>
            <button
              type="submit"
              className=" px-[30px] py-[14px] bg-Secondary rounded-[18px] w-[200px] text-white hover:font-[500] hover:scale-105 m-auto"
            >
              {" "}
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default About;

const ability = [
  {
    Text: "Html",
  },
  {
    Text: "Tailwind Css",
  },
  {
    Text: "React Js",
  },
  {
    Text: "Graphics",
  },
  {
    Text: "UI/UX",
  },
  {
    Text: "Photoshop",
  },
  {
    Text: "Figma",
  },
];

const skills = [
  {
    icon: <SiVorondesign />,
    heading: "UI Design",
    text: "An effective UI/UX is what captures attention and spreads a clear message. I make sure the design is innovative and neat with all of this.",
  },
  {
    icon: <MdDeveloperBoard className="text-orange-600" />,
    heading: "Web Development",
    text: "If you are looking for a developer who’ll take over the research and development of your website, I am a well-established professional to help you with this.",
  },
  {
    icon: <SiAffinitydesigner className="text-blue-600" />,
    heading: "Graphic Design",
    text: "If you are looking for a user-friendly app that will attract more mobile users, I can help you design and build a platform with the latest and trendiest look and feel.",
  },
];

const education = [
  {
    heading:
      "Bachelor of Science in Computer Science and Information Technology ",
    from: "Chitwan College of Technology",
    date: "2018-2023",
  },
  {
    heading: "High School Graduate",
    from: "Aroma College",
    date: "2015-2017",
  },
  {
    heading: "Secondary Education Examination  ",
    from: "Chitwan College of Technology",
    date: "2016",
  },
];

const professional = [
  {
    bar: (
      <CircularProgressbar
        className=" h-[100px] w-[100px] stroke-Primary"
        value={80}
        text={"80%"}
        animateOnRender={true}
        strokeWidth={7}
        styles={{
          path: {
            stroke: "#4FDCC5",
          },
        }}
      />
    ),
    text: "Communication",
  },
  {
    bar: (
      <CircularProgressbar
        className=" h-[100px] w-[100px] stroke-Primary"
        value={90}
        text={"90%"}
        strokeWidth={7}
        animateOnRender={true}
        styles={{
          path: {
            stroke: "#4FDCC5",
          },
        }}
      />
    ),
    text: "Leadership",
  },
  {
    bar: (
      <CircularProgressbar
        className=" h-[100px] w-[100px] stroke-Primary"
        value={88}
        text={"88%"}
        animateOnRender={true}
        strokeWidth={7}
        styles={{
          path: {
            stroke: "#4FDCC5",
          },
        }}
      />
    ),
    text: <p>Project Management</p>,
  },
  {
    bar: (
      <CircularProgressbar
        className=" h-[100px] w-[10 0px] stroke-Primary"
        value={86}
        text={"86%"}
        strokeWidth={7}
        animateOnRender={true}
        styles={{
          path: {
            stroke: "#4FDCC5",
          },
        }}
      />
    ),
    text: "Creativity",
  },
];

const experience = [
  {
    heading: "Font End Developer",
    from: "Intelzy Software Pvt.",
    date: "2022-2023",
    // icon: <FaPlayCircle />,
    // point: "Validate CSS",
    points: [
      {
        icon: <FaPlayCircle />,
        point: "Validate CSS",
      },
      {
        icon: <FaPlayCircle />,
        point: "Project Management",
      },
    ],
  },
  {
    heading: "UI/UX Designer",
    from: "Devsign Technologies",
    date: "2020-2022",
  },
  {
    heading: "Graphic Designer ",
    from: "Devsign Technologies",
    date: "2018-2020",
  },
];

const progress = [
  {
    heading: "Javascript",
    bar: (
      <ProgressBar
        completed={70}
        width="370px"
        animateOnRender={true}
        bgColor="#4FDCC5"
      />
    ),
  },
  {
    heading: "HTML",
    bar: (
      <ProgressBar
        completed={86}
        width="370px"
        animateOnRender={true}
        bgColor="#4FDCC5"
      />
    ),
  },
  {
    heading: "Tailwind",
    bar: (
      <ProgressBar
        completed={80}
        width="370px"
        animateOnRender={true}
        bgColor="#4FDCC5"
      />
    ),
  },
  {
    heading: "React",
    bar: (
      <ProgressBar
        completed={59}
        width="370px"
        animateOnRender={true}
        bgColor="#4FDCC5"
      />
    ),
  },
  {
    heading: "Designing",
    bar: (
      <ProgressBar
        completed={80}
        width="370px"
        animateOnRender={true}
        bgColor="#4FDCC5"
      />
    ),
  },
];

const percentage = 66;
