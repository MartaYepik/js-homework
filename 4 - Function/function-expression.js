"use strict";

//*Function Expression

//! 1. Синтаксис

function functionDeclaration() {
    console.log("functionDeclaration");
}
functionDeclaration(); // можемо викликаати будь-де

const functionExpresion = function () {
    console.log("functionExpresion");
};
functionExpresion(); // можемо викликати лише після оголошення змінної чи константи


//! 2. Оголошення функції з назвою

const showName = function showMessage() {
    console.log("showName function");
    console.log(showName.name, "function name");
};

showName();

//? showMessage();  // error


//! 3. Присвоєння ф-ції іншій змінній

const f3 = showName;
f3();
console.log(f3 == showName);

//! 4. this - ключове слово, що залежить від контексту в якому воно застосовується

const f4 = function () {
    console.log(this); // поверне undefined
};

f4();

//! 5. Ф-ція яка повертає значення
let f5 = function () {
    return "Ф-ція яка повертає значення";
};
console.log(f5());