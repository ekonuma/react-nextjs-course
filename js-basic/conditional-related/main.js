// 三項演算子（ ? : ）

const a = true;
let resultA;

if(a) {
  resultA = "true";
} else {
  resultA = "false";
}

console.log(resultA);

function getResult(param) {
   return param ? "Oh yeah!" : "Oh noooo";
}

console.log(getResult("----"));

let falsy = false;
console.log(getResult(falsy));
falsy = 0;
console.log(getResult(falsy));
falsy = 0n;
console.log(getResult(falsy));
falsy = "";
console.log(getResult(falsy));
falsy = null;
console.log(getResult(falsy));
falsy = undefined;
console.log(getResult(falsy));
falsy = NaN;
console.log(getResult(falsy));

console.log("----");

let truthy = true;
console.log(getResult(truthy));
tiruethy = 1;
console.log(getResult(truthy));
truethy = "Yes";
console.log(getResult(truthy));
console.log(getResult(Boolean(truthy)));
console.log(getResult(Boolean(falsy)));

console.log("----");

//falsy
console.log(0 && "Foo" && "");

//truthy
console.log(0 || "Foo" || "");