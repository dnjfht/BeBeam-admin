export default function TextInput({
  type,
  text,
  onChange,
  placeHolder,
  children,
  basicStyles,
  styles,
}) {
  return (
    <div className="relative text-white">
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
