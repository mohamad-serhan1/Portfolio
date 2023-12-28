import React from "react";

const Education = () => {
  return (
    <div className="flex flex-col pt-40   items-center justify-center space-y-20">
      <h2 className=" font-bold text-3xl">Education</h2>
      <div className='w-96 h-16  text-neutral-500 text-base font-normal '>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </div>
      <div className="bg-white dark:bg-gray-900 p-8">

     
      <div className="bg-white  dark:bg-gray-900  ">
        <div className="flex flex-row justify-between ">
          <div className="basis-1/2 ">
            <h1 className="text-lg font-semibold font-['Inter'] capitalize leading-snug">
              Lebanese International University
            </h1>
            <p className="bg-yellow-400 inline-block px-2 rounded-sm">
              Oct 2018 - Jun 2023
            </p>
          </div>

          <div className="basis-2/3 space-y-4">
            <h2 className="text-lg font-semibold">Computer Engineering Degree</h2>
            <p>
              Completing my Computer Engineering degree at LIU provided me with
              a strong technical foundation. Alongside the core curriculum, I
              delved into comprehensive web training, mastering various aspects
              of computer engineering and gaining an understanding of web
              development essentials.
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex flex-row justify-between    ">
          <div className="basis-1/2 ">
            <h1 className="text-lg font-semibold font-['Inter'] capitalize leading-snug">
              FULL-STACK WEB ,ARABICODER
            </h1>
            <p className="bg-yellow-400 inline-block px-2 rounded-sm">
              Jun 2022 - Oct 2022
            </p>
          </div>

          <div className="basis-2/3 space-y-4">
            <h2 className="text-lg font-semibold">
              Foundational Training: HTML, CSS, JavaScript, PHP
            </h2>
            <p>
              At Arabicoder, I acquired a solid grounding in fundamental web
              technologies, including HTML, CSS, JavaScript, and PHP. This
              foundational training laid the groundwork for crafting dynamic and
              responsive web interfaces, enhancing user experiences through
              interactive elements and server-side scripting..
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex flex-row justify-between   ">
          <div className="basis-1/2 ">
            <h1 className="text-lg font-semibold font-['Inter'] capitalize leading-snug">
              ULTIMATE FULL-STACK BC ,UDEMY
            </h1>
            <p className="bg-yellow-400 inline-block px-2 rounded-sm">
              Jun 2023- Aug 2023
            </p>
          </div>

          <div className="basis-2/3 space-y-4">
            <h2 className="text-lg font-semibold">Certificate of web training</h2>
            <p>
              The Ultimate Full-Stack BC course on Udemy propelled my skills to
              an advanced level. I specialized in utilizing Bootstrap to create
              highly responsive and visually appealing interfaces. Moreover, I
              extended my proficiency by delving into Python for backend
              development, enabling me to build scalable and efficient web
              applications.
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Education;
