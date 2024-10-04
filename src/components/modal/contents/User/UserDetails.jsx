// 유저 상세 정보

import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { TabState } from "../../../../recoil/content";
import Button from "../../../button/Button";
import BasicTab from "../../../tab/BasicTab";
import MeetingCard from "../../../tab/MeetingCard";
import CommunityReviewsCard from "../../../card/communityReviews/CommunityReviewsCard";

import { FaCaretDown, FaCaretUp } from "react-icons/fa6";
import { PiCakeFill, PiGenderIntersexLight, PiMedalFill } from "react-icons/pi";
import { MdLocationPin, MdOutlineOnlinePrediction } from "react-icons/md";
import { BsCalendar2DateFill, BsClipboardCheckFill } from "react-icons/bs";
import { TbMessageReportFilled } from "react-icons/tb";

export default function UserDetails({ data, setIsModalOpen }) {
  const [isDropDown, setIsDropDown] = useState(false);
  const tab = useRecoilValue(TabState);

  // api가 없으니 일단 이런 느낌으로.
  const userDetailData = [
    { icon: <PiCakeFill />, type: "생일", text: data?.생일 ?? "" },
    { icon: <PiGenderIntersexLight />, type: "성별", text: data?.성별 ?? "" },
    { icon: <MdLocationPin />, type: "주소", text: data?.주소 ?? "" },
    {
      icon: <BsCalendar2DateFill />,
      type: "회원가입 일자",
      text: data?.["회원가입 일자"] ?? "",
    },
    {
      icon: <PiMedalFill />,
      type: "회원 등급",
      text: data?.["회원 등급"] ?? "",
    },
    {
      icon: <BsClipboardCheckFill />,
      type: "정기모임 참여 횟수",
      text: data?.["정기모임 참여 횟수"] ?? "",
    },
    {
      icon: <BsClipboardCheckFill />,
      type: "소모임 참여 횟수",
      text: data?.["소모임 참여 횟수"] ?? "",
    },
    {
      icon: <TbMessageReportFilled />,
      type: "신고 횟수",
      text: data?.["신고 횟수"] ?? "",
    },
    {
      icon: <MdOutlineOnlinePrediction />,
      type: "회원 상태",
      text: data?.["회원 상태"] ?? "",
    },
  ];

  const tabList = [
    "찜한 모임",
    "신청 중인 모임",
    "참여 중인 모임",
    "개설한 모임",
    "작성한 후기 댓글",
  ];
  const contentDatas =
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
      : tab === "4"
      ? [
          {
            title: "운동모임:정기산행",
            type: "정기모임",
            img: "image/meeting/2.png",
          },
        ]
      : [
          {
            nickName: "쥐구",
            creatingAt: "1727810074771",
            meeting: "독서모임: 북페어링 (상시모집)",
            comment:
              "매우 즐거웠어요! 시간 가는 줄 몰르고 즐겼네요 정말... 요즘 코로나라 마음도 뒤숭숭하고 집 밖으로도 자주 못 나갔는데 오랜만에 이렇게 책도 읽고 사람들이랑 책에 관하여 얘기도 주고 받으니까 기분이 너무 좋았어요!XD",
            images: [
              "https://images.unsplash.com/photo-1419640303358-44f0d27f48e7?q=80&w=1985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://images.unsplash.com/photo-1465929639680-64ee080eb3ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            ],
            likes: 2,
          },
          {
            nickName: "쥐구",
            creatingAt: "1727812148997",
            meeting: "소셜다이닝 : 이상식탁",
            comment:
              "매우 즐거웠어요! 시간 가는 줄 몰르고 즐겼네요 정말... 요즘 코로나라 마음도 뒤숭숭하고 집 밖으로도 자주 못 나갔는데 오랜만에 이렇게 사람들이랑 얘기도 나누고, 맛있는 음식도 먹으니 기분이 너무 좋았어요!XD",
            images: [
              "https://plus.unsplash.com/premium_photo-1673580742890-4af144293960?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            ],
            likes: 4,
          },
          {
            nickName: "쥐구",
            creatingAt: "1727852936676",
            meeting: "사진출사모임 : 나를 기록하는 사진관",
            comment:
              "평소 사진 찍는 걸 엄청 좋아하는데 마음에 비해 잘 찍지는 못했거든요... 그런데 여기 나오면서 사진 찍는 거에 대한 자신감이 생겼어요! 그리고 사진 찍는게 엄청 좋아졌답니다 ㅎㅎㅎ 어떻게 해야 사진이 잘 나오는지까지 익혀서 이제 사진 찍히는 것도 좋아한니다! 좋은 추억을 쌓기에 충분하니까 여러분들도 한 번 참여해보세요!",
            likes: 3,
          },
        ];

  useEffect(() => {
    if (data === undefined) {
      setIsModalOpen(false);
    }
  }, [data]);

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
          <div className="xl:w-28 lg:w-32 sm:w-36 2sm:w-40 3sm:w-48 p-1 box-border mx-auto rounded-full aspect-square shadow-[0_10px_25px_0_#abb4c6]">
            <img
              className="object-cover w-full rounded-full aspect-square 2sm:mx-0"
              src={data?.["프로필 이미지"] ?? ""}
              alt="profile_img"
            />
          </div>

          <div className="mt-6 2sm:ml-2 2sm:mt-0">
            <p className="text-[1.1rem]">{data?.["닉네임"] ?? ""}</p>

            <ul className="flex flex-col flex-wrap items-center w-full 2sm:mt-2 3sm:mt-5 2sm:flex-row 2sm:gap-x-6 2sm:gap-y-0 gap-y-2">
              <li>
                <p className="text-[#9a9a9a] text-[0.875rem]">이름</p>
                <p>{data?.["이름"] ?? ""}</p>
              </li>

              <li>
                <p className="text-[#9a9a9a] text-[0.875rem]">핸드폰 번호</p>
                <p>{data?.["핸드폰 번호"] ?? ""}</p>
              </li>

              <li>
                <p className="text-[#9a9a9a] text-[0.875rem]">이메일</p>
                <p>{data?.["이메일"] ?? ""}</p>
              </li>
            </ul>
          </div>

          <Button
            icon={isDropDown ? <FaCaretUp /> : <FaCaretDown />}
            onClick={() => {
              setIsDropDown((prev) => !prev);
            }}
            styles="mt-4 text-center 2sm:mt-0 text-[#737373]"
          />
        </div>

        <ul
          className={`${
            isDropDown ? "max-h-screen" : "max-h-0 overflow-hidden"
          } grid lg:grid-cols-3 2sm:grid-cols-2 grid-cols-1 gap-x-4 transition-all duration-700 text-[#5b5b5b] text-[0.875rem]`}
        >
          {userDetailData.map((user) => {
            return (
              <li
                key={user.id}
                className="mb-2 p-2 box-border bg-[#d9dfe5] rounded-lg shadow-inner"
              >
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

      <BasicTab tabList={tabList}>
        <ul className="grid grid-cols-1 lg:grid-cols-3 2sm:grid-cols-2 gap-x-4">
          {contentDatas.map((data) =>
            tab !== "5" ? (
              <MeetingCard data={data} />
            ) : (
              <CommunityReviewsCard data={data} />
            )
          )}
        </ul>
      </BasicTab>
    </div>
  );
}
