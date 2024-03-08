import { useState } from "react";

const Example = () => {
  const [fruits, setFruits] = useState([
    { label: "Apple", value: 100, checked: false },
    { label: "Banana", value: 200, checked: false },
    { label: "Cherry", value: 300, checked: false },
  ]);

  const [sum, setSum] = useState(0);
  const handleChange = (e) => {
    const newFruits = fruits.map((fruit) => {
      const copyFruit = { ...fruit };
      if (copyFruit.label === e.target.value) {
        copyFruit.checked = !fruit.checked;
      }
      return copyFruit;
    });
    setFruits(newFruits);

    let sum = newFruits
      .filter((fruit) => fruit.checked)
      .reduce((sumVal, fruit) => sumVal + fruit.value, 0);
    setSum(sum);
  };
  return (
    <div>
      {fruits.map((fruit) => {
        return (
          <>
            <div key={fruit.label}>
              <input
                id={fruit.label}
                type="checkbox"
                value={fruit.label}
                checked={fruit.checked}
                onChange={handleChange}
              />
              <label htmlFor={fruit.label}>
                {fruit.label}:{fruit.value}
              </label>
            </div>
          </>
        );
      })}
      <div>合計：{sum}</div>
    </div>
  );
};

export default Example;
