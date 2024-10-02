import { BsCaretLeft } from "react-icons/bs";

export default function PrevArrow({ onClick, isDark, fontSize, location }) {
  return (
    <button onClick={onClick} className={`${location} absolute z-[99]`}>
      <BsCaretLeft
        className={`${isDark ? "text-white" : "text-[#121212]"} ${fontSize}`}
      />
    </button>
  );
}
