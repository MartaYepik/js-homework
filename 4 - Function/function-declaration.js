"use strict";

//*Function Declaration

//! 1. Оголошення функції
/**
 function functionName(param*) {
        function body;
 }
 */


//! 2. Назва функції

// create
// check
// show
// get
// calc
// is


//! 3. Кілька дій = кілька ф-цій

//! 3.1 Функція виводу повідомлення
function showMessage() {
    console.log("Hello, this function show message");
}

showMessage();

//! 4. Вивід на екран

function showFiveBlocks() {
    for (let i = 1; i <= 5; i++){
        document.write(`<h5 style='color: purple; margin: 2px;'> Block - ` + i + `</h5>`);
    }
}

showFiveBlocks();

//! 5. Вкладеніссть функції
function calcSumm() {
    let num1, num2;
    function getNumberOne() {
        num1 = 25;
    }
    function getNumberTwo() {
        num2 = 34;
    }
    getNumberOne();
    getNumberTwo();
    let summ = num1 + num2;
    document.write(summ);

}
calcSumm();


let x = 23;
let a = "23";
console.log(String(a));
///явна зміна типів
console.log(Boolean(x < 50));
if (x < 50) {
    function showNum() {
        console.log(x);
    }
    showNum();
}


//! 6. Використаання зовнішніх змінних
let year;
function checkYear() {
    year = +prompt("enter year");
    alert(
        year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0) 
        ?  "Високосний" : "Не високосний"
    );

}
//checkYear();


//! 7.1 Функції з аргументами

function showMessageWithArgument(arg) {
    console.log(arg);
}

showMessageWithArgument("Hello showMessageWithArgument");


function showMessageWithArgumentTwo(arg1, arg2, arg3) {
    console.log(arg1, arg2, arg3);
}

showMessageWithArgumentTwo("arg1", "arg2", "arg3");

//! 8 Функції з аргументами і значеннями по замовчуванню - default

function calcMultiply(a, b = 1) {
    let result = a * b;
    console.log(result);
} 
calcMultiply(10);

//! 9. Функції із зворотним викликом - callback

function calcSummMode(numberOne, numberTwo, more, less) {
    let summNumber = numberOne + numberTwo;
    summNumber > 20 ? more() : less();
}


function showMoreMessage() {
    console.log("Більше за 20");
}
function showLessMessage() {
    console.log("Менше за 20");
}

calcSummMode(20, 1, showMoreMessage, showLessMessage);


//! 10. Функції, які повертають значення

function cashBack(price, discount = 0.2) {
    // let result = price - (price * discount);
    // return result;
    return price - (price * discount);
}
document.write(`<h4 style='color: cyan; margin: 2px;'> Price with discount - ` + cashBack(500) + `</h4>`);

//! 11. Присвоєння значення змінної за результатами функції (return)
//? якщо ф-ція не повертає значення, отримаємо underfined
let priceWithDiscount = cashBack(500);
console.log(priceWithDiscount);

//! 12. return - зупиняє виконання ф-ціїю, код після return виконаний не буде

function cashBackMode(price, discount = 0.2) {
    return; // після return виконання функції зупиняється
    let result = price - (price * discount);
    return result;
}
document.write(`<h4 style='color: magenta; margin: 2px;'> Price - ` + cashBackMode(500, 0.02) + `</h4>`);

