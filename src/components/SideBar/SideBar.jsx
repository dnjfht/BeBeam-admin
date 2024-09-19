import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IsLoginState } from "../../recoil/login";
import { useSetRecoilState } from "recoil";
import Button from "../button/Button";
import { Toast } from "../toast/Toast";
import SideBarMenu from "./SideBarMenu";

import { CiInstagram, CiGlobe, CiLogin } from "react-icons/ci";
import { PiHandSwipeLeft } from "react-icons/pi";

export default function SideBar({ isSidebarOpen, setIsSidebarOpen }) {
  const navigate = useNavigate();

  const setIsLogin = useSetRecoilState(IsLoginState);
  const [dropMenu, setDropMenu] = useState({ num: 0, isActive: false });

  return (
    <div
      className={`${
        isSidebarOpen ? "ml-0" : "ml-[-100%]"
      } lg:w-[17%] md:w-[20%] sm:w-[25%] 3sm:w-full h-full sm:p-1 3sm:p-4 box-border bg-black text-white sm:relative 3sm:fixed top-0 left-0 sm:ml-0 transition-all duration-700 z-10`}
    >
      <div className="w-full pb-2 border-b-[1px] border-solid border-[rgba(255,255,255,0.3)] flex items-center justify-between cursor-pointer xl:text-[1rem] md:text-[0.9rem] 2sm:text-[0.875rem] 3sm:text-[0.75rem]">
        <div
          onClick={() => {
            navigate("/");
            setIsSidebarOpen(false);
          }}
          className="flex items-center gap-x-1"
        >
          <img
            className="object-cover xl:w-16 md:w-14 sm:w-12 3sm:w-14 xl:h-16 md:h-14 sm:h-12 3sm:h-14"
            src="/image/logo.png"
            alt="logo"
          />
          <p>BE:BEAM</p>
        </div>

        <Button
          icon={<PiHandSwipeLeft />}
          onClick={() => {
            setIsSidebarOpen(false);
          }}
          styles="sm:hidden 3sm:block text-[1.4rem]"
        />
      </div>

      <SideBarMenu
        dropMenu={dropMenu}
        setDropMenu={setDropMenu}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <div className="w-full pt-6 border-t-[1px] border-solid border-[rgba(255,255,255,0.3)] flex items-center gap-x-2 text-[1.3rem]">
        <Button
          icon={<CiInstagram />}
          onClick={() => {
            window.open("https://www.instagram.com/bebeam_busan", "_blank");
          }}
        />
        <Button
          icon={<CiGlobe />}
          onClick={() => {
            window.open("https://be-beam.vercel.app", "_blank");
          }}
        />
        <Button
          icon={<CiLogin />}
          onClick={() => {
            if (window.confirm("🤔로그아웃 하시겠습니까?🤔")) {
              setIsLogin(false);
              localStorage.setItem("isLogin", JSON.stringify(false));
              Toast("🥺로그아웃 하였습니다!🥺");
            }
          }}
          styles="ml-auto mr-2"
        />
      </div>
    </div>
  );
}
