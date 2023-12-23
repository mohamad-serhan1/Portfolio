"use client";
import React, { useState, useEffect, useContext } from "react";

import ThemeService from "@/shared/services/theme/theme.service";
import ThemeSvcContext from "@/shared/services/theme/theme.context";
import { Theme } from "@/shared/services/theme/theme.type";
import ROUTES from "@/static/router.data";

function App() {
  // *~~*~~*~~ Theme svc ~~*~~*~~* //

  const themeSvc = useContext<ThemeService>(ThemeSvcContext);

  function toggleTheme() {
    themeSvc.toggleTheme();

    setTheme(themeSvc.theme);
  }

  const [theme, setTheme] = useState<Theme>(themeSvc.theme);

  return (
    <div className="p-4 dark:text-white bg-white dark:bg-gray-900  min-h-screen transition-all">
      {/* title */}

      <div className="flex gap-x-4 items-center mb-4 ">
        <h1 className="text-2xl font-semibold ">Mohammad Serhan Portfolio</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi ipsum
          voluptatum quasi fugiat, eius officiis neque, doloribus debitis
          voluptates sunt amet! Non quidem illum dolorem animi eaque consequatur
          totam sit?
        </p>
        <button onClick={toggleTheme}>
          <i className={`fas ${theme === "light" ? "fa-sun" : "fa-moon"}`}></i>
        </button>
      </div>
    </div>
  );
}

export default App;
