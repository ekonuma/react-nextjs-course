const h1Element = document.querySelector('h1');
console.dir(h1Element);
h1Element.textContent = '変えました';
const btnE1 = document.querySelector('button');
const helloFn = (e) => {
    console.log(e.target.textContent);
    console.log('hello');
}
btnE1.addEventListener('click', helloFn);