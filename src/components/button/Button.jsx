export default function Button({
  type,
  text,
  icon,
  children,
  onClick,
  basicStyles,
  styles,
  disabled,
}) {
  return (
    <button
      type={type}
      className={`${basicStyles} ${styles}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text ?? icon}
      {children}
    </button>
  );
}
