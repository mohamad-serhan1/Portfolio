import React, { useRef } from "react";
import { useState, useContext } from "react";
import ThemeService from "@/shared/services/theme/theme.service";
import ThemeSvcContext from "@/shared/services/theme/theme.context";
import { Theme } from "@/shared/services/theme/theme.type";
import { MdHome } from "react-icons/md";
import { FaFileCode, FaUserGraduate, FaSun, FaMoon ,FaBriefcase } from "react-icons/fa6";

import Link from "next/link";

const Sidebar = () => {
  const themeSvc = useContext<ThemeService>(ThemeSvcContext);

  function toggleTheme() {
    themeSvc.toggleTheme();

    setTheme(themeSvc.theme);
  }

  const [theme, setTheme] = useState<Theme>(themeSvc.theme);
  return (
    <div className="flex flex-col mt-[50px] bg-white dark:bg-gray-900 p-10 ">
      <button onClick={toggleTheme}>
        {theme === "light" ? <FaSun size={24} /> : <FaMoon size={24} />}
      </button>

      <div className="pt-36 flex flex-col gap-12 justify-center items-center">
        <div className="w-10 h-10  rounded-full hover:bg-yellow-400 flex justify-center items-center">
          <Link href="/#home">
            <MdHome size={22} />
          </Link>
        </div>
        <div className="w-10 h-10  rounded-full hover:bg-yellow-400 flex justify-center items-center">
          <Link href="/#education">
            <FaUserGraduate size={22} />
          </Link>
        </div>
        <div className="w-10 h-10  rounded-full hover:bg-yellow-400 flex justify-center items-center">
          <Link href="/#myWork">
            {/* <i className="fa-regular fa-briefcase fa-lg "></i> */}
            <FaBriefcase size={22}/>
          </Link>
        </div>
        <div className="w-10 h-10  rounded-full hover:bg-yellow-400 flex justify-center items-center">
          <Link href="/#myProjects">
            <FaFileCode size={22} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
