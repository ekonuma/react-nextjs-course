function fn(number) {
  return number * 2;
}

console.log(fn(2));

const arrowFunc = number => number * 2;

const arrowFuncPrint = (number1, number2) =>  {
  console.log(`N1: ${number1}, N2: ${number2}`);
  return number1 * number2; 
};

console.log(arrowFunc(2));
console.log(arrowFuncPrint(5,2));

const arrowFuncObj = number => ({result: number * 2 })

console.log(arrowFuncObj(2));