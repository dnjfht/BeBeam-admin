import Button from "../button/Button";

import { PiHandSwipeRight } from "react-icons/pi";

export default function Header({ setIsSidebarOpen }) {
  return (
    <div className="flex justify-between w-full sm:mb-0 3sm:mb-5">
      <Button
        icon={<PiHandSwipeRight />}
        onClick={() => setIsSidebarOpen(true)}
        styles="sm:hidden 3sm:block text-[1.4rem]"
      />

      <div className="flex items-center justify-center gap-x-2 text-[0.875rem] text-[#5f4141] ml-auto">
        <p>admin</p>
        <img
          className="w-8 h-8 rounded-full"
          src="/image/default-profile-img.png"
          alt="default-profile-img"
        />
      </div>
    </div>
  );
}
