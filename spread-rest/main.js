let result = Math.max(3, 1, 4, 1, 5, 10, 2, 6);
console.log(result);

const nums = [3, 1, 4, 1, 5, 10, 2, 6];

result = Math.max(...nums);
console.log(result);

//

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let newArr = [...arr1];
let newArr2 = arr1;
let newArr3 = [...arr1, 12, ...arr2];
arr1.push(10);

console.log(`newArr2: ${newArr2}`);
console.log(newArr === arr1);
console.log(newArr2 === arr1);
console.log(`arr1: ${arr1}`);
console.log(`newArr3: ${newArr3}`);

//

const obj = {
  name: "Tom",
  age: 22,
};
const newObj = { ...obj };
const newObj2 = obj;

console.log(newObj === obj);
console.log(obj === newObj2);

const restA = (...argA) => console.log(argA);
restA(1, 3, 4)

const restB = (n, ...argB) => console.log(argB);
restB(1, 3, 4)
