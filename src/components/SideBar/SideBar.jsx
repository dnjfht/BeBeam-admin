import { useNavigate } from "react-router-dom";
import { IsLoginState } from "../../recoil/login";
import { useSetRecoilState } from "recoil";
import Util from "./Util";
import Button from "../button/Button";
import { Toast } from "../toast/Toast";

import { AiFillHome } from "react-icons/ai";
import { FaUser, FaPeopleGroup } from "react-icons/fa6";
import { CiInstagram, CiGlobe, CiLogin } from "react-icons/ci";
import { PiHandSwipeLeft } from "react-icons/pi";

export default function SideBar({ isSidebarOpen, setIsSidebarOpen }) {
  const setIsLogin = useSetRecoilState(IsLoginState);

  const navigate = useNavigate();
  return (
    <div
      className={`${
        isSidebarOpen ? "ml-0" : "ml-[-100%]"
      } lg:w-[17%] md:w-[20%] sm:w-[25%] 3sm:w-full h-full sm:p-1 3sm:p-4 box-border bg-black text-white sm:relative 3sm:fixed top-0 left-0 sm:ml-0 transition-all duration-700`}
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

      <ul className="w-full h-sidebar-menu-height pt-8 pb-4 text-[0.875rem] flex flex-col gap-y-2 overflow-y-scroll">
        <Util
          icon={<AiFillHome />}
          text="HOME"
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Util
          icon={<FaUser />}
          text="USERS"
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Util
          icon={<FaPeopleGroup />}
          text="MEETINGS"
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </ul>

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
