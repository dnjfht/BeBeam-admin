import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import SideBar from "../components/SideBar/SideBar";
import Header from "../components/header/Header";

export default function Root({ isLogin }) {
  const navigate = useNavigate();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (isLogin) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [isLogin, navigate]);

  return (
    <div className="w-full h-[100vh] p-3 box-border bg-black flex">
      <SideBar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <div className="lg:w-[83%] md:w-[80%] sm:w-[75%] 3sm:w-full h-full p-4 box-border bg-white rounded-xl overflow-y-scroll">
        <Header setIsSidebarOpen={setIsSidebarOpen} />
        <Outlet />
      </div>
    </div>
  );
}
