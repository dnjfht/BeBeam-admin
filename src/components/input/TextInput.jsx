export default function TextInput({
  type = "text",
  text,
  onChange,
  placeHolder,
  children,
  basicStyles,
  styles,
}) {
  return (
    <div className="relative">
      <input
        type={type}
        value={text}
        placeholder={placeHolder}
        onChange={onChange}
        className={`${basicStyles} ${styles} box-border outline-none`}
      />

      {children}
    </div>
  );
}
