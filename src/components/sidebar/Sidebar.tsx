import React from "react";
import { useState, useContext, useEffect } from "react";
import ThemeService from "@/shared/services/theme/theme.service";
import ThemeSvcContext from "@/shared/services/theme/theme.context";
import { Theme } from "@/shared/services/theme/theme.type";
import { MdHome } from "react-icons/md";
import { FaFileCode } from "react-icons/fa6";
import { FaUserGraduate } from "react-icons/fa6";

const Sidebar = () => {
  const themeSvc = useContext<ThemeService>(ThemeSvcContext);

  function toggleTheme() {
    themeSvc.toggleTheme();

    setTheme(themeSvc.theme);
  }

  const [theme, setTheme] = useState<Theme>(themeSvc.theme);
  return (
    <div className="flex flex-col mt-[50px] ">
      <button onClick={toggleTheme}>
        <i
          className={`fas ${theme === "light" ? "fa-sun" : "fa-moon"} mt-4`}
        ></i>
      </button>

      <div className="pt-36 flex flex-col gap-12 justify-center items-center">
        <div className="w-10 h-10  rounded-full hover:bg-yellow-400 flex justify-center items-center">
          <MdHome size={22} />
        </div>
        <div className="w-10 h-10  rounded-full hover:bg-yellow-400 flex justify-center items-center">
          <FaFileCode size={22} />
        </div>
        <div className="w-10 h-10  rounded-full hover:bg-yellow-400 flex justify-center items-center">
          <FaUserGraduate size={22} />
        </div>
        <div className="w-10 h-10  rounded-full hover:bg-yellow-400 flex justify-center items-center">
        <i className="fa-regular fa-briefcase fa-lg "></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
