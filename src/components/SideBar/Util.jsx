import { useLocation, useNavigate } from "react-router-dom";

export default function Util({ icon, text, setIsSidebarOpen }) {
  const navigate = useNavigate();
  const path = useLocation().pathname;
  const isActive =
    path !== "/" && path.toUpperCase().slice(1) === text
      ? true
      : path === "/" && path.slice(1) + "HOME" === text
      ? true
      : false;

  return (
    <li
      onClick={() => {
        navigate(`/${text.toLowerCase()}`);
        setIsSidebarOpen(false);
      }}
      className={`${
        isActive ? "text-white ml-0" : "text-[#a9a9a9] ml-4"
      } flex items-center gap-x-4 transition-all duration-700 cursor-pointer xl:text-[1rem] lg:text-[0.875rem] md:text-[0.8rem] sm:text-[0.75rem] 2sm:text-[0.8rem] 3sm:text-[0.75rem]`}
    >
      <div
        className={`${
          isActive ? "bg-white text-black" : "border-[#a9a9a9] bg-transparent"
        } xl:w-12 md:w-10 sm:w-8 3sm:w-10 xl:h-12 md:h-10 sm:h-8 3sm:h-10 rounded-lg border-[1px] border-solid flex items-center justify-center`}
      >
        {icon}
      </div>

      <p className="xl:w-sidebar-menu-text-xl md:w-size-sidebar-menu-text-md 3sm:w-size-sidebar-menu-text-3sm">
        {text}
      </p>
    </li>
  );
}
