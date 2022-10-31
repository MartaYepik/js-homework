"use strict";

//створюємо порожній масив
let array = new Array();

//створюємо порожній масив
let array1 = [];
// console.log(array1);

let array2 = new Array(1, true, { name: 'Yana' }, '23', [1, 2, 3, 4]);

//створюємо масив зі значенням
let array3 = [1, 2, 3, 4, 5];
// console.log(array3);


let itemList = document.querySelectorAll('.list_item');
// console.log(itemList);

//*кількість елементів у масиві
// console.log(itemList.length);


//*виводимо 1 елемент масиву
// console.log(itemList[0]);

//Створюємо масив з 5ма елементами
let arrayFiveElement = new Array(5);
// console.log(arrayFiveElement.length);

arrayFiveElement[0] = "index - 0";
arrayFiveElement[1] = "index - 1";
arrayFiveElement[2] = "index - 2";
arrayFiveElement[3] = "index - 3";
// console.log(arrayFiveElement);

arrayFiveElement[4] = "index - 4";
arrayFiveElement[5] = "index - 5";
arrayFiveElement[6] = "index - 6";
arrayFiveElement[7] = "index - 7";

console.log(arrayFiveElement);


//!Array пара 2

//? Зменшуємо розмір масиву
arrayFiveElement.length = 3;
console.log(arrayFiveElement);

//? Підрахунок суми елементів

let arr = [12, 2, 3, 5, 6, 7, 18];
let result = 0;
for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
    result += arr[i];
}

console.log(result, "arr summ result");

//? Виводимо масив з різними типами даних
let arr2 = [42, "audi", true, undefined, NaN];
console.log(arr2[0], 'first array element');

for (let i = 0; i < arr2.length; i++){
    console.log(arr2[i]);
}

//? Двовимірні масиви

let array4 = [
    [1, 2, 2, 4, 5, 6],
    [7, 6, 7, 8, 9, 10],
];

console.log(array4[0][1], 'звернення до індексу масиву і елементу в масиві');


for (let i = 0; i < array4.length; i++){
    let k = array4[i];
    for (let j = 0; j < k.length; j++){
        console.log(k[j]);
    }
}


//? Зміна значення масиву через функцію

let nameArray = ['Jack', 'Bob', 'John', 'Bill', 'Anna'];
console.log(nameArray);
function setValueOfArray(arr, index, newValue) {
    arr[index] = newValue;
    
}
setValueOfArray(nameArray, 2, 'Angelina');
console.log(nameArray);

