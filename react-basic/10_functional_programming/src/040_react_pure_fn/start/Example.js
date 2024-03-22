const Example = () => {
  let value = 0;
  const ChildPure = ({ value }) => {
    return (
      <>
        <div>{value}</div>
      </>
    );
  };
  return (
    <>
      <ChildPure value={value++} />
      <ChildPure value={value++} />
      <ChildPure value={value++} />
    </>
  );
};

export default Example;
