// 유저 상세 정보

import { useState } from "react";
import { useRecoilValue } from "recoil";
import { TabState } from "../../../../recoil/content";
import Button from "../../../button/Button";
import BasicTab from "../../../tab/BasicTab";

import { FaCaretDown, FaCaretUp } from "react-icons/fa6";
import { PiCakeFill, PiGenderIntersexLight, PiMedalFill } from "react-icons/pi";
import { MdLocationPin, MdOutlineOnlinePrediction } from "react-icons/md";
import { BsCalendar2DateFill, BsClipboardCheckFill } from "react-icons/bs";
import { TbMessageReportFilled } from "react-icons/tb";

export default function UserDetails({ userId, datas }) {
  const [isDropDown, setIsDropDown] = useState(false);
  const tab = useRecoilValue(TabState);

  // api가 없으니 일단 이런 느낌으로.
  const data = datas.find((data) => data.id === userId);
  const userDetailData = [
    { icon: <PiCakeFill />, type: "생일", text: data.생일 },
    { icon: <PiGenderIntersexLight />, type: "성별", text: data.성별 },
    { icon: <MdLocationPin />, type: "주소", text: data.주소 },
    {
      icon: <BsCalendar2DateFill />,
      type: "회원가입 일자",
      text: data["회원가입 일자"],
    },
    {
      icon: <PiMedalFill />,
      type: "회원 등급",
      text: data["회원 등급"],
    },
    {
      icon: <BsClipboardCheckFill />,
      type: "정기모임 참여 횟수",
      text: data["정기모임 참여 횟수"],
    },
    {
      icon: <BsClipboardCheckFill />,
      type: "소모임 참여 횟수",
      text: data["소모임 참여 횟수"],
    },
    {
      icon: <TbMessageReportFilled />,
      type: "신고 횟수",
      text: data["신고 횟수"],
    },
    {
      icon: <MdOutlineOnlinePrediction />,
      type: "회원 상태",
      text: data["회원 상태"],
    },
  ];

  const tabList = [
    "찜한 모임",
    "신청 중인 모임",
    "참여 중인 모임",
    "개설한 모임",
  ];
  const meetingDatas =
    tab === "1"
      ? [
          {
            title: "소셜다이닝 : 이상식탁",
            type: "정기모임",
            img: "image/meeting/1.png",
          },
          {
            title: "사진출사모임 : 나를 기록하는 사진관",
            type: "정기모임",
            img: "image/meeting/4.png",
          },
          {
            title: "독서모임: 북페어링",
            type: "정기모임",
            img: "image/meeting/0.png",
          },
          {
            title: "운동모임:정기산행",
            type: "정기모임",
            img: "image/meeting/2.png",
          },
          {
            title: "운동모임 : 선셋 러닝",
            type: "정기모임",
            img: "image/meeting/3.png",
          },
        ]
      : tab === "2"
      ? [
          {
            title: "소셜다이닝 : 이상식탁",
            type: "정기모임",
            img: "image/meeting/1.png",
          },
        ]
      : tab === "3"
      ? [
          {
            title: "운동모임:정기산행",
            type: "정기모임",
            img: "image/meeting/2.png",
          },
        ]
      : [];

  return (
    <div className="w-full text-[#121212]">
      <h1 className="text-[1.2rem] font-bold">유저 상세 정보</h1>

      <div className="box-border p-4 mt-5 bg-[#e2e6ea] rounded-2xl shadow-[0_25px_30px_0_#abb4c6]">
        <div
          className={`${
            isDropDown
              ? "2sm:mb-4 mb-8 pb-4 border-[#cacaca]"
              : "border-transparent"
          } border-b-[1px] border-solid 2sm:flex items-center justify-between transition-all duration-700 2sm:text-left 3sm:text-center`}
        >
          <div className="items-center 2sm:flex gap-x-2">
            <div className="sm:w-32 2sm:w-48 3sm:w-48 p-1 box-border mx-auto rounded-full aspect-square shadow-[0_10px_25px_0_#abb4c6]">
              <img
                className="object-cover w-full rounded-full aspect-square 2sm:mx-0"
                src={data["프로필 이미지"]}
                alt="profile_img"
              />
            </div>

            <div className="mt-6 2sm:ml-2 2sm:mt-0">
              <p className="text-[1.1rem]">{data["닉네임"]}</p>

              <ul className="flex flex-col flex-wrap items-center w-full 2sm:mt-2 3sm:mt-5 2sm:flex-row 2sm:gap-x-6 2sm:gap-y-0 gap-y-2">
                <li>
                  <p className="text-[#9a9a9a] text-[0.875rem]">이름</p>
                  <p>{data["이름"]}</p>
                </li>

                <li>
                  <p className="text-[#9a9a9a] text-[0.875rem]">핸드폰 번호</p>
                  <p>{data["핸드폰 번호"]}</p>
                </li>

                <li>
                  <p className="text-[#9a9a9a] text-[0.875rem]">이메일</p>
                  <p>{data["이메일"]}</p>
                </li>
              </ul>
            </div>
          </div>

          <Button
            icon={isDropDown ? <FaCaretUp /> : <FaCaretDown />}
            onClick={() => {
              setIsDropDown((prev) => !prev);
            }}
            styles="text-[#737373] 2sm:mt-0 mt-4"
          />
        </div>

        <ul
          className={`${
            isDropDown ? "max-h-screen" : "max-h-0 overflow-hidden"
          } grid lg:grid-cols-3 2sm:grid-cols-2 grid-cols-1 gap-x-4 transition-all duration-700 text-[#5b5b5b] text-[0.875rem]`}
        >
          {userDetailData.map((user) => {
            return (
              <li className="mb-2 p-2 box-border bg-[#d9dfe5] rounded-lg shadow-inner">
                <div className="flex items-center gap-x-1">
                  {user.icon}
                  {user.type}
                </div>
                <p className="text-[#27b4aa]">{user.text}</p>
              </li>
            );
          })}
        </ul>
      </div>

      <BasicTab tabList={tabList} datas={meetingDatas} />
    </div>
  );
}
