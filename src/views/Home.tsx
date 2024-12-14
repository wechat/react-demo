import { useState } from "react";
import Input from "../components/Input";
import { MsgContext } from "../context/MsgContext";

const Home = () => {
  const [msg, setMsg] = useState("我是父组件");

  function onChange(value: string) {
    console.log(value);
  }

  function onClear() {
    console.log("onClear");
  }

  return (
    <div className="content">
      <h1>{msg}</h1>
      <MsgContext.Provider value={{ msg, setMsg }}>
        <Input
          defaultValue="请输入内容"
          className="input-box"
          maxLength={10}
          onChange={onChange}
          onClear={onClear}
        />
      </MsgContext.Provider>
    </div>
  );
};

export default Home;
