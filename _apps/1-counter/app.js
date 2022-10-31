'use strict';

const number = document.getElementById('number');
console.log(number);
let btn_decrement = document.querySelector(".btn_decrement");
let btn_increment = document.querySelector(".btn_increment");
let btn_decrementFive = document.querySelector(".btn_decrement_5");
let btn_incrementFive = document.querySelector(".btn_increment_5");
let btn_decrementTen = document.querySelector(".btn_decrement_10");
let btn_incrementTen = document.querySelector(".btn_increment_10");
let btn_decrementTwenty = document.querySelector(".btn_decrement_20");
let btn_incrementTwenty = document.querySelector(".btn_increment_20");
let btn_reset = document.querySelector(".btn_reset");

let counter = 0;

function increment() {
    counter++;
    number.innerHTML = counter;
}
function incrementFive() {
    counter = counter + 5;
    number.innerHTML = counter;
}
function incrementTen() {
    counter = counter + 10;
    number.innerHTML = counter;
}
function incrementTwenty() {
    counter = counter + 20;
    number.innerHTML = counter;
}
function decrement() {
        counter--;
        if (counter < 0) {
            counter = 0;
            number.innerHTML = counter;
        } else {
            number.innerHTML = counter;
        }
}
function decrementFive() {
        counter = counter - 5;
        if (counter < 0) {
            counter = 0;
            number.innerHTML = counter;
        } else {
            number.innerHTML = counter;
        }
}
function decrementTen() {
        counter = counter - 10;
        if (counter < 0) {
            counter = 0;
            number.innerHTML = counter;
        } else {
            number.innerHTML = counter;
        }
}
function decrementTwenty() {
        counter = counter - 20;
        if (counter < 0) {
            counter = 0;
            number.innerHTML = counter;
        } else {
            number.innerHTML = counter;
        }
}

function reset() {
    counter = 0;
    number.innerHTML = counter;
}

if (counter <= 0) {
    number.innerHTML = 0;
}

btn_increment.addEventListener('click', increment);
btn_decrement.addEventListener('click', decrement);
btn_incrementFive.addEventListener('click', incrementFive);
btn_decrementFive.addEventListener('click', decrementFive);
btn_incrementTen.addEventListener('click', incrementTen);
btn_decrementTen.addEventListener('click', decrementTen);
btn_incrementTwenty.addEventListener('click', incrementTwenty);
btn_decrementTwenty.addEventListener('click', decrementTwenty);
btn_reset.addEventListener ('click', reset);