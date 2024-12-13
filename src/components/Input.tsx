import { useEffect, useRef, useState } from "react";

interface InputProps {
  defaultValue: string;
  className: string;
  maxLength: number;
  onChange: (value: string) => void;
  onClear: () => void;
}

const Input: React.FC<InputProps> = ({
  defaultValue,
  className,
  maxLength,
  onChange,
  onClear,
}) => {
  const [value, setValue] = useState("");
  const inputRef = useRef(null);

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
    </div>
  );
};

export default Input;
