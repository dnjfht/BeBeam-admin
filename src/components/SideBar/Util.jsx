export default function Util({ icon, text, isActive }) {
  return (
    <li
      className={`${
        isActive ? "text-white" : "text-[#a9a9a9]"
      } flex items-center gap-x-4 transition-all duration-700`}
    >
      <div
        className={`${
          isActive ? "bg-white text-black" : "border-[#a9a9a9] bg-transparent"
        } xl:w-12 md:w-10 sm:w-8 3sm:w-10 xl:h-12 md:h-10 sm:h-8 3sm:h-10 rounded-lg border-[1px] border-solid flex items-center justify-center`}
      >
        {icon}
      </div>

      <p>{text}</p>
    </li>
  );
}
