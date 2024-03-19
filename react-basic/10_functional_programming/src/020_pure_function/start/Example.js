const Example = () => {
  const val1 = 2,
    val2 = 3;

  const add = (val1, val2) => val1 + val2;
  return (
    <>
      <h3>純粋関数</h3>
      <p>fn(決まった引数) には 決まった戻り値 を返す</p>
      <p>{add(val1, val2)}</p>
    </>
  );
};

export default Example;
