"use client";

import { useContext, useEffect, useState } from "react";
import mainsidebar from "../sidebar/mainsidebar";
import ThemeSvcContext from "@/shared/services/theme/theme.context";
import ThemeService from "@/shared/services/theme/theme.service";

function LoadingComponent() {
  return (
    <div className="h-full w-full grid place-items-center">loading ...</div>
  );
}

type AppInitProps = {
  children: React.ReactNode;
};

export default function AppInit({ children }: AppInitProps) {
  // *~~*~~*~~ Auth svc ~~*~~*~~* //
  const themeSvc = useContext<ThemeService>(ThemeSvcContext);

  // *~~*~~*~~ state ~~*~~*~~* //
  const [appLoaded, setAppLoaded] = useState<boolean>(false);

  // set up storage api
  useEffect(() => {
    (async () => {
      // *~~*~~*~~ LOAD THEME ~~*~~*~~* //

      if (typeof window === "undefined" || !document.querySelector("html"))
        return;

      document.querySelector("html")!.classList.add("light");

      await themeSvc.loadTheme();

      setAppLoaded(true);
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // TODO: add loading screen
  if (!appLoaded) return <LoadingComponent />;

  return children;
}
