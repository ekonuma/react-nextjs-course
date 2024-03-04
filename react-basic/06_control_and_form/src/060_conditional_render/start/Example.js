import { useState } from "react";

const Example = () => {
  const animals = ["Dog", null, "Cat", "Rat"];

  const [filterVal, setFilterVal] = useState("");

  return (
    <>
      <input
        type="text"
        value={filterVal}
        onChange={(e) => setFilterVal(e.target.value)}
      />
      <ul>
        {animals
          .filter((animal) => {
            const animalSearch = animal ?? "";
            const isMatch = animalSearch.indexOf(filterVal) !== -1;
            return isMatch;
          })
          .map((animal) => (
            //<li key={animal}>{animal === "Dog" ? animal + "★" : animal}</li>
            <li key={animal}>
              {animal ?? "null,undefinedでした"}
              {animal === "Dog" && "★"}
            </li>
          ))}
      </ul>
    </>
  );
};

export default Example;
