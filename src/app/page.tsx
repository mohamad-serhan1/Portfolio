"use client";
import React from "react";

import ROUTES from "@/static/router.data";
import Mainsidebar from "@/components/sidebar/mainsidebar";
import Sidebar from "@/components/sidebar/Sidebar";
import Herosection from "@/components/Herosection";
import Myskills from "@/components/Myskills";
import Education from "@/components/Education";
import WorkHistory from "@/components/WorkHistory";
import MyProject from "@/components/MyProject";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
function App() {
  // *~~*~~*~~ Theme svc ~~*~~*~~* //

  return (
    <div className=" dark:text-white bg-gray-100 dark:bg-gray-800  min-h-screen transition-all">
      <div className="flex flex-row justify-between gap-9">
        <Mainsidebar />
        <div className="flex flex-col px-12">
          <Herosection />
          <Myskills />
          <Education />
          <WorkHistory />
          <MyProject />
          <Contact />
        </div>
        <div className="fixed right-0 ">
          <Sidebar />
        </div>
      </div>
          <Footer />
    </div>
  );
}

export default App;
