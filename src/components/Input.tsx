import { useContext, useEffect, useRef, useState } from "react";
import { MsgContext } from "../context/MsgContext";
import { InputProps } from "../interface";

const Input: React.FC<InputProps> = ({
  defaultValue,
  className,
  maxLength,
  onChange,
  onClear,
}) => {
  const [value, setValue] = useState("");
  const inputRef = useRef(null);
  const { setMsg } = useContext(MsgContext);

  const sendMessage = () => {
    setMsg("Hello from Child");
  };

  useEffect(() => {
    if (defaultValue) {
      setValue(defaultValue);
    }
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    let newValue = e.target.value;
    setValue(newValue);
    onChange(newValue);
  }

  function handleclear() {
    setValue("");
    onClear();
  }

  return (
    <div className={`input-container ${className}`}>
      <input
        className="input"
        type="text"
        maxLength={maxLength}
        ref={inputRef}
        value={value}
        onChange={handleChange}
      />
      <button onClick={handleclear}>X</button>
      <button onClick={sendMessage}>sendMessage</button>
    </div>
  );
};

export default Input;
