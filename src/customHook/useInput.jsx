import { useState } from "react";

export default function useInput() {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onDeleteText = (e) => {
    e.preventDefault();
    setText("");
  };

  return [text, onChange, onDeleteText];
}
