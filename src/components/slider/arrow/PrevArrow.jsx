import { BsFillCaretLeftFill } from "react-icons/bs";

export default function PrevArrow({
  onClick,
  isDark = false,
  fontSize,
  location,
  disabled,
}) {
  return (
    <button
      onClick={onClick}
      className={`${location} ${
        isDark ? "text-white" : "text-[#121212]"
      } ${fontSize} ${disabled ? "text-[#a7a7a7]" : ""} absolute z-[99]`}
      disabled={disabled}
    >
      <BsFillCaretLeftFill />
    </button>
  );
}
