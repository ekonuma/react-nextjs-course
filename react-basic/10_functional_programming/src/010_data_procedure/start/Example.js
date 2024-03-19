const Example = () => {
  const nums = [1, 2, 3];
  const sum = (arry) => arry.reduce((accu, curr) => accu + curr);

  const numbObj = {
    nums: [1, 2, 3],
    sum() {
      const nums = this.nums;
      let sumValue = 0;
      for (let index = 0; index < nums; index++) {
        sumValue += nums[index];
      }
      return sumValue;
    },
  };
  return (
    <>
      <h3>状態管理と処理を分離</h3>
      <p>関数型: ${numbObj.sum()}</p>
      <p>オブジェクト指向型: ${sum(nums)}</p>
    </>
  );
};

export default Example;
