import React from "react";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiLaravel } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { SiPrisma } from "react-icons/si";
import Image from "next/image";

const Myskills = () => {
  const myskills = [{ icons: "TbBrandNextjs" }];
  return (
    <div className="flex flex-col pt-40 ">
      <div className="text-center flex-col items-center justify-center space-y-20">
        <h2 className="font-bold text-3xl ">My Skills</h2>
        <p className="">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </p>
        <div className=" grid grid-cols-4 gap-10 bg-white p-8 dark:bg-gray-900 ">
          <div className="flex flex-col justify-center items-center hover:animate-in-out">
            <TbBrandNextjs size={100} className="" />
            <h1 className="text-lg font-bold">Next.Js</h1>
          </div>

          <div className="flex flex-col justify-center items-center ">
            <FaNodeJs size={100} className="text-[#90ca51]" />
            <h1 className="text-lg font-bold">Node.Js</h1>
          </div>

          <div className="flex flex-col justify-center items-center ">
            <SiTypescript size={100} className="text-blue-500" />
            <h1 className="text-lg font-bold">TypeScript</h1>
          </div>

          <div className="flex flex-col justify-center items-center ">
            <SiVite size={100} className="text-[#b243ff]" />
            <h1 className="text-lg font-bold">ReactVite</h1>
          </div>

          <div className="flex flex-col justify-center items-center ">
            <BiLogoMongodb size={100} className="text-green-700" />
            <h1 className="text-lg font-bold">MongoDB</h1>
          </div>

          <div className="flex flex-col justify-center items-center ">
            <SiPrisma size={100} className="text-[#194055]" />
            <h1 className="text-lg font-bold">Prisma</h1>
          </div>

          <div className="flex flex-col justify-center items-center ">
            <SiTailwindcss size={100} className="text-[#1bc1bb]" />
            <h1 className="text-lg font-bold">Tailwind</h1>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <SiLaravel size={100} className="text-[#ff2d20]" />
            <h1 className="text-lg font-bold">Laravel</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myskills;
