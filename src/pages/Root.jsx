import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import SideBar from "../components/SideBar/SideBar";
import Header from "../components/header/Header";

export default function Root({ setAccessToken }) {
  const pathname = useLocation().pathname;

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <div
        className={`${
          pathname === "/login" ? "hidden" : "block"
        } w-full h-[100vh] p-3 box-border bg-black flex`}
      >
        <SideBar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          setAccessToken={setAccessToken}
        />

        <div className="lg:w-[83%] md:w-[80%] sm:w-[75%] 3sm:w-full h-full p-4 box-border bg-white rounded-xl overflow-y-scroll">
          <Header setIsSidebarOpen={setIsSidebarOpen} />
          <Outlet />
        </div>
      </div>

      <div className={`${pathname === "/login" ? "block" : "hidden"}`}>
        <Outlet />
      </div>
    </>
  );
}
