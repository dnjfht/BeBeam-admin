import { useState } from "react";
import Button from "../../components/button/Button";

import { GoChevronUp, GoChevronDown } from "react-icons/go";

export default function MeetingSmallContentWrap({
  subTitle,
  icon,
  img,
  text,
  des,
  children,
  styles,
}) {
  const [dropDown, setDropDown] = useState(false);

  return (
    <div className={`${styles} text-[#484848]`}>
      <h1 className="text-[#8A8A8A] text-[0.875rem]">{subTitle}</h1>

      <div
        className={`${
          text && (icon || img) ? "" : "hidden"
        } w-full mt-1 px-3 py-2 box-border border-[1px] border-solid border-[#8d8d8d] rounded-md`}
      >
        <div
          className={`${
            dropDown && des
              ? "pb-2 border-b-[1px] border-solid border-[#8d8d8d]"
              : ""
          } flex items-center justify-between w-full`}
        >
          <div className="flex items-center w-full gap-x-1">
            {img ? (
              <img
                className="w-8 h-8 rounded-full aspect-square object-cover border-[1px] border-solid border-[#8d8d8d]"
                src={img}
                alt="img"
              />
            ) : (
              icon
            )}
            {text}
          </div>

          <Button
            icon={dropDown ? <GoChevronUp /> : <GoChevronDown />}
            onClick={() => setDropDown((prev) => !prev)}
            styles={`${des ? "" : "hidden"} text-[1.2rem]`}
          />
        </div>

        <p
          className={`${
            dropDown && des ? "pt-2 h-auto" : "h-0"
          } overflow-hidden transition-all duration-700`}
        >
          {des}
        </p>
      </div>

      {children}
    </div>
  );
}
