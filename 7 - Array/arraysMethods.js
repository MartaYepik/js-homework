"use strict"
console.log("Methods");

//? Пошук значення в масиві

let array = [42, 56, 789, 332, 188, -1];

console.log(array);
let index = array.indexOf(56);
console.log(index);
console.log(array[index]);

let indexUnd = array.indexOf(1408);
console.log(indexUnd); // верне -1, якщо значення у масиві нема

//? Пошук з кінця
let index2 = array.lastIndexOf(188);
console.log(index2);


//? Пошук значень, що повторюються (indexOf)

let arr = [42, 56, 789, 332, 188, -1, 233, 44, 332, 45];
let count = 0;
let index3 = arr.indexOf(332);

while (index3 !== -1) {
    count++;
    index3 = arr.indexOf(332, index3 + 1);
}
console.log(count);

//? Пошук значень, що повторюються (lastIndexOf)
let arr1 = [42, 56, 789, 332, 188, -1, 233, 44, 332, 45, 332];
let count1 = 0;
let index4 = arr1.lastIndexOf(332);

while (index4 !== -1) {
    if (index == 0) {
        break;
    }
    count1++;
    index4 = arr1.lastIndexOf(332, index4 - 1);
}
console.log(count1);
