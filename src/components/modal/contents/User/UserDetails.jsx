// 유저 상세 정보

import { useState } from "react";
import Button from "../../../button/Button";

import { FaCaretDown, FaCaretUp } from "react-icons/fa6";
import { PiCakeFill, PiGenderIntersexLight } from "react-icons/pi";
import { MdLocationPin } from "react-icons/md";

export default function UserDetails({ userId, datas }) {
  const [isDropDown, setIsDropDown] = useState(false);

  // api가 없으니 일단 이런 느낌으로.
  const data = datas.find((data) => data.id === userId);

  return (
    <div className="w-full text-[#121212]">
      <h1 className="text-[1.2rem] font-bold">유저 상세 정보</h1>

      <div className="box-border p-4 mt-5 bg-[#e2e6ea] rounded-2xl shadow-[0_25px_30px_0_#abb4c6]">
        <div
          className={`${
            isDropDown ? "mb-4 pb-4 border-[#cacaca]" : "border-transparent"
          } border-b-[1px] border-solid flex items-center justify-between transition-all duration-700`}
        >
          <div className="flex items-center gap-x-2">
            <img
              className="object-cover w-24 h-24 rounded-full"
              src={data["프로필 이미지"]}
              alt="profile_img"
            />

            <div className="ml-2">
              <p className="text-[1.1rem]">{data["닉네임"]}</p>

              <ul className="flex items-center w-full mt-2 gap-x-6">
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
            styles="text-[#737373]"
          />
        </div>

        <ul
          className={`${
            isDropDown ? "max-h-screen" : "max-h-0 overflow-hidden"
          } grid grid-cols-3 gap-x-4 transition-all duration-700 text-[#5b5b5b] text-[0.875rem]`}
        >
          <li className="p-2 box-border bg-[#d9dfe5] rounded-lg shadow-inner">
            <div className="flex items-center gap-x-1">
              <PiCakeFill />
              생일
            </div>
            <p className="text-[#27b4aa]">{data.생일}</p>
          </li>

          <li className="p-2 box-border bg-[#d9dfe5] rounded-lg shadow-inner">
            <div className="flex items-center gap-x-1">
              <PiGenderIntersexLight />
              성별
            </div>
            <p className="text-[#27b4aa]">{data.성별}</p>
          </li>

          <li className="p-2 box-border bg-[#d9dfe5] rounded-lg shadow-inner">
            <div className="flex items-center w-2/5 gap-x-1">
              <MdLocationPin />
              주소
            </div>
            <p className="w-3/5 text-[#27b4aa]">{data.주소}</p>
          </li>

          <li>ssf</li>
          <li>saqq</li>
          <li>ththt</li>
        </ul>
      </div>
    </div>
  );
}
