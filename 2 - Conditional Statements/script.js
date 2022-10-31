"use strict";

const themeStyle = 
    "color: black; font-style: italic; background-color: orange; padding: 8px";

const exampleStyle =
    "color: yellow; font-style: italic; background-color: blue; padding: 6px";

console.log("%cIF - ELSE", themeStyle);
console.log("%cExample 1", exampleStyle);
if (2 < 3) console.log("Відпрацює, коли умова буде виводить true");

console.log("%cExample 2", exampleStyle);
// const year = prompt("Year ES6");
// //*prompt повертає рядок 
// if (year == 2015) {
//     console.log("Вірно");
// } else {
//     console.log("Ви помиляєтеся");
// }

console.log("%cExample 3", exampleStyle);
const trueExample = true;

if (!trueExample) {
    console.log("Блок коду який буде виконаний, якщо умова 1 правильна");
} else if (!trueExample) {
    console.log("Блок коду який буде виконаний, якщо умова 1 хибна, а умова два істина");
} else {
    console.log("Блок коду, який буде виконаний, якщо попередні умови були хибними");
}

console.log("%cExample 4", exampleStyle);
/*
let age = +prompt("Enter your age");
if (age <= 3 && age > 0) {
    console.log("Привіт, малеча");
} else if (age < 18 && age > 3){
    console.log("Привіт, тобі менше 18");
} else if (age >= 18 && age < 65) {
    console.log("Привіт, ви повнолітні");
} else if (age >= 65 && age <= 123) {
    console.log("Привіт, мої шанування");
} else {
    console.log("Ви ввели некоректні дані");
}
*/

console.log("%cExample 5", exampleStyle);
// * 0 - false || ...-1 та 1... = true
if (0) {
    console.log("if (0)");
} else if (1) {
    console.log("if (1)");
} 

console.log("%cExample 6", exampleStyle);
if (0 || null || undefined || NaN || false || "" || +"c4" ) {
    console.log("умова не виконається")
} else {
    console.log("Умова виконається");
}

// *typeof NaN = number
console.log(+"c4");

//////////////////////////////////////////////////////////
console.log("%cTERNARY", themeStyle);
//condition ? iftrue : iffalse

/*
console.log("%cExample 1", exampleStyle);
let age = +prompt("Enter your age");
let accessAllow = age >= 18 ? true : false;
console.log(accessAllow ? " Allowed" : "Dismit");
*/
/*
console.log("%cExample 2", exampleStyle);

let company = prompt("Яка компанія створила JS?", "Netscape");
console.log(company == "Netscape" ? alert("correct") : alert("Wrong"));
*/

console.log("%cExample 3", exampleStyle);
/*
let age = +prompt("Enter your age");
let message = age <= 3 && age > 0
    ? "hello baby"
    : age < 18 && age > 3
    ? "Hello junior"
    : age >= 18 && age < 65
    ? "Hello adult"
    : age >= 65 && age <= 123
    ? "Hello sir"
    : "What?";
alert(message);
*/

console.log("%cExample 4", exampleStyle);
let numberExample = 2 > 3 ? 5 : 6; // 6 бо умова false
console.log(numberExample);


//////////////////////////////////////////////////////////
console.log("%cSWITCH CASE", themeStyle);

// ?перевіряє значення на строгу рівність - ===
// якщо строгого порівняння не знайдено, то switch
// продовжує виконання case до найближчого break
// або до кінця конструкції

// *якщо жоден не виконується, тоді default

console.log("%cExample 1", exampleStyle);
/* let number = 2 + 2;
switch (number) {
    case 3:
        console.log("мало");
        break;
    case 4:
        console.log("точно");
        break;
    case 5:
        console.log("забагато");
        break;
    default: // необовязковий блок 
        console.log("I don't understand");
} */

console.log("%cExample 2", exampleStyle);
//*Групування case
/*
let number = "4";
switch (number) {
    case 3:
    case "3":
        console.log("мало");
        break;
    case 4:
    case "4":
        console.log("точно");
        break;
    case 5:
    case "5":
        console.log("забагато");
        break;
    default: // необовязковий блок 
        console.log("I don't understand");
} */

console.log("%cExample 3", exampleStyle);
/*
let number = prompt("enter number");
switch (+number) {
    case 3:
        console.log("мало");
        break;
    case 4:
        console.log("точно");
        break;
    case 5:
        console.log("забагато");
        break;
    default:
        console.log("I don't understand");
} */


console.log("%cExample 4", exampleStyle);

let age = +prompt("Enter your age");
switch (true) {
    case age <= 3 && age > 0:
        console.log("Привіт, малеча");
        break;
    case age < 18 && age > 3:
        console.log("Привіт, тобі менше 18");
        break;
    case age >= 18 && age < 65:
        console.log("Привіт, ви повнолітні");
        break;
    case age >= 65 && age <= 123:
        console.log("Привіт, мої шанування");
        break;
    default:
        console.log("Ви ввели некоректні дані");
}
