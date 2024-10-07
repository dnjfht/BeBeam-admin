import { useLocation, useNavigate } from "react-router-dom";
import Util from "./Util";

import { AiFillHome } from "react-icons/ai";
import {
  FaUser,
  FaPeopleGroup,
  FaCaretDown,
  FaCaretUp,
  FaHashtag,
} from "react-icons/fa6";
import { MdAdminPanelSettings } from "react-icons/md";
import { BiSolidComment } from "react-icons/bi";

export default function SideBarMenu({
  dropMenu,
  setDropMenu,
  setIsSidebarOpen,
}) {
  const navigate = useNavigate();
  const pathname = useLocation().pathname;

  const sideBarMenu = [
    [[{ text: "홈", icon: <AiFillHome /> }], [{ text: "홈", url: "/home" }]],
    // [
    //   [{ text: "관리자", icon: <MdAdminPanelSettings /> }],
    //   [
    //     { text: "관리자 리스트", url: "/admins" },
    //     { text: "가입/탈퇴 관리자 리스트", url: "/signUpAndResignAdmins" },
    //   ],
    // ],
    [
      [{ text: "유저", icon: <FaUser /> }],
      [
        { text: "유저 리스트", url: "/users" },
        { text: "가입/탈퇴 유저 리스트", url: "/signUpAndResignUsers" },
        { text: "강제 탈퇴 유저 리스트", url: "/forceResignUsers" },
      ],
    ],
    [
      [{ text: "모임", icon: <FaPeopleGroup /> }],
      [
        { text: "모임 리스트", url: "/meetings" },
        { text: "정기모임 생성", url: "/createRegMeetings" },
        { text: "모집 중인 모임 리스트", url: "/openMeetings" },
        { text: "삭제된 모임 리스트", url: "/deleteMeetings" },
      ],
    ],
    [
      [{ text: "후기 댓글", icon: <BiSolidComment /> }],
      [
        { text: "후기 댓글 리스트", url: "/comments" },
        { text: "삭제된 후기 댓글 리스트", url: "/deleteComments" },
      ],
    ],
    [
      [{ text: "해쉬 태그", icon: <FaHashtag /> }],
      [{ text: "해쉬 태그 리스트", url: "/hashTags" }],
    ],
  ];

  return (
    <ul className="flex flex-col w-full pt-8 pb-4 overflow-y-scroll sidebarScrollbar h-sidebar-menu-height gap-y-2">
      {sideBarMenu.map((menu, index) => {
        return (
          <li
            key={index}
            className="mb-2 xl:text-[1rem] lg:text-[0.875rem] md:text-[0.8rem] sm:text-[0.75rem] 2sm:text-[0.8rem] 3sm:text-[0.75rem]"
          >
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() =>
                setDropMenu((prev) =>
                  prev.num === index
                    ? { ...prev, isActive: !prev.isActive }
                    : { num: index, isActive: true }
                )
              }
            >
              <Util
                icon={menu[0][0].icon}
                text={menu[0][0].text}
                isActive={dropMenu.num === index && dropMenu.isActive}
              />
              {dropMenu.num === index && dropMenu.isActive ? (
                <FaCaretUp />
              ) : (
                <FaCaretDown />
              )}
            </div>

            <div
              className={`${
                dropMenu.num === index && dropMenu.isActive
                  ? "max-h-screen"
                  : "max-h-0"
              } mt-2 overflow-hidden transition-all duration-700`}
            >
              {menu[1].map((m, idx) => {
                return (
                  <p
                    key={idx}
                    onClick={() => {
                      navigate(m.url);
                      setIsSidebarOpen(false);
                    }}
                    className={`${
                      (pathname === "/" && m.url === "/home") ||
                      pathname === m.url
                        ? "text-white"
                        : "text-[#a9a9a9]"
                    } xl:ml-16 md:ml-14 sm:ml-12 3sm:ml-14 py-1 transition-all duration-700 line-clamp-1 cursor-pointer`}
                  >
                    {m.text}
                  </p>
                );
              })}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
