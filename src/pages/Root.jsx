import { useEffect, useMemo, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import SideBar from "../components/SideBar/SideBar";
import Header from "../components/header/Header";
import { useSetRecoilState } from "recoil";
import { UsersState } from "../recoil/user";
import { userList } from "../constants";

export default function Root({ isLogin, isAfterLogin, setIsAfterLogin }) {
  const navigate = useNavigate();
  const pathname = useLocation().pathname;

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const setUsers = useSetRecoilState(UsersState);

  const data = useMemo(() => userList, []);

  useEffect(() => {
    if (isLogin) {
      if (isAfterLogin) {
        navigate("/");
        setIsAfterLogin(false);
      } else if (!isAfterLogin) {
        navigate(pathname);
      }
    } else {
      navigate("/login");
    }
  }, [isLogin, isAfterLogin, navigate, pathname]);

  useEffect(() => {
    setUsers(data);
  }, [data]);

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
