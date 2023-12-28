import React from "react";

const WorkHistory = () => {
  return (
    <div className="flex flex-col pt-40   items-center justify-center space-y-20">
      <h1 className=" font-bold text-3xl">Work History</h1>
      <p className='w-96 h-16 text-neutral-500 text-base font-normal'>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </p>

      <div className="flex flex-row justify-between  bg-white dark:bg-gray-900 p-8">
        <div className="basis-1/2">
          <h1 className="text-lg font-medium font-['Inter'] capitalize leading-snug">
            Internship as a Web Developer
          </h1>
          <p className="bg-yellow-400 inline-block px-2 rounded-sm">
            Aug 2023 - Nov 2023
          </p>
        </div>

        <div className="space-y-6 basis-2/3">
          <h2 className="text-lg font-medium ">Certificate in Web Development</h2>
          <p>
            During my internship, I had the invaluable opportunity to immerse
            myself in real-world projects under the guidance of seasoned
            professionals. Collaborating closely with senior team members, I
            gained practical insights into industry best practices, refining my
            skills in web development. This hands-on experience provided a solid
            foundation as I worked on diverse projects, learning to navigate
            challenges and implement innovative solutions. It was a pivotal
            period where I honed my abilities, paving the way for further
            practice and skill development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkHistory;
