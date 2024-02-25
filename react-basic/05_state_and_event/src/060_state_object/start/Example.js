import { useState } from "react";

const Example = () => {
  const personObj = { name: "Tom", age: 18 };
  const [person, setPerson] = useState(personObj);
  const changeName = (e) => setPerson({ ...person, name: e.target.value });
  const changeAge = (e) => setPerson({ ...person, age: e.target.value });
  const birthDay = () =>
    //setPerson({ name: person.name, age: Number.parseInt(person.age) + 1 });
    setPerson({ ...person, age: Number.parseInt(person.age) + 1 });
  const reset = () => setPerson({});
  return (
    <>
      <h3>名前: {person.name}</h3>
      <h3>年齢: {person.age}</h3>
      <input type="text" value={person.name} onChange={changeName} />
      <input type="number" value={person.age} onChange={changeAge} />
      <button onClick={birthDay}>BIRTH DAY</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default Example;
