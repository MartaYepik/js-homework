"use strict"
import { showMessage as color } from './script.js';
// 1. // Створити та викликати функцію, яка буде 
// приймати слово та переводити першу його літеру 
// у верхній регістр.Результат вивести у консоль.
// Наприклад: augusta - Augusta

let word = prompt("Enter some word");
function changeFirstLetter(word) {
    let wordFromUser = document.querySelector('.wordFromUser');
    let newWord = word[0].toUpperCase() + word.slice(1);
    wordFromUser.innerHTML = newWord;
    color(newWord);
}
changeFirstLetter(word);

// 2. // Створити та викликати функцію, яка буде приймати
// текст та перевіряти його на спам.Якщо спам є,
// повертати true.В іншому випадку false.Функція
// має бути нечутливою до регістру. Спам слова - VIP, SALE.

let str = prompt("Enter some sentence");
function checkPrompt(str) {
    let sentenceFromUser = document.querySelector(".sentenceFromUser");
    if (str.toLowerCase().includes("vip") || str.toLowerCase().includes("sale")) {
        sentenceFromUser.innerHTML = 'Sorry, seems there is a spam in your message';
        color('Sorry, seems there is a spam in your message');
    } else {
        sentenceFromUser.innerHTML = str;
        color(str);
    }
}
checkPrompt(str);


//3.// Створити та викликати функцію, яка буде приймати рядок
// і кількість символів(n).Якщо довжина рядка більше за n
// символів, виводити скорочений рядок у консоль та
// вставляти три крапки.Якщо довжина рядка менше
// за n символів, виводити рядок без змін.

let string = "Shop the sale online at H&M and stock up on lots of great deals";
let n = 27;
let userString = document.querySelector('.userString');
function changeString(string) {
    if (string.length > n) {
        let newString = string.slice(0, n) + "...";
        userString.innerHTML = newString;
        color(newString);
    } else {
        userString.innerHTML = string;
        color(string);
    }
}
changeString(string);