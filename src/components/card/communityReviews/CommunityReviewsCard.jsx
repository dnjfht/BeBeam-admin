import { useState } from "react";
import { timeAgo } from "../../../common";
import BasicImgSlider from "../../slider/BasicImgSlider";

import { BsCaretDown, BsCaretUp } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";

export default function CommunityReviewsCard({ data }) {
  const [isCloseComment, setIsCloseComment] = useState(true);

  return (
    <div className="box-border py-2 px-2 bg-[#e2e6ea] hover:bg-transparent border-[1px] border-solid hover:border-[#abb4c6] rounded-2xl shadow-[0_15px_16px_0_#abb4c6] text-[0.85rem] transition-all duration-700 cursor-pointer">
      <div className="mb-2 text-[0.75rem] text-[#929292]">
        <h1 className="text-[1rem] text-[#121212]">{data.meeting}</h1>
        <p>{timeAgo(data.creatingAt)}</p>
      </div>

      <BasicImgSlider
        datas={data.images}
        isArrow={data?.images?.length > 1}
        isInfinite={data?.images?.length > 1}
        height="h-[150px]"
        imgRoundedStyle="rounded-lg"
        arrowIsDark={true}
        arrowFontSize="text-[1.2rem]"
        prevArrowLocation="left-0 top-[44%]"
        nextArrowLocation="right-0 top-[44%]"
      />

      <p className={`${isCloseComment ? "line-clamp-4" : ""} mt-1`}>
        {data.comment}
      </p>

      <div className="flex justify-between mt-2">
        <div className="flex items-center gap-x-[2px]">
          <AiFillHeart className="text-[1rem]" />
          <p>{data.likes}</p>
        </div>

        <button
          onClick={() => setIsCloseComment((prev) => !prev)}
          className="text-[1rem]"
        >
          {isCloseComment ? <BsCaretDown /> : <BsCaretUp />}
        </button>
      </div>
    </div>
  );
}
