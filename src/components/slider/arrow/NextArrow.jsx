import { BsCaretRight } from "react-icons/bs";

export default function NextArrow({ onClick, isDark, fontSize, location }) {
  return (
    <button onClick={onClick} className={`${location} absolute z-[99]`}>
      <BsCaretRight
        className={`${isDark ? "text-white" : "text-[#121212]"} ${fontSize}`}
      />
    </button>
  );
}
