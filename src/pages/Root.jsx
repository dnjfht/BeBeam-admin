import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { AccessTokenState } from "../recoil/login";
import { UsersState } from "../recoil/user";
import { CommunityReviewsDataState } from "../recoil/review";
import { userList, reviewCommentList } from "../constants";

import SideBar from "../components/SideBar/SideBar";
import Header from "../components/header/Header";

export default function Root() {
  const navigate = useNavigate();
  const pathname = useLocation().pathname;
  console.log(pathname);

  const [accessToken, setAccessToken] = useRecoilState(AccessTokenState);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    setAccessToken(accessToken);
  }, [setAccessToken]);

  useEffect(() => {
    if (accessToken === "") {
      navigate("/login");
    } else {
      navigate(pathname);
    }
  }, [accessToken, pathname, navigate]);

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
