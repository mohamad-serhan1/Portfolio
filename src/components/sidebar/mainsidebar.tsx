import React from "react";
import { Button } from "@/components/ui/button";
import { FaDownload } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function mainSidebar() {
  const getBarWidth = (percentage: any) => {
    return { width: percentage };
  };

  const languages = [
    { language: "Arabic", percentage: "100%" },
    { language: "English", percentage: "80%" },
  ];

  const skillsData = [
    { name: "Html", percentage: "90%" },
    { name: "CSS", percentage: "90%" },
    { name: "JS", percentage: "80%" },
    { name: "PHP", percentage: "70%" },
  ];

  const extraSkillsData = [
    { name: "Tailwind, SCSS" },
    { name: "React, React Vite, NextJs" },
    { name: "GIT & GITHUB" },
    { name: "Hygraph, Graphql, Prisma" },
  ];
  return (
    <div>
      <div className="flex flex-col  bg-white dark:bg-gray-900 p-5">
        <div className="mt-[50px] border-b pb-2 flex flex-col justify-evenly">
          <div className="flex flex-row items-center justify-center ">
            <img
              className="w-36 h-36 rounded-full "
              src="https://via.placeholder.com/150x150"
            />
          </div>

          <p className="text-center font-semibold pt-2">Mohammad Serhan</p>
          <p className="text-center pt-2 font-thin">Front-end Developer</p>

          <div className="flex flex-row justify-evenly pt-2">
            <RiInstagramFill className=" " />

            <FaFacebookSquare />

            <FaLinkedin />

            <FaSquareXTwitter />
          </div>
        </div>

        <div className="pt-3 border-b pb-2 flex flex-col  items-center">
          <div className="flex flex-row justify-between w-full  pb-2">
            <p className="bg-yellow-400 px-2 py-[1px] rounded-md text-sm">
              Age
            </p>
            <p className="text-sm">24</p>
          </div>

          <div className="flex flex-row justify-between w-full pb-2">
            <p className="bg-yellow-400 px-2 py-[1px] rounded-md text-sm">
              Freelance
            </p>
            <p className="text-sm text-green-600">Available</p>
          </div>
          <div className="flex flex-row justify-between w-full pb-2">
            <p className="bg-yellow-400 px-2 py-[1px] rounded-md text-sm">
              Address
            </p>
            <p className="text-sm">Lebanon,Tripoli</p>
          </div>
        </div>

        <div className=" pt-3 border-b pb-4 flex flex-col">
          <h2 className="font-semibold">Languages</h2>

          {languages.map((languages, index) => (
            <div key={index} className="flex flex-col items-end gap-3">
              <div className="flex flex-row justify-between w-56 pt-2">
                <p className="text-neutral-500 text-base font-normal font-['Inter'] capitalize leading-normal">
                  {languages.language}
                </p>
                <h2 className="text-neutral-500 text-base font-normal font-['Inter'] capitalize leading-normal">
                  {languages.percentage}
                </h2>
              </div>
              <div className="w-[100px] h-1 relative">
                <div className="w-[100px] h-1 left-0 top-0 absolute rounded-3xl border border-yellow-500" />
                <div
                  className=" h-0.5 left-[1px] top-[1px] absolute bg-yellow-500 rounded-3xl"
                  style={getBarWidth(languages.percentage)}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-3 border-b pb-4 flex flex-col">
          <h2 className="font-semibold">Skills</h2>

          {skillsData.map((skillsData, index) => (
            <div key={index} className="flex flex-col items-end">
              <div className="flex flex-row justify-between w-56 py-1">
                <div className="text-neutral-500 text-base font-normal font-['Inter'] capitalize leading-normal">
                  {skillsData.name}
                </div>
                <div className="text-neutral-500 text-base font-normal font-['Inter'] capitalize leading-normal">
                  {skillsData.percentage}
                </div>
              </div>
              <div className="w-[100px] h-1 relative">
                <div className="w-[100px] h-1 left-0 top-0 absolute rounded-3xl border border-yellow-500" />
                <div
                  className=" h-0.5 left-[1px] top-[1px] absolute bg-yellow-500 rounded-3xl"
                  style={getBarWidth(skillsData.percentage)}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-3 border-b pb-4 flex flex-col">
          <h2 className="font-semibold">Extra Skills</h2>
          {extraSkillsData.map((extraSkillsData, index) => (
            <div key={index} className="pt-2 flex flex-row gap-2 items-center">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="0.5" y="0.5" width="9" height="9" stroke="#FFB400" />
                <rect x="5.5" y="5.5" width="9" height="9" stroke="#FFB400" />
              </svg>
              <p className="text-neutral-500 text-base font-normal font-['Inter'] capitalize leading-normal">
                {extraSkillsData.name}
              </p>
            </div>
          ))}
        </div>

        <Button className="mt-3 " variant="mycolor">
          <div className="flex flex-row gap-2 items-center">
            <h2>Download CV</h2>
            <FaDownload />
          </div>
        </Button>
      </div>
      <div></div>
    </div>
  );
}

export default mainSidebar;
