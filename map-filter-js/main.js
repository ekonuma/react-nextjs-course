const array = [10, 20, 30, 40];
const newArray = array.map(num => num/10);
console.log(newArray);

const newArray2 = newArray.map((num, i, array)  => {
    console.log(array)
    console.log(i)
    return num *4;
})
console.log(newArray2);

const newArray3 = newArray2.filter(num => num > 10)
console.log(newArray3);
