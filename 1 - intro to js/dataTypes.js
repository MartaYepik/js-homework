// !Data types
"use strict"
// 1. Undefined 
// змінній не присвоєно значення
let typeUndefined;
console.log(typeUndefined);

// 2. null
let header = document.querySelector(".header");
console.log(header);
console.log(typeof null, "null types"); //type буде object з міркувань сумісності

// 3. boolean
// true or false
let numberOne = 3;
let numberTwo = 4;
console.log(numberOne == numberTwo);
console.log(numberOne !== numberTwo);

// 4. string
// тип даних який представляє рядки
let string = "Hello, I'm a string";
console.log(string);
console.log(typeof string); //typeof - тип даних змінної

// 5. number
let numberExample = 6;

let numberError = "Рядок який треба зробити числом";
console.log(+numberError, "not a number");
// NaN (not a number) результат неможливо змінити на число

// 6. Object - набір, колекція, що може поєднувати змінні з різними типами даних
let objectCar = {
    name: "Audi",
    price: 34000,
    sale: true,
};
console.log(typeof objectCar);
console.log(objectCar);

// 7. symbol - це тип даних, який може використовуватися як ключ у типі Object

// 8. BigInt не може бути сумісний з іншими типами даних

