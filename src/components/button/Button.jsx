export default function Button({
  type,
  text,
  icon,
  children,
  onClick,
  basicStyles,
  styles,
  disabled,
  enableStyles,
}) {
  return (
    <button
      type={type}
      className={`${basicStyles} ${styles} ${
        disabled
          ? "bg-[#ccc] border-[1px] border-solid border-[#ccc] text-white"
          : `${enableStyles} border-solid`
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {text ?? icon}
      {children}
    </button>
  );
}
