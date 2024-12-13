import Input from "../components/Input";

const Home = () => {
  function onChange(value: string) {
    console.log(value);
  }

  function onClear() {
    console.log("onClear");
  }

  return (
    <div className="content">
      <h1>Home</h1>
      <Input
        defaultValue="请输入内容"
        className="input-box"
        maxLength={10}
        onChange={onChange}
        onClear={onClear}
      />
    </div>
  );
};

export default Home;
