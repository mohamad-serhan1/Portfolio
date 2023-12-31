import React from "react";

const Education = () => {
  const educationDetails = [
    {
      title: "Lebanese International University",
      date: "Oct 2018 - Jun 2023",
      degree: "Computer Engineering Degree",
      description:
        "Completing my Computer Engineering degree at LIU provided me with a strong technical foundation. Alongside the core curriculum, I delved into comprehensive web training, mastering various aspects of computer engineering and gaining an understanding of web development essentials.",
    },
    {
      title: "FULL-STACK WEB, ARABICODER",
      date: "Jun 2022 - Oct 2022",
      degree: "Foundational Training: HTML, CSS, JavaScript, PHP",
      description:
        "At Arabicoder, I acquired a solid grounding in fundamental web technologies, including HTML, CSS, JavaScript, and PHP. This foundational training laid the groundwork for crafting dynamic and responsive web interfaces, enhancing user experiences through interactive elements and server-side scripting.",
    },
    {
      title: "ULTIMATE FULL-STACK BC, UDEMY",
      date: "Jun 2023 - Aug 2023",
      degree: "Certificate of web training",
      description:
        "The Ultimate Full-Stack BC course on Udemy propelled my skills to an advanced level. I specialized in utilizing Bootstrap to create highly responsive and visually appealing interfaces. Moreover, I extended my proficiency by delving into Python for backend development, enabling me to build scalable and efficient web applications.",
    },
  ];

  return (
    <div
      className="flex flex-col pt-40 items-center justify-center space-y-20"
      id="education"
    >
      <h2 className="font-bold text-3xl">Education</h2>
      <div className="w-96 h-16 text-neutral-500 text-base font-normal ">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </div>
      <div className="bg-white dark:bg-gray-900 p-8">
        {educationDetails.map((education, index) => (
          <div key={index} className="bg-white dark:bg-gray-900 pb-4">
            <div className="flex flex-row justify-between">
              <div className="basis-1/2">
                <h1 className="text-lg font-semibold font-['Inter'] capitalize leading-snug">
                  {education.title}
                </h1>
                <p className="bg-yellow-400 inline-block px-2 rounded-sm">
                  {education.date}
                </p>
              </div>
              <div className="basis-2/3 space-y-4">
                <h2 className="text-lg font-semibold">{education.degree}</h2>
                <p>{education.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
