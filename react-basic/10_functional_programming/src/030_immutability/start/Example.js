const Example = () => {
  const num = { value: 2 };
  const double = (num) => {
    const newNum = { value: num.value * 2 };
    return newNum;
  };

  console.log(double(num), num);
  return (
    <>
      <h3>不変性（Immutability）</h3>
      <p>引数で渡ってきたオブジェクトを変更しない！</p>
    </>
  );
};

export default Example;
